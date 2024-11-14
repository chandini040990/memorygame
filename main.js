const cards =
    document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');
let feedbk = document.getElementsByClassName('feedback');

//input the fruits cards as array of object
const imagesLinkArray = [
    {
        id: 1,
        image: src = "./images/orange.png",
        newAlt: "orange"
    },
    {
        id: 2,
        image: src = "./images/apple.png",
        newAlt: "apple"
    },
    {
        id: 3,
        image: src = "./images/grapes.png",
        newAlt: "grapes"
    },
    {
        id: 4,
        image: src = "./images/banana.png",
        newAlt: "banana"
    },
    {
        id: 5,
        image: src = "./images/apple.png",
        newAlt: "apple"
    },
    {
        id: 6,
        image: src = "./images/banana.png",
        newAlt: "banana"
    },
    {
        id: 7,
        image: src = "./images/grapes.png",
        newAlt: "grapes"
    },
    {
        id: 8,
        image: src = "./images/watermelon.png",
        newAlt: "watermelon"
    },
    {
        id: 9,
        image: src = "./images/strawberry.png",
        newAlt: "strawberry"
    },
    {
        id: 10,
        image: src = "./images/watermelon.png",
        newAlt: "watermelon"
    },
    {
        id: 11,
        image: src = "./images/orange.png",
        newAlt: "orange"
    },
    {
        id: 12,
        image: src = "./images/strawberry.png",
        newAlt: "strawberry"
    }
]

// function to restart the game
const restartGame = () => {
    document.getElementById("feedback").innerHTML = "";

    let toggledCard =
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el, index) => {
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    })
}
restart.addEventListener('click', restartGame);

//checking for the last clicked and current 
//clicked cards and applying changes accordingly
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.card-image').src;
        let previousImgSrc =
            toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
        if (thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
        }
        else {
            toggledCardsArray.length = 0;
            move++;
            winCount++;
        }
        movesDisplay.innerText = `Moves: ${move}`;
        if (winCount === 6) {
            setTimeout(() => {
                document.getElementById("feedback").innerHTML = `
             <div>Game Over!!! Congratulations!!! You won the game in ${move} moves
             </div>`;
            }, 300)
        }
    })
}