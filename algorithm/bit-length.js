const str1 = '你1@！'
function lengthOfByte(str){
  let len = 0;
  for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i)>256){
      len += 2;
    }else{
      len++;
    }
  }
  return len;
}
console.log(lengthOfByte(str1))