'use strict'

// let arr = [1, 2, 3, 4]
// let promise = new Promise((resolve, reject) => {
//   for (let i in arr) {
//     setTimeout(() => {
//       console.log(parseInt(i) + 1)
//     }, i * 1000)
//   }
//   resolve()
// })
// promise.then(() => {
//   console.log('a')
// })

// 要求输出结果为： 1 2 3 4 a

// 答案
let arr = [1, 2, 3, 4]
let fun = async function () {
  for (let i of arr) {
    await new Promise(resolve => setTimeout(_ => resolve(i), 1000))
    // await new Promise(function (resolve) {
    //   setTimeout(function (_) {
    //     resolve(i)
    //   }, 1000)
    // })
    console.log(i)
  }
}
fun().then(_ => console.log('a'))
