

// Reverse each word of a sentence.
const sentence = "Hello I'm Maria Estrella, nice to meet you";
console.log(sentence);

// 1. I converted the sentence into an arrays of words.
const arrayWords = sentence.split(" "); //Hice un arreglo con las palabras por separado.
console.log(arrayWords);

// 2. I developed a function that take a word and reverses it.
function reversedWords(array){
    const newArray = array.map( word => word.split("").reverse().join("")); //
    console.log(newArray); 
    return newArray;
}

//3. I Converted an array into a sentence again.
const newSentence = reversedWords(arrayWords).join(" ");
console.log(newSentence); // "olleH I'm ariaA estelM, ecnet ni ot emoc tnuy yeeg"



    

