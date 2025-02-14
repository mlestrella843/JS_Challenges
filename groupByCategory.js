//Crea una función que reciba un arreglo de objetos con información de productos y 
// transforme esos datos en un objeto agrupado por categoría.

//1. Leer el arreglo de objetos.
//2. Acceder a cada elemento del arreglo que en este caso es un objeto.
//3. Acceder a la propiedad Categoria y luego crear un objeto por cada categoria


const products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Shirt", category: "Clothing", price: 30 },
    { name: "Jeans", category: "Clothing", price: 50 },
    { name: "Blender", category: "Appliances", price: 100 },
    { name: "Microwave", category: "Appliances", price: 200 }
];


function getProductByCategory(array){

    const productByCategory = {};

    array.forEach(element => {
        const category = element.category;

        if(!productByCategory[category]){
            productByCategory[category] = [];
        }
        productByCategory[category].push(element);
    })

    return productByCategory;
}

const getProduct = getProductByCategory(products);
console.log(getProduct);