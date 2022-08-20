from th_modern import *
from th13 import *
from th_common import *

f = open("th13_01.rpy", "rb")
data = f.read()
f.close()

thheader = ThModern.from_bytes(data)
data = bytearray(thheader.main.comp_data)

decode(data, thheader.main.comp_size, 0x400, 0x5c, 0xe1)
decode(data, thheader.main.comp_size, 0x100, 0x7d, 0x3a)

decodedata = bytearray(thheader.main.size)
print(thheader.main.comp_size)
decompress(data, decodedata, thheader.main.comp_size-2)
data = decodedata

f = open("th13_01.raw", "wb")
f.write(data)
f.close()

replay = Th13.from_bytes(data)
print(replay.header.name)
print(replay.header.stage_count)
print(replay.stage[2].stage_num)