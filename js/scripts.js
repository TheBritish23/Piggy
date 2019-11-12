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
      this.result = 1;
    }
    else if (this.turn === 25){
      this.result = 25;
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
       alert(this.playername + " You won, sucka!");
   }

  // Player.prototype.turnTotalScore = function() {
  //   this.turnTotal = Math.display
  // }

// Business logic for Game
Player.prototype.hold = function() {
 this.turnTotal += this.fakescore
 this.fakescore = 0;
 alert(this.playername + ", your turn is over, pass the mouse before you get murdered!");
}

// User interface logic
$(document).ready(function(){
  var playerOne = new Player()
    $("#btn-roll1").click(function(){

    $("#disproll").append(playerOne.roll);
    event.preventDefault()
    var playerTwo = new Player()

      $("#btn-roll2").click(function(){
      $("#disproll").append(playerTwo.roll);
      event.preventDefault()
      })
     })
    })

  $("button1#btn-roll1").click(function(event){
    player1.roll = throwdice();
    $("#rollDice").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.fakescore);
  });

  $("button2#btn-roll2").click(function(event){
    player2.roll = throwdice();
    $("#rollDice2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.fakescore);
  });

  $("button2#btn-hold1").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.total);
    $("#round-total-1").empty();
    player1.scoreTotal();
  });

  $("button2#btn-hold2").click(function(event){
   player2.hold();
   $("#total-score-2").text(player2.totalscore);
   $("#round-total-2").empty();
   player2.scoreTotal();
 });
};
