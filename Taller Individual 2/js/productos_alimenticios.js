Producto_alimenticio = ["Codigo", "Nombre", "Precio"]
Manzana = [13, "Manzana", 0.25]
Pera = [14, "Pera", 0.25]
Fresa = [15, "Fresa", 1]
Lista_Productos = [Producto_alimenticio, Manzana, Pera, Fresa]
function ImprimeDatos() {
    for (var i = 0; i < Lista_Productos.length; i++) {
        producto = Lista_Productos[i]
        document.getElementById("resul3").innerHTML += Lista_Productos[i] + "<br>"
        alert(producto)
    }
}