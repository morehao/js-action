const code = '9100A52011'
console.log(code.length)
if (code.length > 6) {
  console.log('>')
  const newStr = code.slice(-6)
  console.log('newStr:', newStr)
}