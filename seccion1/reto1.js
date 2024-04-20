let names = prompt('Ingrese por favor su nombre y apellido: ').toLowerCase();

let arrays = names.split(" ");

let userName = arrays[0].slice(0,3) + arrays[1].slice(0,3);

