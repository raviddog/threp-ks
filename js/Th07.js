// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Th07 = factory(root.KaitaiStream);
  }
}(typeof self !== 'undefined' ? self : this, function (KaitaiStream) {
var Th07 = (function() {
  function Th07(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Th07.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.replayHeader = new ReplayHeader(this._io, this, this._root);
  }

  /**
   * blank type
   */

  var Dummy = Th07.Dummy = (function() {
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

  var Header = Th07.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [84, 55, 82, 80]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([84, 55, 82, 80], this.magic, this._io, "/types/header/seq/0");
      }
      this.version = this._io.readBytes(2);
      this.unknown1 = this._io.readBytes(7);
      this.key = this._io.readU1();
      this.unknown2 = this._io.readU2le();
      this.unknown3 = this._io.readU4le();
      this.compSize = this._io.readU4le();
      this.size = this._io.readU4le();
      this.stageOffsets = [];
      for (var i = 0; i < 7; i++) {
        this.stageOffsets.push(this._io.readU4le());
      }
      this.unknown4 = [];
      for (var i = 0; i < 7; i++) {
        this.unknown4.push(this._io.readU4le());
      }
    }

    return Header;
  })();

  var ReplayHeader = Th07.ReplayHeader = (function() {
    function ReplayHeader(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ReplayHeader.prototype._read = function() {
      this.unknown1 = this._io.readBytes(2);
      this.shot = this._io.readU1();
      this.difficulty = this._io.readU1();
      this.date = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(6), 0, false), "ASCII");
      this.name = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(9), 0, false), "ASCII");
      this.unknown2 = this._io.readBytes(5);
      this.score = this._io.readU4le();
      this.unknown3 = [];
      for (var i = 0; i < 23; i++) {
        this.unknown3.push(this._io.readU4le());
      }
      this.slowdown = this._io.readF4le();
    }

    return ReplayHeader;
  })();

  var Stage = Th07.Stage = (function() {
    function Stage(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Stage.prototype._read = function() {
      this.score = this._io.readU4le();
      this.pointItems = this._io.readU4le();
      this.piv = this._io.readU4le();
      this.cherrymax = this._io.readU4le();
      this.cherry = this._io.readU4le();
      this.graze = this._io.readU4le();
      this.unknown1 = this._io.readU4le();
      this.unknown2 = this._io.readU4le();
      this.unknown3 = this._io.readU2le();
      this.power = this._io.readU1();
      this.lives = this._io.readU1();
      this.bombs = this._io.readU1();
      this.unknown4 = this._io.readU1();
    }

    return Stage;
  })();
  Object.defineProperty(Th07.prototype, 'stages', {
    get: function() {
      if (this._m_stages !== undefined)
        return this._m_stages;
      var _pos = this._io.pos;
      this._io.seek(this.header.stageOffsets[i]);
      this._raw__m_stages = [];
      this._m_stages = [];
      for (var i = 0; i < 7; i++) {
        switch (this.header.stageOffsets[i]) {
        case 0:
          this._raw__m_stages.push(this._io.readBytes(40));
          var _io__raw__m_stages = new KaitaiStream(this._raw__m_stages[i]);
          this._m_stages.push(new Dummy(_io__raw__m_stages, this, this._root));
          break;
        default:
          this._raw__m_stages.push(this._io.readBytes(40));
          var _io__raw__m_stages = new KaitaiStream(this._raw__m_stages[i]);
          this._m_stages.push(new Stage(_io__raw__m_stages, this, this._root));
          break;
        }
      }
      this._io.seek(_pos);
      return this._m_stages;
    }
  });

  return Th07;
})();
return Th07;
}));
