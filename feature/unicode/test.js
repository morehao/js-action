'use strict'
// const start = 4e00
// const end = 
// console.log('result:', end.toString(10))
// console.log('\u{4E00}')
// console.log('\u{9FA5}')
// console.log(4 * Math.pow(16, 3))
const transTo10 = (num)=> {
  let numArr = num.split('').reverse()
  let result = 0
  let obj = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  }
  for (let [index, item] of numArr.entries()) {
    let current
    if (obj[item]) {
      current = obj[item] * Math.pow(16, index)
    } else {
      current = parseInt(item) * Math.pow(16, index)
    }
    result += current
  }
  return result
}
const transTo16 = (num, initResult)=> {
  let quotient = parseInt(num / 16)
  let remainder = num % 16
  let result = initResult
  let obj = {
    '10': 'a',
    '11': 'b',
    '12': 'c',
    '13': 'd',
    '14': 'e',
    '15': 'f'
  }
  if (quotient != 0) {
    if (remainder > 9) {
      remainder = obj[remainder]
    }
    result += remainder
    return transTo16(quotient, result)
  } else {
    result += remainder
    return result.split('').reverse().join('');
  }
}
const transToChinese = (start, end)=> {
  let newStart = transTo10(start)
  let newEnd = transTo10(end)
  let returnStart
  console.log(newStart < newEnd)
  console.log(newStart)
  console.log(newEnd)
  if (newStart < newEnd) {
    // let chinese = `\\u${start}`
    // console.log(chinese)
    returnStart = transTo16(newStart + 1, '')
    return transToChinese(returnStart, end)
  } else {
    // let chinese = `\\u${end}`
    // console.log(chinese)
    return end
  }
}
// console.log(transTo16(19968, ''))
// console.log(transTo10('6ab8'))
const start = '4e00'
const end = '9fa5'
console.log(transToChinese(start, end))
