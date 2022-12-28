/* eslint-disable no-param-reassign */
// this is a challenging problem. Great job solving!!
function mostVowels(str) {
  const newStr = str.toLowerCase();
  const words = newStr.split(' ');
  const result = {};
  for (let i = 0; i < words.length; i++) {
    if (!result[words[i]]) {
      let count = 0;
      for (const s of words[i]) {
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
          count++;
        }
      }
      result[words[i]] = count;
    }
  }

  let maxVowels = -1;
  let str2 = null;
  for (const s in result) {
    if (result[s] > maxVowels) {
      maxVowels = result[s];
      str2 = s;
    }
  }
  return str2;
}

module.exports = { mostVowels };
