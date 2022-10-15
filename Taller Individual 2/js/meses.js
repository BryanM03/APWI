function MostrarMeses(meses_del_ano) {
    var mes = "";
    var meses_del_ano = new Array();
    meses_del_ano[0] = "Enero";
    meses_del_ano[1] = "Febrero";
    meses_del_ano[2] = "Marzo";
    meses_del_ano[3] = "Abril";
    meses_del_ano[4] = "Mayo";
    meses_del_ano[5] = "Junio";
    meses_del_ano[6] = "Julio";
    meses_del_ano[7] = "Agosto";
    meses_del_ano[8] = "Septiembre";
    meses_del_ano[9] = "Octubre";
    meses_del_ano[10] = "Noviembre";
    meses_del_ano[11] = "Diciembre";
    for (var i = 0; i < 12; i++) {
        mes = meses_del_ano[i];
        document.getElementById("resul2").innerHTML += meses_del_ano[i] + "<br>" ;
        alert(mes);       
    }
}