
const CrystalCollector = function() {

  const numPages      = $(".page").length;
  var   currentPage   = 0;
  
  const scoreCrystals   = 4;
  var   crystalValues = new Array(scoreCryst);
  
  var numWins = 0, numLosses = 0;
  var targetSum, currentSum;

  var game;

$(document).ready(function() {
  game = new CrystalCollector();

  game.startNewGame();
});


$(".crystals").on("click", function() {
  game.collectCrystal($(".crystals").index(this));}


  function randomInteger(a, b) {
    return Math.floor((b - a + 1) * Math.random()) + a;
}

this.collectCrystal = function(index) {

    currentSum += crystalValues[index];

    displayCurrentSum();

    if (currentSum < targetSum) {
        return;



    } else if (currentSum === targetSum) {
        updateNumWins(1);

        $("#outputMessage").html("You Win!<br>To play again, click anywhere");
      
        
        this.startNewGame();



    } else {
        updateNumLosses(1);

        $("#outputMessage").html("You lose! <br>To keep trying, click anywhere.");
        $("#lightBox").css({
           
        });

        this.displayLightBox(true);
        
        this.startNewGame();
    }
}

  
  
  this.startNewGame = function() {
 
      targetSum  = 0;
      currentSum = 0;

      for (var i = 0; i < scoreCrystals; i++) {
          crystalValues[i] = randomInteger(1, 12);
          targetSum += randomInteger(1, 6) * crystalValues[i];
      }


          while (targetSum < 19 || targetSum > 120) {
          targetSum = 0;

          for (var i = 0; i < scoreCrystals; i++) {
              targetSum += randomInteger(1, 6) * crystalValues[i];
          }
      }


      displayCurrentPage();
      displayNumWins();
      displayNumLosses();
      displayTargetSum();
      displayCurrentSum();

      
  }

      
  function displayCurrentPage() {
      $(".page").css({"display": "none"});
      $(`.page:nth-of-type(${currentPage + 1})`).css({"display": "block"});
  }

  this.displayLightBox = function(lightBoxOn) {
      $("#lightBox_background, #lightBox").css({"display": (lightBoxOn ? "block" : "none")});
  }

  function displayNumWins() {
      $("#numWins").text(numWins);
  }

  function displayNumLosses() {
      $("#numLosses").text(numLosses);
  }

  function displayTargetSum() {
      $("#targetSum").text(targetSum);
  }

  function displayCurrentSum() {
      $("#currentSum").text(currentSum);
  }

    displayCurrentPage();
  }

  function updateNumWins(changeBy) {
      numWins += changeBy;
  }

  function updateNumLosses(changeBy) {
      numLosses += changeBy;
  }


