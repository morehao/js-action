'use strict'
/*
  每秒一次的频率输出5次6
*/
for (var i = 0; i <= 5; i++) {
  (function() {
    setTimeout( function timer() {
      console.log('i1:', i)
    }, i * 1000)
  })()
}

/*
  每秒一次的频率依次输出1、2、3、4、5 
*/
// let关键字可以将变量绑定到所在的人员i作用域中，每次迭代都会声明。
// let为其声明的变量隐式地劫持了所在的块作用域
for (let i = 0; i <= 5; i++) {
  (function() {
    setTimeout( function timer() {
      console.log('i1:', i)
    }, i * 1000)
  })()
}
// or
for (var i = 0; i <= 5; i++) {
  (function() {
    var j = i
    setTimeout( function timer() {
      console.log('i1:', j)
    }, j * 1000)
  })()
}
