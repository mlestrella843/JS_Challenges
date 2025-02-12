

// Reverse each word of a sentence.
const sentence = "Hello I'm Maria Estrella, nice to meet you";
console.log(sentence);

// 1. I converted the sentence into an array of words.
const arrayWords = sentence.split(" "); //I created an array with separate words..
console.log(arrayWords);

// 2. I developed a function that takes a word and reverses it.
function reversedWords(array){
    const newArray = array.map( word => word.split("").reverse().join("")); //
    console.log(newArray); 
    return newArray;
}

//3. I Converted an array back into a sentence.
const newSentence = reversedWords(arrayWords).join(" ");
console.log(newSentence); // "olleH I'm ariaA estelM, ecnet ni ot emoc tnuy yeeg"



    

