// Agrupar palabras por longitud usando objetos de javascript.

//Crea una función que tome un arreglo de palabras y devuelva un objeto donde 
// las claves sean la longitud de las palabras y los valores sean arreglos con todas 
// las palabras que tienen esa misma longitud.

const arrayWords = ["apple", "banana", "pear", "kiwi", "peach", "grape"];

// Crearas una funcion que cree un objeto: la clave sera la longitud de la palabra y el valor la palabra misma:
// Si hay palabras con la misma longitud, se creara como valor un arreglo de palabras y se iran agregando a dicho 
// arreglo.

//1. recorrer cada palabra del arreglo
//2. obtener la longitud de la palabra.
//3. Verificar si la longitud existe, si existe agregaselo a la longitud.
//4. Si no existe creala nueva y agregale la palabra.


function groupByLenght(array){ 
    
    const objectsOfWords = {};
    let length = 0;

    array.forEach(word => {
        length = word.length;
        if(objectsOfWords[length]){
            objectsOfWords[length].push(word);
        }else{
            objectsOfWords[length]= [word]; //Se crea el arreglo con poner los corchetes y la palabra que se esta iterando.
        }
    })
    return objectsOfWords;  // { 5: ['apple', 'peach'], 6: ['banana', 'pear', 'kiwi', 'grape'] }
}

const results = groupByLenght(arrayWords);

console.log(results);

