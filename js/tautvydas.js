/**
 * Created by LenovoUser on 3/23/2017.
 */
function manoFunkcija(kintamasis) {
    document.getElementById('elementas1').innerHTML = 'Naujas tekstas ir ' + kintamasis;
}

var z = false;
var y = false;
var old_txt = document.getElementById('testas').innerHTML;
var old_img = document.getElementById('paveiksl').src;

function keistiteksta(tekstas) {
    z = !z;
    var txt = '';
    if (!z) {
        txt = old_txt;
    } else {
        txt = tekstas;
    }
    document.getElementById('testas').innerHTML = txt;
}

function keistiPav(addr) {
    y = !y;
    var txt = '';
    if (!y) {
        txt = old_img;
    } else {
        txt = addr;
    }
    console.log(txt);
    document.getElementById('paveiksl').src = txt;
}