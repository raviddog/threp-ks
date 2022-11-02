kaitai-struct-compiler -t python *.ksy
mv -t python *.py
kaitai-struct-compiler -t javascript *.ksy
mv -t js *.js