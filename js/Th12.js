// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Th12 = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
var Th12 = (function() {
  function Th12(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Th12.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.stage = [];
    for (var i = 0; i < this.header.stagecount; i++) {
      this.stage.push(new Stage(this._io, this, this._root));
    }
  }

  var Header = Th12.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.name = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(12), 0, false), "ASCII");
      this.timestamp = this._io.readU8le();
      this.score = this._io.readU4le();
      this.unknown1 = this._io.readBytes(60);
      this.slowdown = this._io.readF4le();
      this.stagecount = this._io.readU4le();
      this.shot = this._io.readU4le();
      this.subshot = this._io.readU4le();
      this.difficulty = this._io.readU4le();
      this.cleared = this._io.readU4le();
      this.unknown2 = this._io.readU4le();
    }

    return Header;
  })();

  var Stage = Th12.Stage = (function() {
    function Stage(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Stage.prototype._read = function() {
      this.stage = this._io.readU2le();
      this.seed = this._io.readU2le();
      this.frames = this._io.readU4le();
      this.stageSize = this._io.readU4le();
      this.score = this._io.readU4le();
      this.power = this._io.readU4le();
      this.piv = this._io.readU4le();
      this.lives = this._io.readU2le();
      this.livePieces = this._io.readU2le();
      this.bombs = this._io.readU2le();
      this.bombPieces = this._io.readU2le();
      this.ufo1 = this._io.readU4le();
      this.ufo2 = this._io.readU4le();
      this.ufo3 = this._io.readU4le();
      this.unknown1 = this._io.readBytes(24);
      this.graze = this._io.readU4le();
      this.unknown2 = this._io.readBytes(88);
      this.stageData = this._io.readBytes(this.stageSize);
    }

    return Stage;
  })();

  return Th12;
})();
return Th12;
}));
