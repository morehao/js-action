'use strict'
const body = {name: 'name', age: 'age'}

let {name, age} = {...body}
console.log({name, age})
console.log(name)
