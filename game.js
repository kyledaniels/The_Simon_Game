// Create an array to hold button colors
var buttonColours = ["red", "blue", "green", "yellow"];

//    Create an array to hold color patterns
var gamePattern = [];

//create a new function called nextSequence
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

}