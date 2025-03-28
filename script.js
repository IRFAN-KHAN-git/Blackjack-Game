const messageEl= document.getElementById("message-el");
const sumel =document.getElementById("sum");
const cardel =document.getElementById("Cards");
const playerEl = document.getElementById("player-el")
const game = document.getElementById("game");

let arr= []
let sum =0
let isAlive=false;
let hasBlackjack=false;
let message=""

let player ={
    playerName:"Irfan",
    playerChip:200
}

playerEl.textContent = player.playerName + ": $"+player.playerChip


 function getRandomNumber(){
    let num=(Math.random()*13)+1;
    let no= Math.floor(num);
    if(no===1)return 11;
    else if(no>10)return 10;
    else return no;
 }


function startGame(){
    sum=0;
    cardel.textContent="Cards: "
     sumel.textContent = "Sum: "
    let firstCard= getRandomNumber()
    let secondCard=getRandomNumber()
   arr =[firstCard,secondCard]
    sum +=firstCard+secondCard
    isAlive=true
    start()
   
}

function start(){
    
    cardel.textContent="Cards: "
    
    for(let i=0;i<arr.length;i++){
        cardel.textContent += arr[i] + " ";
    }
    sumel.textContent = "Sum: "+sum;
    if(sum<=20){
        message="Do you want to draw a new card? 🙂";
        isAlive=true;
    }
    else if(sum===21){
        message="Woohoo! You've got Blackjack! 🤑";
        hasBlackjack=true;
        player.playerChip +=10
        chips()
            
    }
    else if(sum>21){
        message="You're out of the game! 😒";
        isAlive=false;
        player.playerChip -=10
        chips()
    }

    messageEl.textContent=message;

}
function newCard(){
    if(isAlive===true ){
    let card=getRandomNumber();
    sum+=card;
    arr.push(card);
    start();
    }
}

function chips(){
    playerEl.textContent = player.playerName + ": $"+player.playerChip
    if(player.playerChip===0){
        document.querySelector("h1").textContent="GAME OVER"
        game.textContent=" "
    }
}