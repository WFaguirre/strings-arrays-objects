const event = {};

let option = prompt('¿Desea crear un evento?: si/no ');

while (option === 'si') {
    let id = Number(prompt('Por favor ingresa tú número de identificación: '));
    let names = prompt('Por favor ingrese su nombre: ').trim();
    let date = prompt('Por favor ingrese la fecha: ').trim();
    let description = prompt("Ingrese una breve descripción del evento: ").trim();

    event[id] = { names, date, description };

    option = prompt('¿Desea ingresar otro evento?: si/no ');
}

console.log(event);

const search = prompt('Indique el evento que quiere buscar ').toLowerCase().trim();

let found = false;

for (let key in event) {
    if (event[key].names.toLowerCase() === search || event[key].date.toLowerCase() === search || event[key].description.toLowerCase() === search) {
        found = true;
        const eventoEncontrado = event[key];
        window.alert(`Se ha encontrado un evento relacionado:\nNombre: ${eventoEncontrado.names}\nFecha: ${eventoEncontrado.date}\nDescripción: ${eventoEncontrado.description}`);
        break;

    }

if (!found) {
    window.alert('No se ha encontrado nada relacionado');
}

}


let remove = confirm('¿Desea eliminar este evento?');

function removeObject(event) {
    for (let key in event){
        if (event.hasOwnProperty(key)){
            delete event[key];
        }
    }
}

if (remove == true) {
    removeObject(event);
    window.alert('Información eliminada');
} else {
    window.alert('No se ha eliminado la información');
}



