// Create an array to hold button colors
var buttonColours = ["red", "blue", "green", "yellow"];

//Create an array to hold color patterns
// Create an array to hold usersClicked patterns
var gamePattern = [];
var userClickedPattern = [];

// Select button and create a callback function
// to determine which button is being clicked.
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour);
  
    //console.log(userClickedPattern);
  
  });

//Create a new function called nextSequence
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

}

$("button").randomChosenColor