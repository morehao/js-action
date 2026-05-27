'use strict'
const fs = require('fs')
function getTxt (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
async function run (params) {
  console.log('1111')
  const file = await getTxt(params)
  console.log(file)
  return file
}
run('./a.txt')
console.log('start')
