'use strict'
const myModule = ( ()=> {
  let modules = {}
  function set (name, deps, impl) {
    for (let elem of deps) {
      elem  = modules[elem]
    }
    modules[name] = impl.apply(impl, deps)
  }
  function get(name) {
    return modules[name]
  }
  return {
    set: set,
    get: get
  }
})()

myModule.set('bar', [], ()=> {
  function hello(who) {
    return `Let me introduce:${who}`
  }
  return {
    hello: hello
  }
})

const bar = myModule.get('bar')
console.log(bar.hello('morehao'))