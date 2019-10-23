// Business logic for Rules
function Rules() {
  this.Game = [],
  this.currentId = 0
  }

  Rules.prototype.newgaMe = function(gaMe) {
    gaMe.id = this.assignId();
    this.gaMe.push(gaMe);
  }

  Rules.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }

// Business logic for gaMe
function Tickets(rUles, dIce) {
  this.rUles = rUles;
  this.dIce = dIce;
}




// User interface logic
var rules = new Rules();

$(document).ready(function() {

  var player1;
  var player2;

  $("form#hog").submit(function(event) {
    event.preventDefault()
  })
 })
