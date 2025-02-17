// Reto Avanzado: Análisis de Tendencias de Ventas
// ✅ Descripción:
// Crea una función que analice un arreglo de ventas y devuelva:

// 1. Las ventas totales por mes
// 2. El producto más vendido de cada mes
// 3. Un ranking de los productos más vendidos en general.

const sales = [
    { product: "Laptop", amount: 1500, date: "2024-01-10" },
    { product: "Smartphone", amount: 900, date: "2024-01-15" },
    { product: "Tablet", amount: 600, date: "2024-01-20" },
    { product: "Mouse", amount: 50, date: "2024-01-25" },
    { product: "Keyboard", amount: 100, date: "2024-01-30" },
    
    { product: "Smart TV", amount: 2000, date: "2024-02-05" },
    { product: "Smartphone", amount: 850, date: "2024-02-10" },
    { product: "Headphones", amount: 120, date: "2024-02-15" },
    { product: "Tablet", amount: 750, date: "2024-02-18" },
    { product: "Laptop", amount: 1600, date: "2024-02-25" },
    
    { product: "Refrigerator", amount: 3000, date: "2024-03-02" },
    { product: "Washing Machine", amount: 2500, date: "2024-03-08" },
    { product: "Smartphone", amount: 950, date: "2024-03-12" },
    { product: "Laptop", amount: 1800, date: "2024-03-20" },
    { product: "Smart TV", amount: 2100, date: "2024-03-25" },
    
    { product: "Air Conditioner", amount: 3500, date: "2024-04-01" },
    { product: "Refrigerator", amount: 2800, date: "2024-04-10" },
    { product: "Smartphone", amount: 1000, date: "2024-04-15" },
    { product: "Laptop", amount: 2000, date: "2024-04-22" },
    { product: "Tablet", amount: 800, date: "2024-04-30" },

    { product: "Oven", amount: 900, date: "2024-05-05" },
    { product: "Vacuum Cleaner", amount: 1100, date: "2024-05-12" },
    { product: "Laptop", amount: 2200, date: "2024-05-20" },
    { product: "Smart TV", amount: 2500, date: "2024-05-25" },
    { product: "Refrigerator", amount: 3200, date: "2024-05-28" }
];


// ventas totales por mes

function salesByMonth(array){

    const salesMonth = {};

    array.forEach(element => {
        const month = new Date(date).toLocaleDateString('en-US', { month: 'long' });
        const amount = element.month;
        const product = element.product;


        if(!salesMonth[month]){
            salesMonth[month] = {
                totalSales: 0,
                products: [],
                productRanking: {
                    product: [],
                    totalSold: 0
                }
            };


        }






    })













}