'use strict'
const data = [
  {value: 4}, 
  {value: 2}, 
  {value: undefined}, 
  {value: undefined}, 
  {value: 1}, 
  {value: undefined}, 
  {value: undefined}, 
  {value: 7}, 
  {value: undefined}, 
  {value: 4}
]
console.log(data
  .sort((a, b)=> a - b)
  .map((item=> item.value))
  )

console.log([1, 23, 2, 3].sort())