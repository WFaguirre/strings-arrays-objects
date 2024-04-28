let option = prompt('Desea crear un nuevo usuario si/no');

let i = Number(0);

let list = [];


while(option == 'si'){

    let names = prompt('Ingrese por favor su nombre y apellido: ').toLowerCase();

    let arrays = names.split(" ");

    let userName = arrays[0].slice(0,3) + arrays[1].slice(0,3);

    if(list.includes(userName + '@myDomain.com')){
        window.alert(userName +'@myDomain.com' + ' ya existe');
        list.push(userName+ ++i +'@myDomain.com');
        window.alert(userName+ i +'@myDomain.com'+' Ha sido asignado')
    } else {
        window.alert('Usuario creado exitosamente');
    }
    
    
    list.push(userName+'@myDomain.com');

    option = prompt('Desea crear otro usuario: si/no');
    
   
 

}















