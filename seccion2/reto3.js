let optionWarehouse = prompt('¿Desea crear un producto nuevo? si/no');

while (optionWarehouse === 'si') {
    let nameProduct = prompt('Ingrese el nombre del producto: ');
    wareHouse[nameProduct] = {};
    optionWarehouse = prompt('¿Desea agregar otro producto? si/no');
}

let optionNameProduct = prompt('¿Desea ingresar detalles del producto? si/no');

while (optionNameProduct === 'si') {
    let nameProduct = prompt('Ingrese el nombre del producto: ');
    let id = prompt('Número de referencia del producto: ');
    let price = Number(prompt('Ingrese el precio del producto: '));
    let quantity = Number(prompt('Ingrese la cantidad a ingresar: '));
    let description = prompt('Escriba una breve descripción del producto: ');

    if (wareHouse.hasOwnProperty(nameProduct) && wareHouse[nameProduct].hasOwnProperty(id)) {
        console.log('Este producto ya existe');
        wareHouse[nameProduct + ++i] = {
            [id]: {
                price: price,
                quantity: quantity,
                description: description
            }
        };
        console.log(nameProduct + ++i + 'Ha sido asignado');
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
