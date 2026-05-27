function Person () {
  console.log('Person')
}
const person = new Person()
console.log(person._proto_ === person.prototype) // true
