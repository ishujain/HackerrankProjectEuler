let min = 1, max = 10, winingNum = 2; guessesLeft = 3;


const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

//game event listner
game.addEventListener('mousedown', function (e) {
  console.log(e.target.className);
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});

//assing min and max
minNum.textContent = min;
maxNum.textContent = max;

//assign ui
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please add number between ${min} and ${max}`, 'red');
  } else {
    //game won 
    if (guess === winingNum) {
      guessInput.disabled = true;
      setMessage(`Wining number is ${winingNum}. You WON !!! `, 'green');
      guessBtn.value = 'Play Again';
      guessBtn.className += 'play-again'
    }
    else {
      //game contineu
      guessesLeft -= 1;
      if (guessesLeft > 0) {
        setMessage(`Wrong number, try again !! You have guesses ${guessesLeft} left`, 'red');
        guessInput.value = '';

      }
      else {
        //game lost
        setMessage(`Game Lost !!! No guesses left. Correct num was ${winingNum}`, 'red');
        guessInput.disabled = true;
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again'
      }
    }
  }

});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
  guessInput.style.borderColor = color;

}
