


function myFunction() {
   document.getElementById("demo").innerHTML = "Pakeista";
   }

   var aaa = "http://www.etudessansfrontieres.org/wp-content/uploads/2017/03/cool-background-wallpapers-for-computers-150x150.jpg";
   var bbb = "https://www.all4-you.com/wp-content/uploads/2016/11/Lovely-Cool-Rasta-Wallpapers-150x150.jpg";
    var ccc = "http://funkyfreshstudio.com/wp-content/uploads/cool-wallpaper-for-iphone-2_150.jpg";
     var ddd = "http://erahomedesign.com/wp-content/uploads/2016/06/Cool-mid-century-Modern-Bookcase-150x150.jpg";

   function createimg(key,sizeA,sizeB) {
   var theimage = document.createElement("img", {
     "id": "id",
     "class": "this that and so on",
         "data-whatever": "whatever data",
         });
   theimage.setAttribute('src', key);
   theimage.setAttribute('alt', 'image');
   theimage.height = sizeA;
   theimage.width = sizeB;
   document.body.appendChild(theimage);
   }

