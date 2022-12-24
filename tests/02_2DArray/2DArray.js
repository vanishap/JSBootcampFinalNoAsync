function twoDArray(arr) {
    const total = arr.flat().reduce((acc,ini)=>{
        return acc += ini;
    },0);
    return total;
}

module.exports = { twoDArray };
