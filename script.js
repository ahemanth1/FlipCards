const symbols = ['🍎','🍌','🍇','🍉','🍒','🍋','🍍','🥝'];
const cards = [...symbols, ...symbols]; // create pairs
cards.sort(() => 0.5 - Math.random()); // shuffle

const gameBoard = document.getElementById('game-board');
let flippedCards = [];
let matched = 0;
let moves = 0;

function createCard(symbol) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.symbol = symbol;
  card.innerText = '?';

  card.addEventListener('click', () => {
    if (
      card.classList.contains('flipped') ||
      flippedCards.length === 2
    ) return;

    card.classList.add('flipped');
    card.innerText = symbol;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      moves++;
      document.getElementById('moves').innerText = `Moves: ${moves}`;
      checkMatch();
    }
  });

  gameBoard.appendChild(card);
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.symbol === card2.dataset.symbol) {
    matched += 2;
    flippedCards = [];

    if (matched === cards.length) {
      setTimeout(() => {
        alert(`🎉 You won in ${moves} moves!`);
      }, 300);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.innerText = '?';
      card2.innerText = '?';
      flippedCards = [];
    }, 800);
  }
}

cards.forEach(symbol => createCard(symbol));
