const startbutton = document.getElementById('start-btn')
const questionConEL = document.getElementById('question-container')
const highscore = document.getElementById('highscore')
const result = document.getElementById('result')
const questionEL = document.getElementById('question')
const answerButtonEL = document.getElementById('answer-buttons')
let time = 75; //minutes * 60 seconds
var url = ""



const timerEl = document.getElementById('timer')


// shuffles questions
let shuffledQuestions, currentQuestionIndex




startbutton.addEventListener("click", startQuiz)
answerButtonEL.addEventListener("click", () => {
    currentQuestionIndex++,
    nextQuestion()
} )

function startQuiz() {
    console.log('Started')
    startbutton.classList.add('hide')
    shuffledQuestions= questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionConEL.classList.remove('hide')
    updatetimerEl()
    nextQuestion()
    let refreshIntervalId = setInterval(updatetimerEl, 1000)
    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        clearInterval(refreshIntervalId);
    }
   

}
function updatetimerEl() {
        
    timerEl.innerHTML = time;
   
    time--;

    // let refreshIntervalId = setInterval(updatetimerEl,1000);

    }




function nextQuestion()  {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
   

}

function showQuestion(question) {
    questionEL.innerText = question.question
    question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonEL.appendChild(button)
    })
}
function resetState() {
    while (answerButtonEL.firstChild) {
        answerButtonEL.removeChild
        (answerButtonEL.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusText(document.getElementById('result'), correct)
    
      
 
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    
  }else {
    localStorage.setItem('recenttime', time)
    return window.location.assign('end.html')
  }

    

  }
  
  function setStatusText(element, correct) {
    if (correct) {
        correct == true
      element.innerHTML= "correct";
    } else {
      element.innerHTML="wrong";
      time -= 10

    }
  }

  function GotoHighScores(){
    return window.location.assign('highscores.html')
  }
 
  highscore.addEventListener("click", GotoHighScores);

  



var questions = [
    {
        question: 'What data type can a function return?',
        answers: [
            {text: 'string', correct: false},
             {text: 'number', correct: false},
             {text: 'boolean', correct: false},
             {text: 'all of the above', correct: true}

]


    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: [
            {text: 'var', correct: false},
             {text: 'let', correct: false},
             {text: 'Both A and B', correct: true},
             {text: 'None of the above', correct: false}

]


    },
    {
        question: 'What will be the output of the following code snippet?',
        answers: [
            {text: 'const', correct: true},
             {text: 'var', correct: false},
             {text: 'let', correct: false},
             {text: 'constant', correct: false}

]


    },
    {
        question: 'Javascript is an _______ language?',
        answers: [
            {text: 'Object-Oriented', correct: true},
             {text: 'Object-Based', correct: false},
             {text: 'Procedural', correct: false},
             {text: 'None of the above', correct: false}

]


    },
    {
        question: 'Which of the following are closures in Javascript?',
        answers: [
            {text: 'Variables', correct: false},
             {text: 'All of the above', correct: true},
             {text: 'Objects', correct: false},
             {text: 'Functions', correct: false}

]


    },

]