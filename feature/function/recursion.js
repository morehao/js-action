'use strict'
function factorial (num, total) {
  if (num === 1) return total
  return factorial(num - 1, num * total)
}

function factorial1 (num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}
console.time('start')
// factorial(5000)
// factorial(5000, 1)
console.timeEnd('start')
