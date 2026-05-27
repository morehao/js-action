'use strict'
let corp_obj = {
  "1000": {
    "corp": "1000",
    "factory": [{
      "code": "1000",
      "name": "中建材信息技术工厂"
    }],
    "orgs": [{
        "code": "1000",
        "name": "信息产品事业群"
      },
      {
        "code": "1002",
        "name": "信息产品事业群港杂费采购组织"
      },
      {
        "code": "2000",
        "name": "合作业务部"
      },
      {
        "code": "2002",
        "name": "合作业务部港杂费采购组织"
      },
      {
        "code": "3000",
        "name": "医疗产品部"
      },
      {
        "code": "3002",
        "name": "医疗产品部港杂费采购组织"
      },
      {
        "code": "9000",
        "name": "进出口公司采购组织"
      },
      {
        "code": "9001",
        "name": "中建材香港公司采购组织"
      },
      {
        "code": "9002",
        "name": "进出口公司港杂费采购组织"
      }
    ]
  },
  "1100": {
    "corp": "1100",
    "factory": [{
      "code": "1100",
      "name": "中建材信云智联工厂"
    }],
    "orgs": [{
        "code": "1000",
        "name": "信息产品事业群"
      },
      {
        "code": "1002",
        "name": "信息产品事业群港杂费采购组织"
      },
      {
        "code": "2000",
        "name": "合作业务部"
      },
      {
        "code": "2002",
        "name": "合作业务部港杂费采购组织"
      },
      {
        "code": "3000",
        "name": "医疗产品部"
      },
      {
        "code": "3002",
        "name": "医疗产品部港杂费采购组织"
      },
      {
        "code": "9000",
        "name": "进出口公司采购组织"
      },
      {
        "code": "9001",
        "name": "中建材香港公司采购组织"
      },
      {
        "code": "9002",
        "name": "进出口公司港杂费采购组织"
      }
    ]
  },
  "9100": {
    "corp": "9100",
    "factory": [{
      "code": "9100",
      "name": "中建材信息技术（香港）工厂"
    }],
    "orgs": [{
        "code": "1000",
        "name": "信息产品事业群"
      },
      {
        "code": "2000",
        "name": "合作业务部"
      },
      {
        "code": "3000",
        "name": "医疗产品部"
      },
      {
        "code": "9000",
        "name": "进出口公司采购组织"
      },
      {
        "code": "9001",
        "name": "中建材香港公司采购组织"
      },
      {
        "code": "9002",
        "name": "进出口公司港杂费采购组织"
      }
    ]
  }
}
function unique(arr) {
  let obj = {}
  for (let item of arr) {
    obj[item.code] = item.name
  }
  return obj
}
let newObj = {}
for(let item in corp_obj) {
  let orgs = corp_obj[item].orgs
  newObj[item] = unique(orgs)
}
console.log(newObj[1000][1000])