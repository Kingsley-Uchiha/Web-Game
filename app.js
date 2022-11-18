// * ROCK PAPER SCISSORS
// function rockPaperScissors() {
//     const computerChoiceDisplay = document.getElementById('computer_choice');
//     const userChoiceDisplay = document.getElementById('user_choice');
//     const resultDisplay = document.getElementById('result');
//     let userChoice;

//     const possibleChoices = document.querySelectorAll('button');

//     possibleChoices.forEach(possibleChoice => {
//         possibleChoice.addEventListener('click', (e) => {
//             userChoice = e.target.id;
//             userChoiceDisplay.innerHTML = userChoice;
//             generateComputerChoice();
//         })
//     })

//     function generateComputerChoice() {
//         const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

//         if (randomNumber === 1) {
//             computerChoice = 'rock';
//         }
//         if (randomNumber === 2) {
//             computerChoice = 'scissors';
//         }
//         if (randomNumber === 3) {
//             computerChoice = 'paper';
//         }
//         computerChoiceDisplay.innerHTML = computerChoice;
//     }

//     function getResult() {
//         if (computerChoice === userChoice) {
//             result = 'its a draw';
//         }
//         if (computerChoice === 'rock' && userChoice === 'paper') {
//             result = 'its a draw';
//         }
//         if (computerChoice === userChoice) {
//             result = 'its a draw';
//         }
//         if (computerChoice === userChoice) {
//             result = 'its a draw';
//         } //? YOU KNOW THE REST
//     }
// }

// * MEMORY GAME

function memoryGame() {
    const cardArray = [{
            name: 'virus',
            img: 'images/virus.jpg'
        },
        {
            name: 'money',
            img: 'images/money.jpg'
        },
        {
            name: 'atom',
            img: 'images/atom.jpg'
        },
        {
            name: 'globe',
            img: 'images/globe.jpg'
        },
        {
            name: 'laptop',
            img: 'images/laptop.jpg'
        },
        {
            name: 'sphere',
            img: 'images/sphere.jpg'
        },

        {
            name: 'virus',
            img: 'images/virus.jpg'
        },
        {
            name: 'money',
            img: 'images/money.jpg'
        },
        {
            name: 'atom',
            img: 'images/atom.jpg'
        },
        {
            name: 'globe',
            img: 'images/globe.jpg'
        },
        {
            name: 'laptop',
            img: 'images/laptop.jpg'
        },
        {
            name: 'sphere',
            img: 'images/sphere.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());
    // console.log(cardArray);
    const grid = document.querySelector('#grid');
    let cardsChosen = [];
    let cardsChosenIds = [];
    const cardsWon = [];
    const resultDisplay = document.querySelector('#result');

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/back.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
            // console.log(card);
        }
    }
    createBoard();

    function checkMatch() {
        const cards = document.querySelectorAll('#grid img');
        const option1Id = cardsChosenIds[0];
        const option2Id = cardsChosenIds[1];
        if (option1Id == option2Id) {
            alert('You clicked same images');
            cards[option1Id].setAttribute('src', 'images/back.jpg');
            cards[option2Id].setAttribute('src', 'images/back.jpg');
        }

        if (cardsChosen[0] == cardsChosen[1]) {
            cards[option1Id].setAttribute('src', 'images/front.jpg');
            cards[option2Id].setAttribute('src', 'images/front.jpg');
            cards[option1Id].removeEventListener('click', flipCard);
            cards[option2Id].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[option1Id].setAttribute('src', 'images/back.jpg');
            cards[option2Id].setAttribute('src', 'images/back.jpg');
            alert('Sorry try again');
        }
        resultDisplay.textContent = cardsWon.length;
        cardsChosen = [];
        cardsChosenIds = [];

        if (cardsWon.length == cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations, you found them all'
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        this.setAttribute('src', cardArray[cardId].img);
        // hmmm
        cardsChosenIds.push(cardId);

        if (cardsChosen.length == 2) {
            setTimeout(checkMatch, 700);
        }
    }
}
memoryGame();