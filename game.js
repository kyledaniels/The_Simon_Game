// Create an array to hold button colors
var buttonColors = ["red", "blue", "green", "yellow"];

//Create an array to hold color patterns
// Create an array to hold usersClicked patterns
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

//Add event listener to document for when
// buttons are pushed by user
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

// Select button and create a callback function
// to determine which button is being clicked.
$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");
  
    userClickedPattern.push(userChosenColor);
  
     console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
  });

//Created function to check user answer

  function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

//Create a new function called nextSequence
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  play(randomChosenColor);
 
}
function playSound(name) {
var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
