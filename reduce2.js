// Make a function that count repeated words in this array.

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countWords(array) {
    return words.reduce((acumulador, palabra) => {
        if (!acumulador[palabra]) {
            acumulador[palabra] = 1;
        } else {
            acumulador[palabra]++;
        }
        return acumulador;
    }, {});
}

const result = countWords(words);
console.log(result);
