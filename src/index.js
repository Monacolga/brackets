module.exports = function check(str, bracketsConfig) {
  const bracketsObject = bracketsConfig.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
  const leftBrackets = bracketsConfig.map((pair) => pair[0]);
  const rightBrackets = bracketsConfig.map((pair) => pair[1]);
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (
      leftBrackets.includes(str[i]) &&
      str[i] !== "|" &&
      str[i] !== "7" &&
      str[i] !== "8"
    ) {
      stack.push(str[i]);
    } else if (
      rightBrackets.includes(str[i]) &&
      str[i] !== "|" &&
      str[i] !== "7" &&
      str[i] !== "8"
    ) {
      if (bracketsObject[stack.pop()] !== str[i]) {
        return false;
      }
    } else if (str[i] === "|" || str[i] === "7" || str[i] === "8") {
      if (stack.length === 0 || stack[stack.length - 1] !== str[i]) {
        stack.push(str[i]);
      } else {
        stack.pop();
      }
    }
  }
  return !stack.length;
};
