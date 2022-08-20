// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Th6 = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
var Th6 = (function() {
  function Th6(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Th6.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
  }

  /**
   * blank type
   */

  var Dummy = Th6.Dummy = (function() {
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

  var Header = Th6.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [84, 54, 82, 80]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([84, 54, 82, 80], this.magic, this._io, "/types/header/seq/0");
      }
      this.version = this._io.readBytes(2);
      this.shot = this._io.readU1();
      this.difficulty = this._io.readU1();
      this.checksum = this._io.readU4le();
      this.unknown1 = this._io.readU2le();
      this.ke = this._io.readU1();
      this.unknown2 = this._io.readU1();
      this.date = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(9), 0, false), "ASCII");
      this.name = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(9), 0, false), "ASCII");
      this.unknown3 = this._io.readU2le();
      this.score = this._io.readU4le();
      this.unknown4 = this._io.readU4le();
      this.slowdown = this._io.readF4le();
      this.unknown5 = this._io.readU4le();
      this.stageOffsets = [];
      for (var i = 0; i < 7; i++) {
        this.stageOffsets.push(this._io.readU4le());
      }
    }

    return Header;
  })();

  var Stage = Th6.Stage = (function() {
    function Stage(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Stage.prototype._read = function() {
      this.score = this._io.readU4le();
      this.seed = this._io.readU2le();
      this.unknown1 = this._io.readU2le();
      this.power = this._io.readU1();
      this.lives = this._io.readS1();
      this.bombs = this._io.readS1();
      this.rank = this._io.readU1();
    }

    return Stage;
  })();
  Object.defineProperty(Th6.prototype, 'stages', {
    get: function() {
      if (this._m_stages !== undefined)
        return this._m_stages;
      var _pos = this._io.pos;
      this._io.seek(this.header.stageOffsets[i]);
      this._m_stages = [];
      for (var i = 0; i < 7; i++) {
        switch (this.header.stageOffsets[i]) {
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

  return Th6;
})();
return Th6;
}));
