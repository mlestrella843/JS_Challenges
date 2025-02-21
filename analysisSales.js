const sales = [
    { customer: "Alice", product: "Laptop", amount: 1500, date: "2024-01-10" },
    { customer: "Bob", product: "Smartphone", amount: 900, date: "2024-01-15" },
    { customer: "Charlie", product: "Tablet", amount: 600, date: "2024-01-20" },
    { customer: "Alice", product: "Mouse", amount: 50, date: "2024-01-25" },
    { customer: "David", product: "Keyboard", amount: 100, date: "2024-01-30" },

    { customer: "Alice", product: "Smart TV", amount: 2000, date: "2024-02-05" },
    { customer: "Bob", product: "Smartphone", amount: 850, date: "2024-02-10" },
    { customer: "Charlie", product: "Headphones", amount: 120, date: "2024-02-15" },
    { customer: "David", product: "Tablet", amount: 750, date: "2024-02-18" },
    { customer: "Eve", product: "Laptop", amount: 1600, date: "2024-02-25" },

    { customer: "Alice", product: "Refrigerator", amount: 3000, date: "2024-03-02" },
    { customer: "Bob", product: "Washing Machine", amount: 2500, date: "2024-03-08" },
    { customer: "Charlie", product: "Smartphone", amount: 950, date: "2024-03-12" },
    { customer: "David", product: "Laptop", amount: 1800, date: "2024-03-20" },
    { customer: "Eve", product: "Smart TV", amount: 2100, date: "2024-03-25" }
];

//1. Calculate the total spent by customer.
//2. Which client spent more.
//3. Ranking of client spent.

function calculateTotalSpentByCustomer(sales) {
    const spendingByMonth = {};  // Para agrupar gasto mensual
    const customerSpending = {}; // Para ranking global de clientes

    // 🔹 Paso 1: Recorrer ventas y agrupar por cliente y mes
    sales.forEach(({ customer, amount, date }) => {
        const month = new Date(date).toLocaleString('en-US', { month: 'long' });

        // Inicializar mes si no existe
        if (!spendingByMonth[month]) {
            spendingByMonth[month] = { totalSpent: 0, customers: {} };
        }

        // Inicializar cliente dentro del mes si no existe
        if (!spendingByMonth[month].customers[customer]) {
            spendingByMonth[month].customers[customer] = 0;
        }

        // Sumar gasto del cliente en el mes
        spendingByMonth[month].customers[customer] += amount;
        spendingByMonth[month].totalSpent += amount;

        // 🔹 Para ranking global, sumamos gasto total de cada cliente
        if (!customerSpending[customer]) {
            customerSpending[customer] = 0;
        }
        customerSpending[customer] += amount;
    });

    // 🔹 Paso 2: Encontrar el cliente que más gastó en cada mes
    for (let month in spendingByMonth) {
        let topSpender = Object.entries(spendingByMonth[month].customers)
            .reduce((max, customer) => (customer[1] > max[1] ? customer : max));
        
        spendingByMonth[month].topSpender = topSpender[0]; // Solo guardamos el nombre del cliente
        delete spendingByMonth[month].customers; // Eliminamos datos innecesarios
    }

    // 🔹 Paso 3: Crear el ranking global de clientes por gasto total
    const customerRanking = Object.entries(customerSpending)
        .map(([customer, totalSpent]) => ({ customer, totalSpent }))
        .sort((a, b) => b.totalSpent - a.totalSpent); // Ordenar de mayor a menor

    return { spendingByMonth, customerRanking };
}

// 🚀 Probamos la función
const result = calculateTotalSpentByCustomer(sales);
console.log(result);
