'use strict'

let checkParams = (params, paramsSetting)=> {
  
  let {required, optional} = paramsSetting
  let _checkRequired = (data, requiredSetting)=> {
    let result = {checkRes: false}
    for (let key in requiredSetting) {
      if (!data[key]) {
        result.checkRes = true
        result.msg = requiredSetting[key]
        break
      } else {
        result.checkRes = false
      }
    }
    return result
  }
  let _checkOptional = (data, requiredSetting, optionalSetting)=> {
    let result = {checkRes: false}
    for (let key in data) {
      if (!requiredSetting[key]) {
        if (!optionalSetting[key]) {
          result.checkRes = true
          result.msg = `参数${key}不在可选参数之列`
          break
        } else {
          result.checkRes = false
        }
      } else {
        result.checkRes = false
      }
    }
    return result
  }
  let checkRequiredRes = _checkRequired (params, required)
  let checkOptionalRes = _checkOptional (params, required, optional)
  let checkResult = {checkRes: false}
  if (checkRequiredRes.checkRes) {
    checkResult =  checkRequiredRes
  }
  if (checkOptionalRes.checkRes) {
    checkResult = checkOptionalRes
  }
  return checkResult
}

const dataSetting = {
  required: {
    appId: 'appId为必填参数',
    company: 'company为必填参数',
    a: 'a为必填参数'
  },
  optional: {
    name: '该参数不在选填参数之列'
  }
}
const data = {
  appId: 1,
  company: 2
}
console.log(checkParams(data, dataSetting))