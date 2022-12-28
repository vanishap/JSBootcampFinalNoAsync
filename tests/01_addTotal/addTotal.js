// make sure to check readme for information about taxes
// nice use of a switch statement here!!
function addTotal(arr, state) {
  let tax = 1;
  switch (state) {
    case 'NY':
      tax = 1.09;
      break;
    case 'NJ':
      tax = 1.07;
      break;
    case 'CT':
      tax = 1.12;
      break;
    default:
      tax = 1;
  }
  const total = arr.reduce((acc, ini) => acc + ini.price, 0);

  return Number((total * tax).toFixed(2));
}

module.exports = { addTotal };
