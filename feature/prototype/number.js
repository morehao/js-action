'use strict'
Number.prototype.toFixed = function (length) {
  let carry = 0 // 存放进位标志
  let num, multiple; // num为原浮点数放大multiple倍后的数，multiple为10的length次方
  const str = this + '' // 将调用该方法的数字转为字符串
  const dot = str.indexOf(".") // 找到小数点的位置
  if (str.substr(dot + length + 1, 1) >= 5) carry = 1; // 找到要进行舍入的数的位置，手动判断是否大于等于5，满足条件进位标志置为1
  multiple = Math.pow(10, length) // 设置浮点数要扩大的倍数
  num = Math.floor(this * multiple) + carry // 去掉舍入位后的所有数，然后加上我们的手动进位数
  const result = num / multiple + '' // 将进位后的整数再缩小为原浮点数
  return result;
}

console.log(0.015.toFixed(2))