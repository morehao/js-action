const moduleObj = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = moduleObj.getX();
console.log(unboundGetX); 

// bind返回一个原函数的拷贝，而不是执行结果
const bindGetX = moduleObj.getX.bind(moduleObj);
console.log(bindGetX());

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}
const result1 = addArguments(1, 2);
const result2 = addArguments.bind(null, 1);
console.log('result1:', result1);
console.log('result2:', result2(4));
