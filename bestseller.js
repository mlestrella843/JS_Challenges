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

function analyzeSales(sales) {
    const salesByMonth = {};  // Para agrupar ventas por mes
    const productSales = {};  // Para llevar el ranking global de productos vendidos

    // 🔹 Paso 1: Recorrer las ventas y agrupar por mes y por producto
    sales.forEach(({ product, amount, date }) => {
        const month = new Date(date).toLocaleString('en-US', { month: 'long' });

        if (!salesByMonth[month]) {
            salesByMonth[month] = { totalSales: 0, products: {} };
        }

        salesByMonth[month].totalSales += amount;

        if (!salesByMonth[month].products[product]) {
            salesByMonth[month].products[product] = 0;
        }
        salesByMonth[month].products[product] += amount;

        if (!productSales[product]) {
            productSales[product] = 0;
        }
        productSales[product] += amount;
    });

    // 🔹 Paso 2: Encontrar el producto más vendido en cada mes
    for (let month in salesByMonth) {
        let bestSeller = Object.entries(salesByMonth[month].products)
            .reduce((max, product) => (product[1] > max[1] ? product : max));

        salesByMonth[month].bestSeller = bestSeller[0];
        delete salesByMonth[month].products;
    }

    // 🔹 Paso 3: Crear el ranking global de productos más vendidos
    const productRanking = Object.entries(productSales)
        .map(([product, totalSold]) => ({ product, totalSold }))
        .sort((a, b) => b.totalSold - a.totalSold);

    return { salesByMonth, productRanking };
}

// 🚀 Probamos la función
const result = analyzeSales(sales);
console.log(result);
