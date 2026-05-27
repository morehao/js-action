function Person () {
  console.log('Person')
}
// prototype是函数才会有的属性
Person.prototype.name = 'kevin'
console.log('prototype:', Person.prototype) // kevin
const person1 = new Person()
const person2 = new Person()
console.log(person1.name + person2.name) // kevin
