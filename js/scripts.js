// Business logic for Rules
function Rules() {
  this.Game = [],
  this.currentId = 0
  }

// Business logic for gaMe
function gaMe(){
  var icons = document.querySelector('x');
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

      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

// User interface logic
$(document).ready(function() {
  $("form#hog").submit(function(event) {
    event.preventDefault()
  })
})
