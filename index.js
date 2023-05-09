let blackjack = false;
let isAlive = false;
let message = "";
let sum=0;
let cards=[];
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let userEl=document.getElementById("user-el");
// let sumEl=document.querySelector("sum-el");
function startGame() {
  
  let isAlive = true;
  let firstCard = randomNumber();
  let secondCard = randomNumber();
  console.log(firstCard);
  console.log(secondCard);
  cards = [firstCard, secondCard];


  sum = firstCard + secondCard;
  console.log(cards);
  renderGame();
}
let messageEl = document.getElementById("message-el");
function renderGame() {
    cardsEl.textContent = "cards: ";
    for(let i = 0; i < cards.length; i=i+1) {
      cardsEl.textContent += cards[i] + " ";}
  if (sum < 21) {
    message = "do you want new card?";
  } else if (sum === 21) {
    blackjack = true;
    message = "you've got blckjack";
  } else {
    isAlive = false;
    message = "you lost";
  }
 
  
  messageEl.textContent = message;
  sumEl.textContent = "sum:" + sum;
}
function newCard() {
  if (sum<22){
  
  console.log("new card");
  let nCard = randomNumber();
  sum += nCard;
  cards.push(nCard);
  renderGame();
  console.log(cards);
}
}
function randomNumber() {
  randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {
    return 10;
  } else {
    return randomCard;
  }
}
let user={
  name:"Peter",
  account:200,
  hiThere:function(){
alert("Hi,there,"+user.name);
  }
}

userEl.textContent=user.name+":$"+user.account;
user.hiThere();