'use strict'
const parents = require('./parents')

class children extends parents {
  static print (params) {
    super.output(params)
  }
  print (params) {
    const ctx = this
    console.log('this:', ctx.body)
    ctx.body = {name: 'a'}
    ctx.rst = 'rst'
    super.output(params)
  }
}
// children.print('aa')
// const lib = new children()
// lib.print('a')
