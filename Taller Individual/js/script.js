function AbrirVentana(URL, Titulo, altura, ancho) {
    var left = (screen.width - altura) / 2;
    var top = (screen.height - ancho) / 4;
    window.open(URL, Titulo,'resizable=yes, width=' + altura + ', height=' + ancho + ', top=' + top + ', left=' + left);
}

function CerrarVentana() {
    window.close();
}