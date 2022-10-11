function validarFormulario() {
    validarNombre();
    validarApellido();
    validarTelefono();
    verificarPasswords();
}

function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (elemento.value == "") {
        alert("El campo no pude ser vacio");
        return false;
    }
    return true;
}
function validarApellido() {
    var elemento = document.getElementById("apellido");
    if (elemento.value == "") {
        alert("El campo no pude ser vacio");
        return false;
    }
    return true;
}
function validarTelefono() {
    var elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)) {
        alert("El campo telefono tiene que ser numerico");
        return false;
    }
    if (elemento.value == "") {
        alert("El campo no puede estar vacio");
        return false;
    }
    return true;
}
function verificarPasswords() {
    // Ontenemos los valores de los campos de contraseñas 
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
        alert("Contrasenas no coinciden");
        return false;
    } else {
        return true;
    }

}

