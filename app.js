
   
var quiz = [ 'quistion1', 'quistion3' , 'quistion3'];

function initializeApp() {
   var app;

   addButtonListeners();
   
   var app = document.querySelector("#app");
   app.innerHTML = "";


   /**
    * @author HM/MKI
    * @description Adds eventlisteners to prev & next button
    */
   function addButtonListeners() {
        var prevbutton = document.querySelector('.prevBtn');
        var nextbutton = document.querySelector('.nextBtn');
    
        prevbutton.addEventListener('click', prev);
        nextbutton.addEventListener('click', next);
   }

   /**
    *  @author HM/MKI
    *  @description When user clicks previous button
    */
   function prev() {
        console.log('prev');
   }

   /**
    *  @author HM/MKI
    *  @description When user clicks next button
    */
   function next() {
        console.log('next');
   }




}







