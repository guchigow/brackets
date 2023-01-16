module.exports = function check(str, bracketsConfig) {
  let openArr = [];
  let closeArr = [];
  let resArr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openArr.push(bracketsConfig[i][0]);
    closeArr.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < str.length; i += 1) {
    const sSym = str[i];
    let last = resArr.length - 1;
    let openItemIndex = closeArr.indexOf(sSym);
    if (openArr.includes(sSym)) {
      if (closeArr.includes(sSym)) {
        if (resArr.indexOf(sSym) < 0) {
          resArr.push(sSym);
        } else {
          if (resArr[last] === sSym) {
            resArr.pop();
          } else return false;
        }
      }
      else resArr.push(sSym);
    }
    else if (closeArr.includes(sSym)) {
      if (resArr[last] === openArr[openItemIndex]) {
        resArr.pop();
        continue;
      } else return false;
    }
  }
  return resArr.length === 0;
}
