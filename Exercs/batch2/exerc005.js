const maior = (a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
        return parseFloat(a) >= parseFloat(b);
    }
    
    return false;
};

console.log(maior(2, "2"))
console.log(maior("2", 2))
console.log(maior("a", 2))