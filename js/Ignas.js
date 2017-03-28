/**
 * Created by Ignas on 2017.03.23.
 */
var Turinys =["Home Page", "News", "NBA", "Euroleague", "Contacts", "Join our team!"];
var old_txt = document.getElementById('tekstas');
function keistiTurini(tekstas){
    document.getElementById('senas').innerHTML = Turinys[tekstas];



}
