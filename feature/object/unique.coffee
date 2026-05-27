
arr =[
    {
        "BUKRS": "1000",
        "VKORG": "1000",
        "VTEXT": "信息产品事业群"
    },
    {
        "BUKRS": "1000",
        "VKORG": "2000",
        "VTEXT": "合作业务部"
    },
    {
        "BUKRS": "1000",
        "VKORG": "3000",
        "VTEXT": "医疗产品部"
    },
    {
        "BUKRS": "1000",
        "VKORG": "9000",
        "VTEXT": "中建材进出口销售组织"
    },
    {
        "BUKRS": "1000",
        "VKORG": "9001",
        "VTEXT": "中建材香港销售组织"
    },
    {
        "BUKRS": "9100",
        "VKORG": "9100",
        "VTEXT": "中建材信息（香港）信息产品事业群"
    },
    {
        "BUKRS": "9100",
        "VKORG": "9200",
        "VTEXT": "中建材信息（香港）合作业务部"
    },
    {
        "BUKRS": "9100",
        "VKORG": "9300",
        "VTEXT": "中建材信息（香港）医疗产品部"
    }
]
unique = (data)=>
  obj = {}
  result = []
  for item in arr
    obj[item.BUKRS] = {
        corp: item.BUKRS
        orgs: []
    }
  for item in arr
    if obj[item.BUKRS]
      objItem = obj[item.BUKRS]
      objItem.orgs.push({
        code: item.VKORG
        name: item.VTEXT
      })
   {data: obj}

console.log JSON.stringify(unique(arr))