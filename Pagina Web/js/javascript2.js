
function validarSesion() {
    validarUsuario();
    validarContrasena();
}

function validarUsuario() {
    var elemento = document.getElementById("usuario");
    if (elemento.value == "") {
        alert("Ingrese un usuario");
        return false;
    }
    return true;
}

function validarContrasena() {
    // Ontenemos los valores de los campos de contrase�as 
    var passw = document.getElementById('contrasena');
    // Verificamos si las constrase�as no coinciden 
    if (passw.value == "") {
        alert("Ingrese una Contrasena");
        return false;
    } else {
        return true;
    }

}