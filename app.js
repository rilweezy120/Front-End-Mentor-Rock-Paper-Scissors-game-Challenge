const clocks = document.querySelectorAll(".clock");
const gameBg = document.querySelector(".game-background");
const playerImg = document.getElementById('player-clock');
const compImg = document.getElementById('comp-clock')
const decision = document.querySelector('.decision-modal');
const resetBtn = document.getElementById('reset-btn');
const resultText = document.getElementById('game-result');
const scoreInfo = document.querySelector('.count');
let SCORE = 0;


clocks.forEach(clock => {
    clock.addEventListener('click', (event) => {
        gameBg.style.display = "none"
        decision.style.display = "flex";
        let compC = Math.floor(Math.random() * 3);
        (compC === 0) ? compC = "rock-clock" : (compC === 1) ? compC = "paper-clock" : compC = "scissors-clock"

        showChoice(clock, compC)
        console.log(clock);
        console.log(event.target);
        // checkWinner()
    })
})

const showChoice = (playerChoice, compChoice) => {
    // const compChoice = Math.random();
    // console.log(compChoice, playerChoice)
    playerImg.className = playerChoice.className;
    playerImg.style.position = "relative"
    playerImg.style.top = "0"
    playerImg.style.left = "0"
    playerImg.innerHTML = playerChoice.innerHTML
    // console.log(playerImg.innerHTML)

    // compImg.innerHTML = playerChoice.innerHTML

    // compChoice === "rock-clock" 

    compImg.className = `${compChoice}`
    compImg.style.position = "relative"
    compImg.style.top = "0"
    compImg.style.left = "0"
    const selectedClock = document.querySelector(`.${compChoice}`)
    compImg.innerHTML = selectedClock.innerHTML;



    // console.log(playerChoice.dataset);
    // console.log(compChoice, compImg.className);

    checkWinner(playerChoice.dataset, compImg.className)

    // let compC = Math.floor(Math.random() * 3);
    // console.log(compC);
}

const checkWinner = (player, comp) => {
    // console.log(player.dataset,comp.dataset)
    // console.log(player.clock)
    // console.log(comp)
    // console.log("show")
    if (player.clock === comp) {
        // console.log('Ogbono soup')
        resultText.textContent = "Draw"
    }

    else if (player.clock === 'paper-clock' && comp === 'rock-clock' ||
        player.clock === 'rock-clock' && comp === 'scissors-clock' ||
        player.clock === 'scissors-clock' && comp === 'paper-clock') {
        increment()
        resultText.textContent = "You Win"
        scoreInfo.textContent = SCORE;
    }

    else if (player.clock === 'paper-clock' && comp === 'scissors-clock' ||
        player.clock === 'rock-clock' && comp === 'paper-clock' ||
        player.clock === 'scissors-clock' && comp === 'rock-clock') {

        resultText.textContent = "You Lose"
       decrement()
        scoreInfo.textContent = SCORE;
        console.log(SCORE)
    }
}


const resetGame = () => {
    gameBg.style.display = "grid"
    decision.style.display = "none";
    // SCORE = 0;

}

const increment = () => {
    SCORE += 1;
}
const decrement = () => {
    SCORE -= 1;
    if (SCORE < 1) {
        SCORE = 0;
    }
}

resetBtn.addEventListener('click', resetGame)