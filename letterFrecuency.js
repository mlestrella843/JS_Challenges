//"Create a function that takes a string and returns an object where each letter is a property and 
// its value is the number of times it appears in the string."


const word = "Hello";

function convertToCharacter(string) {
    const arrayCharacters = string.split("");
    console.log(arrayCharacters);
    return arrayCharacters;  // ["H", "e", "l", "l", "o"]
}

const result = convertToCharacter(word);
console.log(result);

function frequencyCharacter(array){
    const frequencyObject = {};
    array.forEach(character => {
       if( frequencyObject[character] ){
        frequencyObject[character]++;
       }
       else{
        frequencyObject[character] = 1;
       }
    });
    return frequencyObject;
}

const frequencyResults = frequencyCharacter(result);
console.log(frequencyResults);