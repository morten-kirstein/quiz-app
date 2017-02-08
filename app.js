
   
var quiz = [ 'quistion1', 'quistion3' , 'quistion3'];

function initializeApp() {

   var app = document.querySelector("#app");
   var currentQuestion = 0;

   addButtonListeners();
   startApplication();

   function startApplication() {
        let anwser = confirm('do you want to quiz');

        if(anwser){
            debugger;
        }else{
            alert('bye bye');
        }
   }
   
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


   function updateView(viewData) {
       app.innerHTML = viewData;
   }

   function showQuizQuestion(questionNr) {
    return quiz[questionNr];
   }

   /**
    *  @author HM/MKI
    *  @description When user clicks previous button
    */
   function prev() {
       debugger;
       currentQuestion--;
       showQuizQuestion(currentQuestion);           
   }

   /**
    *  @author HM/MKI
    *  @description When user clicks next button
    */
   function next() {

        currentQuestion++;
        showQuizQuestion(currentQuestion);

        
   }




}







