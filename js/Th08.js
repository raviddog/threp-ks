// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Th08 = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
var Th08 = (function() {
  function Th08(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Th08.prototype._read = function() {
    this.fileHeader = new FileHeader(this._io, this, this._root);
    this.header = new Header(this._io, this, this._root);
  }

  /**
   * blank type
   */

  var Dummy = Th08.Dummy = (function() {
    function Dummy(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Dummy.prototype._read = function() {
    }

    return Dummy;
  })();

  var FileHeader = Th08.FileHeader = (function() {
    function FileHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    FileHeader.prototype._read = function() {
      this.padding = this._io.readBytes(16);
      this.unknown3 = this._io.readU4le();
      this.unknown5 = this._io.readU4le();
      this.compSize = this._io.readU4le();
      this.unknown6 = this._io.readU4le();
      this.stageOffsets = [];
      for (var i = 0; i < 9; i++) {
        this.stageOffsets.push(this._io.readU4le());
      }
      this.potentialStageSize = [];
      for (var i = 0; i < 9; i++) {
        this.potentialStageSize.push(this._io.readU4le());
      }
    }

    return FileHeader;
  })();

  var Header = Th08.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.unknown1 = this._io.readBytes(2);
      this.shot = this._io.readU1();
      this.difficulty = this._io.readU1();
      this.date = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(6), 0, false), "ASCII");
      this.name = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(10), 0, false), "ASCII");
      this.spellCardId = this._io.readU2le();
      this.spellCardName = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(50), 0, false), "SJIS");
      this.score = this._io.readU4le();
      this.unknown4 = [];
      for (var i = 0; i < 25; i++) {
        this.unknown4.push(this._io.readU4le());
      }
      this.slowdown = this._io.readF4le();
    }

    return Header;
  })();

  var Stage = Th08.Stage = (function() {
    function Stage(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Stage.prototype._read = function() {
      this.score = this._io.readU4le();
      this.pointItems = this._io.readU4le();
      this.graze = this._io.readU4le();
      this.time = this._io.readU4le();
      this.unknown = this._io.readU4le();
      this.piv = this._io.readU4le();
      this.unknown1 = this._io.readU4le();
      this.power = this._io.readU1();
      this.lives = this._io.readU1();
      this.bombs = this._io.readU1();
      this.unknown2 = this._io.readU1();
    }

    return Stage;
  })();
  Object.defineProperty(Th08.prototype, 'stages', {
    get: function() {
      if (this._m_stages !== undefined)
        return this._m_stages;
      var _pos = this._io.pos;
      this._io.seek(this.fileHeader.stageOffsets[i]);
      this._m_stages = [];
      for (var i = 0; i < 9; i++) {
        switch (this.fileHeader.stageOffsets[i]) {
        case 0:
          this._m_stages.push(new Dummy(this._io, this, this._root));
          break;
        default:
          this._m_stages.push(new Stage(this._io, this, this._root));
          break;
        }
      }
      this._io.seek(_pos);
      return this._m_stages;
    }
  });

  return Th08;
})();
return Th08;
}));
