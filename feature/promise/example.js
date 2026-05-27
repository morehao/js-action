'use strict'

// example1：
// function timeout (ms) {
//   return new Promise((resolve, reject)=> {
//     setTimeout(resolve, ms, 'done')
//   })
// }
// timeout(100).then((value) => {
//   console.log(value)
// })

// example2：
// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve()
// })
// promise.then(function(){
//   console.log('resolved')
// })
// console.log('hi')

// example3：
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(()=> reject(new Error('fail')),3000)
// })
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(()=> resolve(p1),1000)
// })
// p2.then(result => console.log(result))
//   .catch(error => console.log(error))

// example4:
// new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2)
// }).then(r => {
//   console.log('r:', r)
// })

// example5:
