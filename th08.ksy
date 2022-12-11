meta:
  id: th08
  file-extension: raw
  endian: le
seq:
  - id: file_header
    type: file_header
  - id: header
    type: header
instances:
  stages:
    pos: file_header.stage_offsets[_index]
    type:
      switch-on: file_header.stage_offsets[_index]
      cases:
        0: dummy
        _: stage
    repeat: expr
    repeat-expr: 9
types:
  dummy:
    doc: blank type
  file_header:
    seq:
      - id: padding
        size: 24
      - id: unknown_3
        type: u4
      - id: unknown_5
        type: u4
      - id: comp_size
        type: u4
      - id: unknown_6
        type: u4
      - id: stage_offsets
        type: u4
        repeat: expr
        repeat-expr: 9
      - id: potential_stage_size
        type: u4
        repeat: expr
        repeat-expr: 9
  header:
    seq:
      - id: unknown_1
        size: 2
      - id: shot
        type: u1
      - id: difficulty
        type: u1
      - id: date
        type: str
        size: 6
        encoding: ASCII
        terminator: 0x0
      - id: name
        type: str
        encoding: ASCII
        terminator: 0x0
        size: 9
      - id: unknown_2
        size: 5
      - id: unknown_3
        type: u4
        repeat: expr
        repeat-expr: 12
      - id: score
        type: u4
      - id: unknown_4
        type: u4
        repeat: expr
        repeat-expr: 25
      - id: slowdown
        type: f4
  stage:
    seq:
      - id: score
        type: u4
      - id: point_items
        type: u4
      - id: graze
        type: u4
      - id: time
        type: u4
      - id: unknown
        type: u4
      - id: piv
        type: u4
      - id: unknown_1
        type: u4
      - id: power
        type: u1
      - id: lives
        type: u1
      - id: bombs
        type: u1
      - id: unknown_2
        type: u1