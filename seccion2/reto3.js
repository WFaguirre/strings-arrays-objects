const wareHouse = {};

function addProduct() {
    let productName = prompt('Ingresa el nombre del producto: ');
    wareHouse[productName] = {};
    let id = prompt('Agrega el númmero de referencia del producto: ');
    let price = Number(prompt('Digite el precio del producto: '));
    let quantity = Number(prompt('Digita las cantidades del producto: '));
    let description = prompt('Agrega una descripción breve: ');

    description = censorBadWords(description);

    wareHouse[productName][id] = {
        price: price,
        quantity: quantity,
        description: description
    };
    window.alert('El producto ha sido agregado exitosamente');
}

function calculateTotalInventory() {
    let total = 0;
    for (let product in wareHouse) {
        for (let key in wareHouse[product]) {
            total += wareHouse[product][key].price * wareHouse[product][key].quantity;
        }
    }
    return total;
}

function censorBadWords(description) {
    const badWords = ['hijueputa', 'gonorrea', 'malparido', 'porqueria', 'mal producto'];
    const regex = new RegExp(badWords.join('|'), 'gi');
    return description.replace(regex, '******');
}

function sortByPriceAsc() {
    let sortedProducts = Object.entries(wareHouse).sort((a, b) => {
        let priceA = a[1][Object.keys(a[1])[0]].price;
        let priceB = b[1][Object.keys(b[1])[0]].price;
        return priceA - priceB;
    });
    window.alert('Productos organizados por precio de forma descendente: ');
    sortedProducts.forEach(product => {
        window.alert(`${product[0]} - Precio: ${product[1][Object.keys(product[1])[0]].price}`);
    });
}

function sortByQuantityAsc() {
    let sortedProducts = Object.entries(wareHouse).sort((a, b) => {
        let quantityA = a[1][Object.keys(a[1])[0]].quantity;
        let quantityB = b[1][Object.keys(b[1])[0]].quantity;
        return quantityA - quantityB;
    });
    console.log('Productos organizados por precio de forma ascendente: ');
    sortedProducts.forEach(product => {
        console.log(`${product[0]} - Cantidad: ${product[1][Object.keys(product[1])[0]].quantity}`);
    });
}

function generateReport() {
    let totalProducts = Object.keys(wareHouse).length;
    let totalInventoryValue = calculateTotalInventory();
    
    let sortedByPrice = Object.entries(wareHouse).sort((a, b) => {
        let priceA = a[1][Object.keys(a[1])[0]].price;
        let priceB = b[1][Object.keys(b[1])[0]].price;
        return priceB - priceA;
    });
    let mostExpensiveProduct = sortedByPrice[0][0];
    let cheapestProduct = sortedByPrice[sortedByPrice.length - 1][0];
    
    let sortedByQuantity = Object.entries(wareHouse).sort((a, b) => {
        let quantityA = a[1][Object.keys(a[1])[0]].quantity;
        let quantityB = b[1][Object.keys(b[1])[0]].quantity;
        return quantityB - quantityA;
    });
    let mostQuantityProduct = sortedByQuantity[0][0];
    let leastQuantityProduct = sortedByQuantity[sortedByQuantity.length - 1][0];
    
    let productsWithBadWords = 0;
    for (let product in wareHouse) {
        let description = wareHouse[product][Object.keys(wareHouse[product])[0]].description;
        if (description.match(/hijueputa|gonorrea|malparido|porqueria|mal producto/gi)) {
            productsWithBadWords++;
        }
    }
    
    console.log('--- Reporte de inventario---');
    console.log(`Total de productos: ${totalProducts}`);
    console.log(`Total de presupuesto en inventario: ${totalInventoryValue}`);
    console.log(`Producto más caro: ${mostExpensiveProduct}`);
    console.log(`Producto más barato: ${cheapestProduct}`);
    console.log(`Producto con más cantidades: ${mostQuantityProduct}`);
    console.log(`Producto con menos cantidades: ${leastQuantityProduct}`);
    console.log(`Productos con comentarios groseros: ${productsWithBadWords}`);
}

let optionWarehouse = prompt('¿Desea crear un producto? si/no');

while (optionWarehouse === 'si') {
    addProduct();
    optionWarehouse = prompt('¿Quiere agregar otro producto? si/no');
}

let optionNameProduct = prompt('¿Desea agregar detalles del producto? si/no');

while (optionNameProduct === 'si') {
    addProduct();
    optionNameProduct = prompt('¿Desea agregar otros detalles ? si/no');
}

let searchProduct = prompt('Quiere buscar algún producto si/no');

while (searchProduct === 'si') {
    let productToSearch = prompt('digite el nombre del producto: ');
    if (wareHouse.hasOwnProperty(productToSearch)) {
        let productInfo = 'Información del producto:\n';
        for (let key in wareHouse[productToSearch]) {
            productInfo += `Referencia del producto: ${key}, Precio: ${wareHouse[productToSearch][key].price}, Cantidad: ${wareHouse[productToSearch][key].quantity}, Description: ${wareHouse[productToSearch][key].description}\n`;
        }
        window.alert(productInfo);
    } else {
        window.alert('TEste producto no esta disponible en el inventario.');
    }
    searchProduct = prompt('¿Quiere buscar otro producto? si/no');
}

let deleteProduct = prompt('Desea eliminar un producto: si/no');

while (deleteProduct === 'si') {
    let productToDelete = prompt('Digite el nombre del producto que desea eliminar: ');
    if (wareHouse.hasOwnProperty(productToDelete)) {
        let confirmation = prompt('Esta seguro de eliminar este producto: si/no');
        if (confirmation === 'si') {
            delete wareHouse[productToDelete];
            console.log('Producto eliminado exitosamente.');
        } else {
            console.log('Operación cancelada.');
        }
    } else {
        console.log('El producto no está disponible en el inventario.');
    }
    deleteProduct = prompt('¿Quiere eliminar otro producto? si/no');
}

let viewProductQuantity = prompt('¿Desea ver la cantidad disponible de un producto para la venta? si/no');

while (viewProductQuantity === 'si') {
    let productToConsult = prompt('Ingrese el nombre del producto que desea consultar: ');
    if (wareHouse.hasOwnProperty(productToConsult)) {
        let availableQuantity = 0;
        for (let key in wareHouse[productToConsult]) {
            availableQuantity += wareHouse[productToConsult][key].quantity;
        }
        window.alert(`La cantidad disponible de ${productToConsult} para la venta es: ${availableQuantity}`);
    } else {
        window.alert('El producto no está disponible en el almacén.');
    }
    viewProductQuantity = prompt('¿Desea ver la cantidad de otro producto? si/no');
}

let sellProduct = prompt('¿Desea vender un producto? si/no');

while (sellProduct === 'si') {
    let productToSell = prompt('Ingrese el nombre del producto que desea vender:  ');
    if (wareHouse.hasOwnProperty(productToSell)) {
        let quantityToSell = Number(prompt(`Ingrese la cantidad de ${productToSell} que desea vender: `));
        let availableQuantity = 0;
        for (let key in wareHouse[productToSell]) {
            availableQuantity += wareHouse[productToSell][key].quantity;
        }
        if (quantityToSell <= availableQuantity) {
            console.log(`Se vendieron ${quantityToSell} unidades de ${productToSell}.`);
            for (let key in wareHouse[productToSell]) {
                if (quantityToSell >= wareHouse[productToSell][key].quantity) {
                    quantityToSell -= wareHouse[productToSell][key].quantity;
                    delete wareHouse[productToSell][key];
                } else {
                    wareHouse[productToSell][key].quantity -= quantityToSell;
                    break;
                }
            }
        } else {
            console.log(`No hay suficiente cantidad de ${productToSell} para vender.`);
        }
    } else {
        console.log('El producto no está disponible en el almacén.');
    }
    sellProduct = prompt('¿Desea vender otro producto? si/no');
}

let buyProduct = prompt('¿Desea comprar más productos? si/no');

while (buyProduct === 'si') {
    addProduct();
    buyProduct = prompt('¿Desea comprar más productos? si/no');
}

console.log('Contenido del Almacén:', wareHouse);

let totalInventory = calculateTotalInventory();
console.log(`El valor total del inventario es:  ${totalInventory}`);

let sortByPrice = prompt('¿Desea ordenar los productos por precio (ascendente)? si/no');

if (sortByPrice === 'si') {
    sortByPriceAsc();
}

let sortByQuantity = prompt('¿Desea ordenar los productos por cantidad (descendente)? si/no');

if (sortByQuantity === 'si') {
    sortByQuantityAsc();
}

let generateInventoryReport = prompt('¿Desea generar un reporte de inventario? si/no');

if (generateInventoryReport === 'si') {
    generateReport();
}
