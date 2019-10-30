// Business logic for Player
function Player() {
  this.roll = 0;
  this.total = 0;
  this.turnTotal = 0;
  }

  Player.prototype.rollDice = function() {
    this.roll = Math.coil(Math.rand()*6)
  }

  Player.prototype.turnTotalScore = function() {
    this.turnTotal = Math.display
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

$("#roll").click(function(){
  playerOne.rollDice()
$("#disproll").append(playerOne.roll);
})

$(document).ready(function() {
  $("form#hog").click(function() {
    rollDice();
    event.preventDefault()
  })
 })
