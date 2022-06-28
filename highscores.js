const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []


highScoresList.innerHTML = 
highScores.map(score => {
    return `<li classs="high-score">${score.name} - ${score.time}</li>`
}
    )
    

.join('')    

// passwordBtnEl.on('click', function () {
//     var newPassword = passwordGenerator(15);
//     passwordDisplayEl.text(newPassword);
//     localStorage.setItem('recenttime', time)
//   });

