'use strict'
const p1 = ()=> new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.log(1)
    resolve(1)
  }, 10000)
})

const p2 = ()=> new Promise((resolve, reject)=> {
  setTimeout(()=> {
    console.log(2)
    resolve(2)
  }, 20000)
})
async function run() {
  console.time('time1')
  const result1 = await p1()
  const result2 = await p2()
  console.timeEnd('time1')

  console.time('time2')
  const result3 = p1()
  const result4 = p2()
  await result3
  await result4
  // await Promise.all([result3, result4])
  console.timeEnd('time2')
}
run()
/*
那个就是说await p1() await p2()执行过程就是，new p1 => await => new p2 => await,
而await result3 await result4，执行顺序就是new p1() => new p2 => await => await
*/