const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockPairCards = false;
let firstCard, secondCard;

function flipCard() {
  if (lockPairCards) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.content === secondCard.dataset.content;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockPairCards = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockPairCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomNum = Math.floor(Math.random() * 12);
    card.style.order = randomNum;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

document.getElementById("start").addEventListener('click', function startGame() {
  

};

// //reloading the game page
// window.getElementById("restart").addEventListener('click',()=>{ location.reload()})

// //starting the game and the score
// const game = () => {
//     let score = 0;
    
// const startGame = () => {
//     const startBtn = document.querySelector(".start");

//     startBtn.addEventListener("click", () => {
//       DisplayGame;
//     });
// } 
