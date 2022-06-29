//set constants by id on html

const startbutton = document.getElementById('start-btn')
const questionConEL = document.getElementById('question-container')
const highscore = document.getElementById('highscore')
const result = document.getElementById('result')
const questionEL = document.getElementById('question')
const answerButtonEL = document.getElementById('answer-buttons')
let time = 75; //70 seconds


const timerEl = document.getElementById('timer')


// shuffles questions
let shuffledQuestions, currentQuestionIndex



//on start button click show nxt question and and activates start quiz function
startbutton.addEventListener("click", startQuiz)
answerButtonEL.addEventListener("click", () => {
    currentQuestionIndex++,
    nextQuestion()
} )

function startQuiz() {
    console.log('Started')
    startbutton.classList.add('hide')//removes start button
    shuffledQuestions= questions.sort(() => Math.random() - .6)
    currentQuestionIndex = 0
    questionConEL.classList.remove('hide')
    updatetimerEl()
    nextQuestion()
    let refreshIntervalId = setInterval(updatetimerEl, 1000)
    if (time == 0) { //stop the setInterval whe time = 0 for avoid negative time
        clearInterval(refreshIntervalId);
    }
   

}
function updatetimerEl() {
        
    timerEl.innerHTML = "Time: " + time;
   
    time--;

    // let refreshIntervalId = setInterval(updatetimerEl,1000);

    }




function nextQuestion()  {//shows next question and clear old answer buttons
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
   

}

function showQuestion(question) {
    questionEL.innerText = question.question
    question.answers.forEach(answer => {//add buttons for each answers
    var button = document.createElement('button')//creat buttons
    button.innerText = answer.text
    button.classList.add('btn')//add class btn
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)//when select answer is triggered it will display next buttons
    answerButtonEL.appendChild(button)
    })
}
function resetState() {//clears answer button on activate
    while (answerButtonEL.firstChild) {
        answerButtonEL.removeChild
        (answerButtonEL.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target//on click event
    const correct = selectedButton.dataset.correct
    setStatusText(document.getElementById('result'), correct)//shows correct or wrong under answer buttons
    
      
 
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    
  }else {
    localStorage.setItem('recenttime', time)//set local storage of time if question end 
    return window.location.assign('end.html')
  }

    

  }
  
  function setStatusText(element, correct) {
    if (correct) {
        correct == true//if correct show correct if answer is wrong show wrong
      element.innerHTML= "correct";
    } else {
      element.innerHTML="wrong";
      time -= 10

    }
  }

  function GotoHighScores(){//allow to go highscore html through click evemt
    return window.location.assign('highscores.html')
  }
 
  highscore.addEventListener("click", GotoHighScores);

  


//questions and answer 
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
        question: 'How can a datatype be declared to be a constant type?',
        answers: [
            {text: 'const', correct: true},
             {text: 'var', correct: false},
             {text: 'let', correct: false},
             {text: 'constant', correct: false}

]


    },
    {
        question: 'How to stop an interval timer in Javascript?',
        answers: [
            {text: 'clearInterval', correct: true},
             {text: 'clearTimer', correct: false},
             {text: 'intervalOver', correct: false},
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
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            {text: 'getElementbyld()', correct: false},
             {text: 'getElementsByClassName()', correct: false},
             {text: 'Both A and B', correct: true},
             {text: 'None of the above', correct: false}

]
    }

]