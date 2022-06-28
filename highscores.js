const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const clear = document.getElementById('clear')

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li classs="high-score">${score.name} - ${score.time}</li>`
}
    )
    

.join('')    

clear.addEventListener("click", Clearhighscores)

function Clearhighscores(){

window.localStorage.clear()
}
// passwordBtnEl.on('click', function () {
//     var newPassword = passwordGenerator(15);
//     passwordDisplayEl.text(newPassword);
//     localStorage.setItem('recenttime', time)
//   });

