//Crea una función que tome una oración (un string) y devuelva un objeto donde las 
//claves sean las palabras y los valores sean el número de veces que aparecen en la oración.

//1. Convertir la oracion en un arreglo.
//2. Crear un objeto dinamico que su clave sea cada palabra y sus valores sean 
// el numero de veces que existe en la oracion.

const sentence = "Hi I'm Maria Estrella and I'm Software Developer";
const lowerCaseSentence  = sentence.toLowerCase().replace(/[^\w\s]/g, "");

const arrayFromSentence = lowerCaseSentence.split(" ");
console.log(arrayFromSentence);

function objectWithWords(array){
    const objectWords = {};
    array.forEach(word => {
        if(objectWords[word]){
            objectWords[word]++;
        }else{
            objectWords[word] = 1;
        }
    });
    return objectWords;
}

const result = objectWithWords(arrayFromSentence);
console.log(result); // { Hi: 1, Im: 1, Maria: 1, Estrella: 1, and: 1, I: 1, 'm': 1, Software: 1, Developer: 1 }