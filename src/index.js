module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) {
    return false;
  }

  const strToArr = str.split('');
  
  for (let s = 0; s < strToArr.length; s++) {
    for (let b = 0; b < bracketsConfig.length; b++) {
      if (strToArr[s] == bracketsConfig[b][0] && strToArr[s + 1] == bracketsConfig[b][1]) {
        strToArr.splice(s, 2);
        const str = strToArr.join('');
        return check(str, bracketsConfig);
      }
    }
  }
  return strToArr.length == 0 ? true : false;
}
