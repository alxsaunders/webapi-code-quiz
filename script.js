const startbutton = document.getElementById('start-btn')
const questionConEL = document.getElementById('question-container')
const highscore = document.getElementById('highscore')
const result = document.getElementById('result')
const questionEL = document.getElementById('question')
const answerButtonEL = document.getElementById('answer-buttons')
const startingtime = 1;
let time = startingtime * 60


const timerEl = document.getElementById('timer')


// shuffles questions
let shuffledQuestions, currentQuestionIndex




startbutton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log('Started')
    startbutton.classList.add('hide')
    shuffledQuestions= questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionConEL.classList.remove('hide')
    highscore.classList.add('hide')
    updatetimerEl()
    setInterval(updatetimerEl, 1000);
    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        clearInterval(updatetimerEl)
    }
    nextQuestion()






}


function updatetimerEl() {
    
    

    const minutes = Math.floor(time /60);
    let seconds = time % 60;

    timerEl.innerHTML = `${minutes}:${seconds}`;
   
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
    Array.from(answerButtonEL.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
      
    })
  
  }
  
  function setStatusText(element, correct) {
    clearStatusClass(element)
    if (correct) {
        correct == true
      element.innerHTML= "correct"
    } else {
      element.innerHTML="wrong"

    }
  }
  
  function clearStatusClass(element) {
    element.innerHTML=''
    element.innerHTML=''
  }


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
    question: 'What data types can a function return?',
    answers: [
        {text: 'string', correct: false},
         {text: 'number', correct: true}
    
    ]
},

{
    question: 'What data types can a function return?',
    answers: [
        {text: 'string', correct: false},
         {text: 'number', correct: true}
    
    ]
}


]