'use strict'

// console.log(document.querySelector('.message').textContent)
// var message = document.querySelector('.message').textContent = "Correct Answer!"

let secret_number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secret_number;

let current_score = 20;
let highscore = 0;

const task = () => {
    var guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = "Please enter a number!";
    }

    else if(guess !== secret_number){
        if (current_score > 1) {
        document.querySelector('.message').textContent = guess > secret_number ? "📈Too high!" : "📉Too low!";
        current_score--;
        document.querySelector('.score').textContent = current_score;
        }
        else {
            document.querySelector('.message').textContent = "🤔You lose!";
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess < secret_number) {
    //     if (current_score > 1) {
    //     document.querySelector('.message').textContent = "📉Too low!";
    //     current_score--;
    //     document.querySelector('.score').textContent = current_score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "🤔You lose!";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if(guess > secret_number) {
    //     if (current_score > 1) {
    //     document.querySelector('.message').textContent = "📈Too high!";
    //     current_score--;
    //     document.querySelector('.score').textContent = current_score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "🤔You lose!";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    else if(secret_number === guess) {
        console.log(current_score, highscore);
        if (current_score > highscore) {
            highscore = current_score;
            document.querySelector('.highscore').textContent = highscore;
        } 
        else{
            document.querySelector('.highscore').textContent = highscore;   
        }
        document.querySelector('.message').textContent = "🎉Correct Answer!";
        document.querySelector('.highscore').textContent = current_score;
        document.querySelector(".number").textContent = secret_number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }

}

document.querySelector('.check').addEventListener('click', task)


// Play again condition

const playAgain = () => {
    current_score = 20;
    secret_number = Number(Math.trunc(Math.random() * 20) + 1)
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = current_score;
    document.querySelector('.highscore').textContent = highscore;
}    

document.querySelector(".again").addEventListener("click",playAgain)