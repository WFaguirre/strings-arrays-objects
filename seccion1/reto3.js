let email = prompt('Por favor ingresa tu correo electronico: ');

function emailValidate() {
    const validex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validex.test(email);
}

if (emailValidate(email)==true) {
    window.alert('Correo electronico válido');
} else {
    window.alert('Correo electronico no válido');
}

