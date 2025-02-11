function chunkyMonkey(values, size) {
    const array1 = values.slice(0,size);
    const array2 = values.slice(size);
    return [array1, array2];
    //  write code here.
}
module.exports = chunkyMonkey