// Business logic for Player
function Player() {
  this.roll = 0;
  this.total = 0;
  this.turnTotal = 0;
  }

  Player.prototype.rollDice = function() {
    this.roll = Math.coil(Math.rand()*6)
  }

// Business logic for gaMe
function gaMe(Player, Roll) {
  this.Player = Player;
  this.Roll = Roll;
}







// User interface logic
var rollDice = function(){
  letRoll = Math.ceil(Math.rand()*6);
  console.log(roll);
}

$("#Roll").click(function(){
  playerOne.rollDice()
$("#dispRoll").append(playerOne.roll);
})

$(document).ready(function() {
  $("form#hog").click(function() {
    rollDice();
    event.preventDefault()
  })
 })
