//Crea una función que tome un arreglo de objetos de personas y devuelva un objeto agrupado 
// por rangos de edad.

const people = [ 
    { name: "Alice", age: 25 },
    { name: "John", age: 34},
    { name: "Carla", age: 54},
    { name: "Juan", age: 56},
    { name: "Laura", age: 23},
    { name: "Alfredo", age: 67},
    { name: "Sofia", age: 18},
    { name: "Maria", age: 32},
    { name: "Luis", age: 48},
    { name: "Rosa", age: 40},
    { name: "Andrea", age: 65}
]

// Funcion que agrupe personas por rango de edad.
// 1. Leer el objeto elemnto por elemento y compararlo con distintos rangos de edad.
// 2. al que pertenezca guardarlo , guardandolo en un nuevo objeto de arreglos. 

function groupByAge(array){
    const result = {};

    array.forEach(function (element){
        const age = element.age;
        if(age < 18){
            if(!result["0-17"]){
                result["0-17"] = [];
            }
            result["0-17"].push(element);
        }
        else if( age >= 18 && age <= 31){
            if(!result["18-31"]){
                result["18-31"] = [];
            } result["18-31"].push(element);
        }
        else if(age > 31 && age <=60){
            if(!result["32-60"]){
                result["32-60"] = [];
            }
            result["32-60"].push(element);
        }
        else if(age > 60 && age <=80){
            if(!result["61-80"]){
                result["61-80"] = [];
                }
                result["61-80"].push(element); 
            } 
    });
    return result;  
}

const personas = groupByAge(people);
console.log(personas);