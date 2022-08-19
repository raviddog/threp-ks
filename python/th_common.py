import copy

def th06_decrypt(data, key):
    for byte in data:
        yield (byte - key) % 256
        key += 7
    return data

def decompress(data):
	return internal_decompress(data, bytearray(data), len(data))

# VERY BAD SMELLS
def get_bit(buffer, pos, filter, length):
	result = 0
	current = buffer[pos]
	i = 0
	while i < length:
		result <<= 1
		if current & filter:
			result |= 0x1
		filter >>= 1
		if filter == 0:
			pos += 1
			current = buffer[pos]
			filter = 0x80
	return result

# STINKY STINKY DOESNT WORK
def internal_decompress(buffer, decode, length):
	pointer = 0
	dest = 0
	filter = 0x80
	dict = bytearray(0x2010)
	while pointer < length:
		bits = get_bit(buffer, pointer, filter, 1)
		if pointer >= length:
			return dest
		if bits != 0:
			bits = get_bit(buffer, pointer, filter, 8)
			if pointer >= length:
				return dest
			decode[dest] = bits
			dict[dest & 0x1fff] = bits
			dest += 1
		else:
			bits = get_bit(buffer, pointer, filter, 13)
			if pointer >= length:
				return dest
			index = bits - 1
			bits = get_bit(buffer, pointer, filter, 4)
			if pointer >= length:
				return dest
			bits += 3
			i = 0
			while i < bits:
				dict[dest & 0x1fff] = dict[index + 3]
				decode[dest] = dict[index + i]
				dest += 1
				i += 1
	return dest
	



    # i, p = 0, tp1, tp2, hf, left = length
def decode(buffer, length, block_size, base, add):
	tbuf = copy.deepcopy(buffer)
	left = length
	if ((left % block_size) < (block_size / 4)):
		left -= left % block_size
	left -= length & 1
	p = 0
	while (left != 0):
		if (left < block_size):
			block_size = left
		tp1 = p + block_size - 1
		tp2 = p + block_size - 2
		hf = int((block_size + (block_size & 0x1)) / 2)
		# for (i = 0; i < hf; i += 1, p += 1):
		i = 0
		while i < hf:
			tmp = tbuf[p] ^ base
			buffer[tp1] = tmp % 256
			base += add
			tp1 -= 2
			p += 1
			i += 1
		hf = int(block_size / 2)
		i = 0
		while i < hf:
			tmp = tbuf[p] ^ base
			buffer[tp2] = tmp % 256
			base += add
			tp2 -= 2
			p += 1
			i += 1
		left -= block_size
	return buffer