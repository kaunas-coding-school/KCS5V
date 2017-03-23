/**
 * Created by lektorius on 23/03/2017.
 */
function manoFunkcija(kintamasis) {
    document.getElementById('elementas1').innerHTML = 'Naujas tekstas ir' +kintamasis;
}
function manoFunkcija2(kintamasis) {
    console.log(kintamasis);
    document.getElementById('muse').src = kintamasis;
}


// var image = document.getElementsByName('muse').scr;