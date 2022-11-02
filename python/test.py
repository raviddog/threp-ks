import th_modern, th_common
import th06, th07, th10, th11, th12, th13, th14

f = open("th11_01.rpy", "rb")
data = f.read()
f.close()

thheader = th_modern.ThModern.from_bytes(data)
data = bytearray(thheader.main.comp_data)

th_common.decode(data, thheader.main.comp_size, 0x800, 0xaa, 0xe1)
th_common.decode(data, thheader.main.comp_size, 0x40, 0x3d, 0x7a)

decodedata = bytearray(thheader.main.size)
print(thheader.main.comp_size)
th_common.decompress(data, decodedata, thheader.main.comp_size)
data = decodedata

replay = th11.Th11.from_bytes(data)
print(replay.header.name)
print(replay.header.stagecount)
print(replay.stages[2].stage)

