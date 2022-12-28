function removeVowels(str) {
  const vowels = 'aeiouAEIOU';
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

module.exports = { removeVowels };
