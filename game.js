// Create an array to hold button colors
var buttonColours = ["red", "blue", "green", "yellow"];

//Create an array to hold color patterns
// Create an array to hold usersClicked patterns
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// Select button and create a callback function
// to determine which button is being clicked.
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour);
  
    console.log(userClickedPattern);
  
  });

//Create a new function called nextSequence
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

