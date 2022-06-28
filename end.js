const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
var mostRecentTime = localStorage.getItem('recenttime')
var button = $('button')

const highScores =  JSON.parse(localStorage.getItem('highScores')) || []
const LowestScore = 0

// var nameEl = $('input[name="name"]');
// var timeScore = recentTime
finalScore.innerText = "Your Score is " + mostRecentTime



username.addEventListener('keyup', () => {
saveScoreBtn.disabled = !username.value
})


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

localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('highscores.html')

}
button.on('click', saveHighScore);
// }