'use strict'

class parents {
  constructor () {
    this.body = 'qweqwe'
  }
  output (params) {
    console.log('static:', params)
    console.log('this:', this.body)
  }
  // output (params) {
  //   console.log('params:', params)
  //   console.log('this-parents:', this.body)
  //   console.log('rst:', this.rst
  //   )
  // }
}

//  parents.output(1)
// const parentObj = new parents()
// parentObj.output('23232')
// module.exports = parents
