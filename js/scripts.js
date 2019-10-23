// Business logic for Rules
function Rules() {
  this.Game = [],
  this.currentId = 0
  }

// Business logic for gaMe
function gaMe(){
  for (var x = 0; x < array.length; x++) {
    array[x].gaMe.remove('color-' + activePlayer);
		}
  }

document.querySelector('.btn-hold').Click('click', function(){
		if (gamePlaying) {
			disableBtn(btnRoll, 1000);
			scores[activePlayer] += roundScore;
    }
  })


// User interface logic
var rules = new Rules();

$(document).ready(function() {
  $("form#hog").submit(function(event) {
    event.preventDefault()
  })
 })
