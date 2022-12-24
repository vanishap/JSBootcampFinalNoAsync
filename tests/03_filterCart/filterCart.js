function filterCart(arr, category) {
    return arr.filter(item =>item.category === category);
}

module.exports = { filterCart };
