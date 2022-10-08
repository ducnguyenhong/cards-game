const CARDS = [
  {
    id: 1,
    name: 'A',
    type: 'heart',
    color: 'red',
    valueType: 4,
    value: 14
  },
  {
    id: 2,
    name: '2',
    type: 'heart',
    color: 'red',
    valueType: 4,
    value: 15
  },
  {
    id: 3,
    name: '3',
    type: 'heart',
    color: 'red',
    valueType: 4,
    value: 3
  },
  {
    id: 4,
    name: '4',
    type: 'heart',
    color: 'red',
    valueType: 4,
    value: 4
  },
  {
    id: 5,
    name: '5',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 5
  },
  {
    id: 6,
    name: '6',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 6
  },
  {
    id: 7,
    name: '7',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 7
  },
  {
    id: 8,
    name: '8',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 8
  },
  {
    id: 9,
    name: '9',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 9
  },
  {
    id: 10,
    name: '10',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 10
  },
  {
    id: 11,
    name: 'J',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 11
  },
  {
    id: 12,
    name: 'Q',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 12
  },
  {
    id: 13,
    name: 'K',
    type: 'heart',
color: 'red',
valueType: 4,
    value: 13
  },
  {
    id: 14,
    name: 'A',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 14
  },
  {
    id: 15,
    name: '2',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 15
  },
  {
    id: 16,
    name: '3',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 3
  },
  {
    id: 17,
    name: '4',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 4
  },
  {
    id: 18,
    name: '5',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 5
  },
  {
    id: 19,
    name: '6',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 6
  },
  {
    id: 20,
    name: '7',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 7
  },
  {
    id: 21,
    name: '8',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 8
  },
  {
    id: 22,
    name: '9',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 9
  },
  {
    id: 23,
    name: '10',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 10
  },
  {
    id: 24,
    name: 'J',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 11
  },
  {
    id: 25,
    name: 'Q',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 12
  },
  {
    id: 26,
    name: 'K',
    type: 'diamond',
color: 'red',
valueType: 3,
    value: 13
  },

  {
    id: 27,
    name: 'A',
    type: 'club',
color: 'black',
valueType: 2,
    value: 14
  },
  {
    id: 28,
    name: '2',
    type: 'club',
color: 'black',
valueType: 2,
    value: 15
  },
  {
    id: 29,
    name: '3',
    type: 'club',
color: 'black',
valueType: 2,
    value: 3
  },
  {
    id: 30,
    name: '4',
    type: 'club',
color: 'black',
valueType: 2,
    value: 4
  },
  {
    id: 31,
    name: '5',
    type: 'club',
color: 'black',
valueType: 2,
    value: 5
  },
  {
    id: 32,
    name: '6',
    type: 'club',
color: 'black',
valueType: 2,
    value: 6
  },
  {
    id: 33,
    name: '7',
    type: 'club',
color: 'black',
valueType: 2,
    value: 7
  },
  {
    id: 34,
    name: '8',
    type: 'club',
color: 'black',
valueType: 2,
    value: 8
  },
  {
    id: 35,
    name: '9',
    type: 'club',
color: 'black',
valueType: 2,
    value: 9
  },
  {
    id: 36,
    name: '10',
    type: 'club',
color: 'black',
valueType: 2,
    value: 10
  },
  {
    id: 37,
    name: 'J',
    type: 'club',
color: 'black',
valueType: 2,
    value: 11
  },
  {
    id: 38,
    name: 'Q',
    type: 'club',
color: 'black',
valueType: 2,
    value: 12
  },
  {
    id: 39,
    name: 'K',
    type: 'club',
color: 'black',
valueType: 2,
    value: 13
  },
  {
    id: 40,
    name: 'A',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 14
  },
  {
    id: 41,
    name: '2',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 15
  },
  {
    id: 42,
    name: '3',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 3
  },
  {
    id: 43,
    name: '4',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 4
  },
  {
    id: 44,
    name: '5',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 5
  },
  {
    id: 45,
    name: '6',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 6
  },
  {
    id: 46,
    name: '7',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 7
  },
  {
    id: 47,
    name: '8',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 8
  },
  {
    id: 48,
    name: '9',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 9
  },
  {
    id: 49,
    name: '10',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 10
  },
  {
    id: 50,
    name: 'J',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 11
  },
  {
    id: 51,
    name: 'Q',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 12
  },
  {
    id: 52,
    name: 'K',
    type: 'spade',
color: 'black',
valueType: 1,
    value: 13
  },
] 

module.exports = CARDS;