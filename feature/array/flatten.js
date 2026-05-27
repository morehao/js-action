'use strict'

// 扁平化数组

const has = (obj, path) => {
  let hasOwnProperty = Object.prototype.hasOwnProperty
  return obj != null && hasOwnProperty.call(obj, path)
}

const isArrayLike = (value) => {
  return value != null && typeof value != 'function' && isLength(value.length)
}

const isObjectLike = (value) => {
  return typeof value == 'object' && value !== null
}

const getTag = (value) => {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)  
}

const isLength = (value) => {
  const MAX_SAFE_INTEGER = 9007199254740991
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

const isArguments = (value) => {
  return isObjectLike(value) && getTag(value) == '[object Arguments]'
}

const flatten = (input, shallow, strict, output) => {
  output = output || []
  let idx = output.length
  let inputLength = input.length
  for (let item of input) {
    if (isArrayLike(item) && (Array.isArray(item) || isArguments(item))) {
      if (shallow) {
        let i = 0, len = item.length
        while(i < len) output[idx++] = item[i++]
      } else {
        flatten(item, shallow, strict, output)
        idx = output.length
      }
    } else if (!strict) {
      output[idx++] = item
    }
  }
  return output
}

const arr = [ 1, [ 2, [ 3, 4 ] ] ]

console.log(flatten(arr, false, false))