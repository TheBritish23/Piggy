// Business logic for Player
function Player() {
  this.roll = 0;
  this.total = 0;
  this.turnTotal = 0;
  this.playername;
  this.fakescore = 0;
  }

  Player.prototype.rollDice = function() {
    this.roll = Math.ceil(Math.random()*6)
    this.turnTotal += this.roll;
    console.log(this.roll, this.turnTotal)
  }

  Player.prototype.checkTurn = function() {
    if (this.roll === 1){
      result = 1;
    }
    else if (this.turn === 25){
      result = 25;
    }
    else {
      this.turnTotal += this.turnTotal
      this.turnTotal += 25;
      this.fakescore = 0;
      this.fakescore += this.roll;
      alert("Sorry " + this.playername + ", you rolled a 1! You stink!")
    }
  }

   Player.prototype.scoreTotal = function() {
     if (this.turnTotal >= 25) {
       alert(this.playerName + " You won, sucka!");
   }

  // Player.prototype.turnTotalScore = function() {
  //   this.turnTotal = Math.display
  // }

// Business logic for Game
// function Game(Player, Roll) {
//   this.Player = Player;
//   this.Roll = Roll;
// }
//
//   Game.prototype.playerOne = function() {
//     this.Player =
//   }
//
//   Game.prototype.Roll = function() {
//     console.log(this.Player, this.Roll);
//   }





// User interface logic
// var rollDice = function(){
//   letRoll = Math.ceil(Math.rand()*6);
//   console.log(roll);
// }

$(document).ready(function() {
  var playerOne = new Player()
    $(".btn-roll").click(function(){
      playerOne.rollDice()
    $("#disproll").append(playerOne.roll);
    event.preventDefault()
   })
  })
