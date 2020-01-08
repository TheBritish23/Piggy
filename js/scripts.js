// Business logic for Player
function Player() {
  this.roll = 0;
  this.total = 0;
  this.turnTotal = 0;
  this.fakescore = 0;
  }

  Player.prototype.rollDice = function() {
    this.roll = Math.ceil(6*Math.random())+1;
    this.turnTotal += this.roll;
  }

  Player.prototype.checkTurn = function() {
    if (this.roll === 1){
      this.result = 1;
      alert("Sorry, you rolled a 1! You stink!")
    }
    else if (this.turn === 25){
      this.result = 25;
    }
    else {
      this.turnTotal += this.turnTotal
      this.turnTotal += 25;
      this.fakescore = 0;
      this.fakescore += this.roll;
    }
  }

   Player.prototype.scoreTotal = function() {
     if (this.turnTotal >= 25) {
       alert("You won, sucka!");
   }
}
// Business logic for Game
Player.prototype.hold = function() {
 this.turnTotal += this.fakescore
 this.fakescore = 0;
 alert("your turn is over, pass the mouse before you get murdered!");
}

// User interface logic
$(document).ready(function(){
  $("form#hog").click(function(){
    $("#current-box").append("<p>rollDice</p>");
});

    var player = new Player()
      // $(".btn-roll1").click(function(){
      // $(".current-label").append(playerOne.roll);
      // event.preventDefault()

 //    var playerTwo = new Player()
 //      $(".btn-roll2").click(function(){
 //      $(".current-label").append(playerTwo.roll);
 //      event.preventDefault()
 //     })
 //   })
 // })

  $("#btn-roll").click(function(event){
    event.preventDefault();
    player.rollDice();
    $("#player-roll").text(player.roll);
    $("#turnTotal").text(player.turnTotal);
    console.log(player.turnTotal);
    // playerOne.rollone();
    // $(".player-score-0").text(playerOne.fakescore);
  })
  // $("button2#btn-roll2").click(function(event){
  //   playerTwo.roll = rollDice();
  //   $("rollDice2").text(playerTwo.roll);
  //   playerTwo.rollone();
  //   $("player-0-rolled-1").text(playerTwo.fakescore);
  // })

  $("#btn-hold").click(function(event){
    player.checkTurn();
    $("#player-hold").text(player.checkTurn);
    $("#player-score").empty();
    console.log(player.checkTurn);
  })

//   $("button2#btn-hold2").click(function(event){
//    playerTwo.hold();
//    $("player-score-0").text(playerTwo.total);
//    $("player-0-rolled-1").empty();
//    playerTwo.turnTotal();
//  })
  });
