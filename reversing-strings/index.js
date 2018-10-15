// reverse the order of characters in a given string

function reverseStr(str) {
  return str.split('')
    .reverse()
    .join('')
}

// console.log(reverseStr('abcd')); // dcba

module.exports = reverseStr;