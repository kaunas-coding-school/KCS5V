/**
 * Created by User on 2017-03-23.
 */
var z=false;
var y=true;
var old_img=document.getElementById('elementas1').src;
var old_txt=document.getElementById('testas').innerHTML;
    function keistiPaveiksleli(kint){
        z=!z;
        var img='';
        if(!z){
            img=old_img;
        }
        else{
            img=kint;
        }
        document.getElementById('elementas1').src=img;
    }

    function keistiteksta(tekstas) {
        y=!y;
        var txt='';
        if(!y){
            txt=tekstas;
        }
        else{
            txt=old_txt;
        }
        document.getElementById('testas').innerHTML = txt;


    }