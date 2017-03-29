/**
 * Created by Ruta on 2017-03-23.
 */
function manoFuunkcija(kintamasis) {
    document.getElementById("demo").innerHTML = "Paragraph changed."+kintamasis;
}
var z = true;
var senas =  document.getElementById("demo1").innerHTML;

function kaitaliotiTeksta(kintamasis1) {
    z = !z;
    var txt = " ";
    if (!z) {
        txt = senas;
    }else{
        txt = kintamasis1;
    }
    document.getElementById("demo1").innerHTML = txt;
}
//var z = true;
var senas2 =  document.getElementById("demo2").innerHTML;

function kaitaliotiTeksta2(kintamasis2) {
    z = !z;
    var txt = " ";
    if (!z) {
        txt = senas2;
    }else{
        txt = kintamasis2;
    }
    document.getElementById("demo2").innerHTML = txt;
}