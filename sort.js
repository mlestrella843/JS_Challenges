// Practicing method sort()
//1. De menor a mayor edad. Ascendente ( a primero que b)

const students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 28 },
    { name: "Eve", age: 21 }
];

const ascendentOrder = students.sort((a, b) => a.age - b.age);
console.log("Ascendent order", ascendentOrder);

//2. De mayor a menor edad. Descendente (b primero que a)

const descendentOrder = students.sort((a,b) => b.age - a.age);
console.log("Descendent order", descendentOrder);
