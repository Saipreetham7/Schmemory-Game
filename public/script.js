document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('gameBoard');
  const restartButton = document.getElementById('restartGame');
  const cardsArray = [
    { img: 'img1.jpg', id: 1 },
    { img: 'img1.jpg', id: 1 },
    { img: 'img2.jpg', id: 2 },
    { img: 'img2.jpg', id: 2 },
    { img: 'img3.jpg', id: 3 },
    { img: 'img3.jpg', id: 3 },
    { img: 'img4.jpg', id: 4 },
    { img: 'img4.jpg', id: 4 },
    { img: 'img5.jpg', id: 5 },
    { img: 'img5.jpg', id: 5 },
    { img: 'img6.jpg', id: 6 },
    { img: 'img6.jpg', id: 6 },
    { img: 'img7.jpg', id: 7 },
    { img: 'img7.jpg', id: 7 },
    { img: 'img8.jpg', id: 8 },
    { img: 'img8.jpg', id: 8 },
  ];
  let chosenCards = [];
  let chosenIds = [];
  let matches = 0;

  // Shuffle cards
  function shuffle(array) {
    array.sort(() => 0.5 - Math.random());
  }

  // Create the game board
  function createBoard() {
    shuffle(cardsArray);
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('data-id', i);
      card.style.backgroundImage = 'url("images/card-back.png")'; // Assuming you have a card-back image
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    }
  }

  // Flip a card
  function flipCard() {
    let cardId = this.getAttribute('data-id');

    // Prevent the same card from being added twice
    if (!chosenIds.includes(cardId)) {
      chosenCards.push(cardsArray[cardId]);
      chosenIds.push(cardId);
      this.style.backgroundImage = `url("images/${cardsArray[cardId].img}")`; // Show the card image
      this.classList.add('flipped');

      if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  // Check for matches
  function checkMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = chosenIds[0];
    const optionTwoId = chosenIds[1];

    if (
      chosenCards[0].id === chosenCards[1].id &&
      optionOneId !== optionTwoId
    ) {
      alert('You found a match!');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      matches++;
    } else {
      cards[optionOneId].style.backgroundImage = 'url("images/card-back.png")'; // Flip back to card back
      cards[optionTwoId].style.backgroundImage = 'url("images/card-back.png")'; // Flip back to card back
      cards[optionOneId].classList.remove('flipped');
      cards[optionTwoId].classList.remove('flipped');
    }

    chosenCards = [];
    chosenIds = [];

    if (matches === cardsArray.length / 2) {
      alert('Congratulations! You found all matches!');
    }
  }

  createBoard();
});
