from th_modern import *
from th13 import *
import th07
from th_common import *
from th06 import *
from th10 import *

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

replay = Th13.from_bytes(data)
print(replay.header.name)
print(replay.header.stage_count)
print(replay.stage[2].stage_num)


f = open("th10_01.rpy", "rb")
data = f.read()
f.close()

thheader = ThModern.from_bytes(data)
data = bytearray(thheader.main.comp_data)

decode(data, thheader.main.comp_size, 0x400, 0xaa, 0xe1)
decode(data, thheader.main.comp_size, 0x80, 0x3d, 0x7a)
decodedata = bytearray(thheader.main.size)
decompress(data, decodedata, thheader.main.comp_size-2)

replay = Th10.from_bytes(decodedata)
print(replay.header.name)
print(replay.header.stagecount)
print(replay.stages[2].score)