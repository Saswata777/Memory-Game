const cardArray = [
    {
        name : 'fries',
        img : 'Images/fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'Images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'Images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'Images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'Images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'Images/pizza.png'
    },
    {
        name : 'fries',
        img : 'Images/fries.png'
    },
    {
        name : 'cheeseburger',
        img : 'Images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img : 'Images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'Images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'Images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'Images/pizza.png'
    }
    
]

cardArray.sort(()=> 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');  
console.log(gridDisplay);    //--->  <div id="grid"></div>

let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];
const resultDisplay = document.querySelector('#result')


function createBoard()
{
    for (let i = 0; i < cardArray.length; i++) {
        var card =  document.createElement("img");
        card.setAttribute('src', 'Images/blank.png');
        console.log(card, i);
        card.setAttribute('set-Id',i);
        card.addEventListener('click', flip);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0]; 
    const optionTwoId = cardChosenIds[1]; 

    console.log("check for match!!!");
    if(optionOneId=== optionTwoId){
        alert("You have clicked same card");
        cards[optionOneId].setAttribute('src','Images/blank.png');
        cards[optionTwoId].setAttribute('src','Images/blank.png');
    }


    if (cardChosen[0] === cardChosen[1]) {
        alert("You found a match");
        cards[optionOneId].setAttribute('src','Images/white.png');
        cards[optionTwoId].setAttribute('src','Images/white.png');
        cards[optionOneId].removeEventListener('click', flip);
        cards[optionTwoId].removeEventListener('click', flip);
        cardsWon.push(cardChosen);
    }
    else{
        alert("Sorry try again :(");
        cards[optionOneId].setAttribute('src','Images/blank.png');
        cards[optionTwoId].setAttribute('src','Images/blank.png');
    }
    cardChosen = [];
    cardChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length; 

    if(cardsWon.length == (cardArray.length)/2){
        resultDisplay.innerHTML = "Congratulatios you found them all";
    }


}

function flip(){
    const cardId = this.getAttribute('set-Id');
    console.log(cardArray);
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    console.log("click", cardId);
    console.log(cardChosen);
    console.log(cardChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMatch,500);
    }
}

