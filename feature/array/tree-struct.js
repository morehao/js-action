'use strict'
let obj = {
  '1010': {
    code: '1010',
    parent: '10',
    sub: {}
  },
  '1020': {
    code: '1020',
    parent: '10',
    sub: {}
  },
  '2010': {
    code: '2010',
    parent: '20',
    sub: {}
  },
  '2020': {
    code: '2020',
    parent: '20',
    sub: {}
  },
  '10': {
    code: '10',
    parent: 'a',
    sub: {}
  },
  '20': {
    code: '20',
    parent: 'a',
    sub: {}
  },
  'a': {
    code: 'a',
    parent: 'aa',
    sub: {}
  }
}
function toTreeStruct (data) {
  for (let item in data) {
    let parentCode = data[item].parent
    let currentCode = data[item].code
    if (data[parentCode]) {
      let parentSub = data[parentCode].sub
      parentSub[currentCode] = data[currentCode]
    }
  }
  return data
}
console.log(toTreeStruct(obj))