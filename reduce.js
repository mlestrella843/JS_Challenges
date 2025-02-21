const sales = [
    { product: "Laptop", amount: 1500 },
    { product: "Smartphone", amount: 900 },
    { product: "Tablet", amount: 600 },
    { product: "Laptop", amount: 1800 },
    { product: "Smartphone", amount: 850 },
    { product: "Tablet", amount: 750 },
    { product: "Smart TV", amount: 2000 },
    { product: "Laptop", amount: 1600 },
];

// Usa .reduce() para calcular lo siguiente en un solo recorrido:
//El total de ventas realizadas (suma de amount).
//El producto más vendido en términos de dinero (el de mayor amount).

function totalSales(array){
    const sold = {};
    let totalSales = 0
    array.forEach(({ product, amount }) => {
        if(!sold[product]){
            sold[product]= 0;
        }
        sold[product] += amount;     
        totalSales += amount; // El total de ventas de todos los productos.
    });

    const topProduct = Object.entries(sold).reduce((max, [product, amount]) =>
        amount > max.amount ? { product, amount } : max
    , { product: "", amount: 0 });
    
    return {totalSales, topProduct, sold}; // Retorna un objeto con el total de ventas y el producto más vendido.
   
}

const result = totalSales(sales);
console.log(result);