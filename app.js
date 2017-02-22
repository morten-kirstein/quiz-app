/* global firebase */

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyAN5uyziZ2A2fUQ0D3tXV_66Le8gwAQhjk',
    authDomain: 'quiz-app-47729.firebaseapp.com',
    databaseURL: 'https://quiz-app-47729.firebaseio.com',
    storageBucket: 'quiz-app-47729.appspot.com',
    messagingSenderId: '21013765320'
};
firebase.initializeApp(config);

var storage = firebase.storage();
var database = firebase.database();

var messageRef = database.ref('questions');

var question = {
    author: 'Martin',
    title: 'Hvad er en kejserkåbe?',
    correctAnswer: [{
        title: 'Begge dele'
    }],
    wrongAnswers: [
        {
            title: 'En sommerfugl'
        },
        {
            title: 'Et stykke tøj'
        }
    ]
};


function initializeApp() {

    //Display welcome message with question about continue
    var wantToPlay = confirm('do you want to quiz');

     //if user clicks ok
    if( wantToPlay ){
        initNewQuiz();
    } else {
        //show bye bye message
        alert('bye bye');
    }

    //initialize new quiz
    function initNewQuiz() {

        //Set questions in collection
        var quizQuestions = [ 'Question 1', 'Question 2' , 'Question 3'];

        // InitializeCurrentQuestion
        var currentQuestion = 0;
        var totalQuestions = quizQuestions.length;

        var app = document.querySelector('#app');
        addButtonListeners();



        //display first question in collection
        var firstQuestion = quizQuestions[0];
        showQuestion(firstQuestion);

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

            //hvor er jeg i mit index
            if(currentQuestion <= 0 ){
                alert('Dette er det første spørgsmål');
            } else {

                 // Decrease currentQuestion by 1
                currentQuestion--;
                    // show Question with number currentQuestion
                var question = quizQuestions[currentQuestion];
                showQuestion(question);
            }

        }

        // Click next
        function nextQuestion() {
            // Increase currentQuestion by 1

            if(currentQuestion < (totalQuestions - 1)){
                currentQuestion++;

                var question = quizQuestions[currentQuestion];

                // show Question with number currentQuestion
                showQuestion(question);
            } else {
                quizEnded();
            }
        }

        function quizEnded() {
            alert('your quiz has endend');
        }


    }
}
