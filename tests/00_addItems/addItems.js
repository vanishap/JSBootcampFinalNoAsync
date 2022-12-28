// Nice job!!
function addItems(cart, itemsToAdd) {
  for (let i = 0; i < itemsToAdd.length; i++) {
    cart.push(itemsToAdd[i]);
  }
  return cart;
}

module.exports = { addItems };
