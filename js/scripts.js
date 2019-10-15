// Business logic for Rules
function Rules() {
  this.Game = [],
  this.currentId = 0
  }

// Business logic for Game

// User interface logic
$(document).ready(function() {
  $("form#hog").submit(function(event) {
    event.preventDefault()
