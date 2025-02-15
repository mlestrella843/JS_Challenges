//Crea una función que agrupa las ventas de un arreglo de objetos por mes y calcula 
// el total de ventas en cada mes.

const sales = [
    { product: "Laptop", amount: 1200, date: "2024-01-15" },
    { product: "Smartphone", amount: 800, date: "2024-01-25" },
    { product: "Shirt", amount: 30, date: "2024-02-10" },
    { product: "Jeans", amount: 50, date: "2024-02-15" },
    { product: "Blender", amount: 100, date: "2024-03-05" },
    { product: "Microwave", amount: 200, date: "2024-03-20" },
    { product: "Headphones", amount: 150, date: "2024-01-30" },
    { product: "Tablet", amount: 600, date: "2024-02-22" }
];


function groupSalesByMonth(sales){

    const salesByMonth = {};
    
    sales.forEach(element => {
        const date = element.date;
        const amount = element.amount;
        const product = element.product;
    
        const month = new Date(date).toLocaleDateString('en-US', { month: 'long' });

        if(!salesByMonth[month]){
            salesByMonth[month] = {
                totalSales: 0,
                products: []
            };
        }

        salesByMonth[month].totalSales = salesByMonth[month].totalSales + amount;
        salesByMonth[month].products.push(product);
        
    });

    return salesByMonth;
}

const result1 = groupSalesByMonth(sales);
console.log(result1);

