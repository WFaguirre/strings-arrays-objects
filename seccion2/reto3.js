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
        wareHouse[nameProduct] = {
            [id]:{
            price: price,
            quantity: quantity,
            description: description
            }
        };
        console.log('Producto ha sido agregado correctamente');
    }
    optionNameProduct = prompt('¿Desea ingresar otro detalle? si/no');
}


