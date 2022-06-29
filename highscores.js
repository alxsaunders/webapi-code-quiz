const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const clear = document.getElementById('clear')

highScoresList.innerHTML = 
highScores.map(score => {//creates a li in highscoreslist ul with name and time from local storage
    return `<li classs="high-score">${score.name} - ${score.time}</li>`
}
    )
    

.join('')    //join 

clear.addEventListener("click", Clearhighscores)//clear local storage

function Clearhighscores(){

window.localStorage.clear()
}
