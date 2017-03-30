// Initialize Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAN5uyziZ2A2fUQ0D3tXV_66Le8gwAQhjk',
    authDomain: 'quiz-app-47729.firebaseapp.com',
    databaseURL: 'https://quiz-app-47729.firebaseio.com',
    storageBucket: 'quiz-app-47729.appspot.com',
    messagingSenderId: '21013765320'
})

let storage = firebase.storage()
let database = firebase.database()
let messageRef = database.ref('questions')

function initApp() {
    /**
     * User confirmation
     */
    if (confirm('Do you want to quiz?')) {
        initQuiz()
    } else {
        alert(':(')
    }

    /**
     * initQuiz
     */
    function initQuiz() {
        /**
         * Questions
         *
         * @type {Array}
         */
        let questions = [];

        /**
         * Current question count
         *
         * @type {number}
         */
        let currentQuestion = 0;

        var quizTitle = document.querySelector('#question-title');
        var quizAnwsers = document.querySelector('#question-anwsers');

        // Spørg firebase om der er nogle spørgsmål
        messageRef.on('child_added', function(snapshot) {
            questions.push(snapshot.val())

            totalQuestions = questions.length;

            showQuestion(questions[currentQuestion]);
        })

        // Show the question and update UI
        function showQuestion(question) {
            quizTitle.innerHTML = question.title

            var questionTitle = question.title

            var wrongAnswers = question.wrongAnswers;
            var correctAnswers = question.correctAnswer;

            var answersCollection = wrongAnswers.concat(correctAnswers);
            
            var answersTitles = [];
            for(var i = 0; answersCollection.length > i; i++) {
                answersTitles.push(answersCollection[i].title);
            }

            var anwserTemplate = makeAnswerHTMLTemplate(shuffle(answersTitles));

            quizTitle.innerHTML = questionTitle;
            quizAnwsers.innerHTML = anwserTemplate;
        }

        /**
         * Answer template
         *
         * @param {*} answerCollection
         */
        function makeAnswerHTMLTemplate(answerCollection) {
            let output = ''

            for (let i = 0; answerCollection.length > i; i++) {
                output += '<a href="#" class="button answer">' + answerCollection[i] + '</a>'

                if (i + 1 !== answerCollection.length) output += '&nbsp;'
            }

            return output
        }

        // Click prev
        document.querySelector('.prevBtn').addEventListener('click', function () {
            if (currentQuestion === 0) {
                alert('Dette er det første spørgsmål');
            } else {
                currentQuestion--;

                showQuestion(questions[currentQuestion]);
            }
        })

        // Click next
        document.querySelector('.nextBtn').addEventListener('click', function () {
            if (currentQuestion >= questions.length - 1) {
                endQuiz()
            }
            else {
                currentQuestion++;

                showQuestion(questions[currentQuestion]);
            }
        })

        /**
         * End quiz
         */
        function endQuiz() {
            alert('Your quiz has ended')
        }
    }

    /**
     * Shuffle array
     *
     * @param array
     */
    function shuffle(array) {
        for (let i = array.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [array[i - 1], array[j]] = [array[j], array[i - 1]];
        }

        return array
    }
}