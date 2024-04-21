let input = prompt('Por favor ingrese su contraseña: (debe de ser 8 caracteres, debe contener al menos un número y una letra, y contener al menos un caracter especial): ');

function passwordValidate(password){
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return regex.test(password);
}

if(passwordValidate(input) == true) {
    window.alert('Contraseña segura');
} else {
    window.alert('Contraseña insegura no cumple con las siguientes condiciones: falta "un caracter especial(^,@,+,*,~,etc..) un número, o una letra Mayuscula o excede los 8 caracteres"');
    
}