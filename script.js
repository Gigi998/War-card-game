let card1 = 0;
let card2 = 0;
let score1 = 0;
let score2 = 0;
let suits = ["hearts", "clubs", "diamonds", "spades"];
let suit1 = "";
let suit2 = "";

let card1El = document.getElementById("card1");
let card2El = document.getElementById("card2");
let score1El = document.querySelector("#score1");
let score2El = document.querySelector("#score2");
let winnerEl = document.getElementById("winner");

let game = true;

function newGame(){
    card1El.textContent = "Player1 card: " + "??";
    card2El.textContent = "Player2 card: " + "??";
    score1 = 0;
    score2 = 0;
    score1El.textContent = "Player 1 score: " + score1;
    score2El.textContent = "Player 2 score: " + score2;
    game = false;
}
    
function newRound(){
    if (game === false){
        num1 = randomNum();
        suit1 = randomSuits();
        num2 = randomNum();
        suit2 = randomSuits();
        card1 = num1 + " " + suit1;
        card2 = num2 + " " + suit2;
        card1El.textContent = "Player1 card: " + card1;
        card2El.textContent = "Player2 card: " + card2;
        if (card1 > card2){
            score1 += 1;
        }else if (card1 < card2){
            score2 +=1;
        }else if ( card1 == card2){
            if (suit1 == "spades" && suit2 != "spades"){
                score1 += 1;
            }else if (suit1 == "hearts" && (suit2 != "spades" || suits != "hearts")){
                score1 += 1;
            }else if (suit1 == "diamonds" && (suit2 != "spades" || suit2 != "hearts" || suit2 != "diamonds")){
                score1 +=1;   
            }else if (suit1 == "clubs" && suit2 != "clubs"){
                score2 +=1;
            }else if (suit1 == suit2){
                
            }
        }
        score1El.textContent = "Player 1 score: " + score1;
        score2El.textContent = "Player 2 score: " + score2;
        if (score1 >= 10){
            game = true;
            winnerEl.textContent = "Player 1 won";
        }else if (score2 >= 10){
            game = true;
            winnerEl.textContent = "Player 2 won";
        }
    }       
}   
function randomNum (){
    let number = Math.floor(Math.random() * 14) + 1;
    return number;
}

function randomSuits (){
    let i = Math.floor(Math.random() * 4);
    return suits[i];   
}
