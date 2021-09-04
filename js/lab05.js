let a = document.getElementById("extraer");
a.onclick = extraerDatos;

let b = document.getElementById("colorear");
b.onclick = cambiarcolor;
let cambio = 1;

function cambiarcolor() {

    if (cambio) {
        document.getElementById("bt1").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("colorear").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("bt2").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("bt3").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("bt4").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("bt5").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("bt6").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("bt7").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("bt8").style.backgroundColor = "rgb(126, 148, 189)";
        cambio = 0;
    } else {
        document.getElementById("bt1").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("colorear").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("bt2").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("bt3").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("bt4").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("bt5").style.backgroundColor = "rgb(126, 148, 189)";
        document.getElementById("bt6").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("bt7").style.backgroundColor = "rgb(179, 90, 62)";
        document.getElementById("bt8").style.backgroundColor = "rgb(179, 90, 62)";
        cambio = 1;
    }

}

function extraerDatos() {
    let nombres = document.getElementById("nombres").value;
    let fecha = document.getElementById("fe").value;

    let apellido = nombres.split(' ');
    let mes = fecha.split('-');

    document.getElementById("app").value = apellido[0];
    document.getElementById("apm").value = apellido[1];
    let nomb = apellido[0] + " " + apellido[1];
    let solon = nombres.split(nomb + " ");
    let longitud = apellido[0] + apellido[1];
    document.getElementById("nom").value = solon[1];
    document.getElementById("lon").value = longitud.length + " letras";

    let edadfija = calcular_edad();
    document.getElementById("años").value = edadfija + " años";

    switch (mes[1]) {
        case '01':
            document.getElementById("mes").value = "Enero";
            break;
        case '02':
            document.getElementById("mes").value = "Febrero";
            break;
        case '03':
            document.getElementById("mes").value = "Marzo";
            break;
        case '04':
            document.getElementById("mes").value = "Abril";
            break;
        case '05':
            document.getElementById("mes").value = "Mayo";
            break;
        case '06':
            document.getElementById("mes").value = "Junio";
            break;
        case '07':
            document.getElementById("mes").value = "Julio";
            break;
        case '08':
            document.getElementById("mes").value = "Agosto";
            break;
        case '09':
            document.getElementById("mes").value = "Setiembre";
            break;
        case '10':
            document.getElementById("mes").value = "Octubre";
            break;
        case '11':
            document.getElementById("mes").value = "Noviembre";
            break;
        case '12':
            document.getElementById("mes").value = "Diciembre";
            break;
    }



}

function calcular_edad(añonac, mesnac, dianac) {
    let fecha = document.getElementById("fe").value;
    let mes = fecha.split('-');
    ahora = new Date();
    ahorames = ahora.getMonth();
    ahoradia = ahora.getDate();
    ahoraaño = ahora.getFullYear();
    añonac = mes[0];
    mesnac = mes[1];
    dianac = mes[2];
    edad = ahoraaño - mes[0];

    if (ahorames < mesnac - 1) {
        edad--;
    }
    if (mesnac - 1 == ahorames && ahoradia < dianac) {
        edad--;
    }
    return edad;


}