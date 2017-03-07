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

/*var question = {
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
};*/


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
        var quizQuestions = [];
        var totalQuestions;
        var currentQuestion = 0;

        var quizTitle = document.querySelector('#question-title');
        var quizAnwsers = document.querySelector('#question-anwsers');

        //Spørg firebase om der er nogle spørgsmål
        messageRef.on('child_added', function(snapshot) {
            quizQuestions.push(snapshot.val());

            totalQuestions = quizQuestions.length;

            //display first question in collection
            var firstQuestion = quizQuestions[0];
            showQuestion(firstQuestion);

        });

       
        addButtonListeners();

        // Show the question and update UI
        function showQuestion(question){

            var questionTitle = question.title;

            var wrongAnswers = question.wrongAnswers;
            var correctAnswers = question.correctAnswer;

            var answersCollection = wrongAnswers.concat(correctAnswers);
            
            var answersTitles = [];


            for(var i = 0; answersCollection.length > i; i++) {

                answersTitles.push(answersCollection[i].title);
                debugger;
            } 
            
            
        
            debugger;
            var anwserTemplate = makeAnwserHTMLTemplate(answersTitles);

            quizTitle.innerHTML = questionTitle;
            quizAnwsers.innerHTML = anwserTemplate;
           
        }

        
        /**
         * 
         * @param {*} anwserCollection 
         */
        function makeAnwserHTMLTemplate(anwserCollection){

            var title = "hello";

            var htmlstring = [
                '<ul">',
                    '<li>' + title + '</li>',
                '</ul>'
            ].join("\n");

            return htmlstring;
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
