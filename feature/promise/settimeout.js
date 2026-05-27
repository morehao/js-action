'use strict'

let arr = [1, 2, 3, 4]
let promise = new Promise((resolve, reject) => {
  for (let i in arr) {
    setTimeout(() => {
      console.log(parseInt(i) + 1)
    }, i * 1000)
  }
  resolve()
})
promise.then(() => {
  console.log('a')
})

// 1 2 3 4 a
