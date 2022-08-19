from th_modern import *
from th13 import *
from th_common import *

f = open("th13_01.rpy", "rb")
data = f.read()
f.close()

print(len(data))
data = bytearray(data)
print(len(data))

thheader = ThModern.from_bytes(data)
print(thheader.main.magic_ver)

data = decode(data, len(data), 0x400, 0x5c, 0xe1)
data = decode(data, len(data), 0x100, 0x7d, 0x3a)
data = bytes(data)
# data = decompress(data)

f = open("th13_01.raw", "rb")
data = f.read()
f.close()

data = bytearray(data)

replay = Th13.from_bytes(data)
print(replay.header.name)
print(replay.header.stage_count)
print(replay.stage[2].stage_num)