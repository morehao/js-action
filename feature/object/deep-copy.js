'use strict'

/* 
  @description 深拷贝，Object.assign为浅拷贝
*/

function copy(obj) {
  function isObject(target) {
    return (Array.isArray(target) || ({}).toString.call(target) == '[object Object]')
  }
  if (!isObject(obj)) return obj
  let result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    result[key] = isObject(obj[key]) ? copy(obj[key]) : obj[key]
  }
  return result
}

const obj1 = {
   name: 'a1',
   age: 1,
   sub: {
     name: 'aa'
   }
}
const obj2 = obj1
// const obj3 = copy(obj1)
const obj3 = Object.assign({}, obj1)
obj1.name = 'a'
console.log('obj2:', obj2)

console.log('obj3:', obj3)
