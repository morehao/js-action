const arr = [{name: 'name', age: '22'}, {name: 'name', age: '22'}, {name: 'name', age: '22'}]
for (let item of arr) {
  item.age = '23'
}
console.log('arr:', arr)
