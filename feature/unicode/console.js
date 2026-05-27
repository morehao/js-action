'use strict'
const unicodeNum = '4e00'

function formatUnicode (code) {
  
  // let obj = {
  //   code: `\\u{${unicodeNum}}`
  // }
  // let objStr = JSON.stringify(obj)
  let objStr = `{"code":"\\u${unicodeNum}"}`
  let newCode = JSON.parse(objStr)
  return newCode.code
}
console.log(formatUnicode(unicodeNum))