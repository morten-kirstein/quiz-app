function initializeApp() {

    //Display welcome message with question about continue
    let wantToPlay = confirm('do you want to quiz');

     //if user clicks ok
    if( wantToPlay ){
        initNewQuiz();
    } else {
        //show bye bye message
        alert('bye bye');
    }

    //initialize new quiz
    function initNewQuiz() {

        // InitializeCurrentQuestion
        var currentQuestion = 0;
        var app = document.querySelector("#app");
        addButtonListeners();

        //Set questions in collection
        var quizQuestions = [ 'Question 1', 'Question 2' , 'Question 3'];
        
        //display first question in collection
        var firstQuestion = quizQuestions[0];
        showQuestion(firstQuestion)

        // Show the question and update UI
        function showQuestion(questionNr){
            app.innerHTML = questionNr;
        }

        // Add event listeners to buttons
        function addButtonListeners() {
            var prevbutton = document.querySelector('.prevBtn');
            var nextbutton = document.querySelector('.nextBtn');
    
            prevbutton.addEventListener('click', prevQuestion);
            nextbutton.addEventListener('click', nextQuestion);
        }

        // Click prev
        function prevQuestion() {
            // Decrease currentQuestion by 1
            currentQuestion--;

             // show Question with number currentQuestion
            var question = quizQuestions[currentQuestion];
            showQuestion(question);
        }

        // Click next
        function nextQuestion() {
            // Increase currentQuestion by 1
            currentQuestion++;

            var question = quizQuestions[currentQuestion];
            // show Question with number currentQuestion
            showQuestion(question);
        }
    }
}







