'use strict'
let box = [{
    "code": "C002620170522012",
    "store": "BJ11",
    "project_name": "",
    "site": "",
    "materials": [{
      "box_code": "C002620170522012",
      "code": "02114772-F50",
      "description": "OceanStor 9000 42U交流机柜(C72节点组网)",
      "model": "Rack-9000C72-AC",
      "category": "ZCP1",
      "currency": "CNY",
      "store_type": "项目库存",
      "project_name": "",
      "site": "",
      "supply": {
        "supplier_code": "S20170522002",
        "store": "BJ11",
        "factory": "1000"
      }
    }]
  },
  {
    "code": "XIANG17080511",
    "store": "BJ11",
    "project_name": "",
    "site": "",
    "materials": [{
      "box_code": "XIANG17080511",
      "code": "02114772-F50",
      "description": "OceanStor 9000 42U交流机柜(C72节点组网)",
      "model": "Rack-9000C72-AC",
      "category": "ZCP1",
      "currency": "CNY",
      "store_type": "项目库存",
      "project_name": "",
      "site": "",
      "supply": {
        "supplier_code": "1Y20170712038",
        "store": "BJ11",
        "factory": "1000"
      }
    }]
  }
]

function showByMaterial(boxes) {
  let arr = []
  for (let item of boxes) {
     arr = arr.concat(item.materials)
  }
  return arr
}
function unique (materials) {
  let obj = {}
  for (let item of materials) {
    obj[item.box_code] = {
      code: item.box_code,
      store: item.store,
      project_name: item.project_name,
      site: item.site,
      materials: []
    }
  }
  return obj
}
function insertMaterial (materials, boxObj) {
  let arr = []
  for (let item of materials) {
    if (boxObj[item.box_code]) {
      boxObj[item.box_code].materials.push(item)
      arr.push(boxObj[item.box_code])
    }
  }
  return arr
}
let newMateria = showByMaterial(box)
let newBoxObj = unique(newMateria)

console.log(JSON.stringify(insertMaterial(newMateria, newBoxObj)))
// console.log(showByMaterial(box))