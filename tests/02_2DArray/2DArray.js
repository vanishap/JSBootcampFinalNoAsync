// looks good
function twoDArray(arr) {
  // one comment when using reduce is that you are setting the accumulator each time so don't need += just + works
  const total = arr.flat().reduce((acc, ini) => acc + ini, 0);
  return total;
}

module.exports = { twoDArray };
