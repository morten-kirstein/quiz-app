//Display welcome message with question about continue
    //if user clicks ok
        // initialize new quiz
    //else
        //show bye bye message

//initialize new quiz
    // InitializeCurrentQuestion
    //Set questions in collection

//display first question in collection

// Click next
    // Increase currentQuestion by 1
    // show Question with number currentQuestion

// Click prev
    // Decrease currentQuestion by 1
    // show Question with number currentQuestion

   
var quiz = [ 'quistion1', 'quistion3' , 'quistion3'];

function initializeApp() {

   var app = document.querySelector("#app");
   var currentQuestion = 0;

   //Display welcome message
        // Do you want to quiz
            //Start quiz from first Quiestion
        //Display bye message

    //Go to next question

    //Go to previous question

    //Display showing Question nr out of total questions




   addButtonListeners();
   startApplication();

   function startApplication() {
        let anwser = confirm('do you want to quiz');

        if(anwser){
            updateView(quiz[currentQuestion]);
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







