// Find the first element that not repeat in the string.

// Debo recorrer la cadena, tomando cada elemento, pero la idea es que debo tomar el elemento y guardarlo en una
// variable para ver si se repite, porque la idea es que no solo debo leerla y sumarla o inicializarla
// sino debo comprobar primero si existe en todo el arreglo, y si existe devolver null, sino existe devolver
// la letra.

const word = "Hello";

function convertWordArray(word){
    const lowerCarseWord = word.toLowerCase();
    const arrayStrings = lowerCarseWord.split("");
    console.log(arrayStrings);
    return arrayStrings;
}

// Esta fundion muestra la frequencia de cada caracter en un string.
function objectFrequencyString(arrayStrings){
    const objectStringFrequency = {};
    arrayStrings.forEach(element => { 
       if(objectStringFrequency[element]){
        objectStringFrequency[element]++;
       }else{
        objectStringFrequency[element] = 1;
       }
       
    });
    console.log(objectStringFrequency);
    return objectStringFrequency;
}

//Recorrer este objeto y encontrar cual clave tiene la frequency de uno. 
// Si la tiene devolver la clave, sino devolver null.

//Funcion que recorra el objeto y hacer la logica.

function frequencyOne(object, originalWord){
    for(let char of originalWord){
        if(object[char] === 1){
            return char;
        }
    }
    return null;  
}

// funcion donde 1. primero llamare a la funcion que covirte una cadena o palabra en un objeto.
// 2. llamare a la funcion que lee un objeto y devuelve el character que no se repite.

const result = convertWordArray(word)

const result1 = objectFrequencyString(result); //Aqui tengo el objeto con la frecuencias de los caracteres.

const result2 = frequencyOne(result1, "hello"); // Aqui ya tengo el caracter que no se repite.

console.log("El Caracter que no se repite es: ", result2);


