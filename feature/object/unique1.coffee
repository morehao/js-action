arr = [
  {name: 'a', age: '21'}
  {name: 'b', age: '22'}
  {name: 'a', age: '21'}
]
unique = (arr)=>
  obj = {}
  res = []
  for item in arr
    obj[item.name] = item
  for item of obj
    res.push(obj[item])
  res
console.log unique arr