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
    array.forEach(({ product, amount }) => {
        if(!sold[product]){
            sold[product]= 0;
        }
        sold[product] += amount;     
    });

    // return sold;

    for( let product in sold){
        let productMostSale = Object.entries(sold[product])
        .reduce((max, product) => (product[1] > max[1] ? product[1] : max));
        console.log(productMostSale);

    }
   


}

const result = totalSales(sales);
console.log(result);