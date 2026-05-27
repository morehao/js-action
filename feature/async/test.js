function fun1 () {
  setTimeout(()=> {
    console.log(1)
  }, 10000) 
}
function fun2 () {
  setTimeout(()=> {
    console.log(2)
  }, 10000) 
}
let checkRes = true
const run = ()=> {
  if (checkRes) {
    fun1()
    return 'fun1'
  } else {
    fun2()
    return 'fun2'
  }
}
console.log(run())