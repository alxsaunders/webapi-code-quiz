

const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
var mostRecentTime = localStorage.getItem('recenttime')
var button = $('button')

const highScores =  JSON.parse(localStorage.getItem('highScores')) || []


//displays your time
finalScore.innerText = "Your Score is " + mostRecentTime


//disables btn until a character is entered
username.addEventListener('keyup', () => {
saveScoreBtn.disabled = !username.value
})

//records name and time in a object
saveHighScore = e => {
    e.preventDefault()

    const score = {
        time: mostRecentTime,
        name: username.value
    }
    highScores.push(score)
    console.log(score);

    highScores.sort((a, b) => {
        return b.score - a.score
    })


    // highScores.splice(5)
//turns highscore obbject to a string
localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('highscores.html')//goes to highscores html

}
button.on('click', saveHighScore);//jquery event listener to save highsaves on highscor html(kept getting errors with vanilla)
// }