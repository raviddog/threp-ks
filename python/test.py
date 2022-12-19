import th_modern, th_common
import th06, th07, th08, th09, th10, th11, th12, th13, th14

# thheader = th_modern.ThModern.from_bytes(data)
# data = bytearray(thheader.main.comp_data)

# th_common.decode(data, thheader.main.comp_size, 0x800, 0xaa, 0xe1)
# th_common.decode(data, thheader.main.comp_size, 0x40, 0x3d, 0x7a)

# decodedata = bytearray(thheader.main.size)
# print(thheader.main.comp_size)
# th_common.decompress(data, decodedata, thheader.main.comp_size)
# data = decodedata

# replay = th11.Th11.from_bytes(data)
# print(replay.header.name)
# print(replay.header.stagecount)
# print(replay.stages[2].stage)

f = open("th9_24.raw", "rb")
data = f.read()
f.close()

r = th09.Th09.from_bytes(data)

for i in range(40):
    if isinstance(r.stages[i], th09.Th09.Stage):
        print(i)
        print(r.stages[i].score)
        print(r.stages[i].shot)
        print("-------------")


f = open("th9_25.raw", "rb")
data = f.read()
f.close()
r = th09.Th09.from_bytes(data)

for i in range(40):
    if isinstance(r.stages[i], th09.Th09.Stage):
        print(i)
        print(r.stages[i].score)
        print(r.stages[i].shot)
        print("-------------")

# for stage in r.stages:
#     if isinstance(stage, th09.Th09.Stage):
#         print(stage.score)
#         print(stage.pair)
#         print(stage.shot)
#         print(stage.ai)
#         print(stage.lives)
#         print(stage.unknown)