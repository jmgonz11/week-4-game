
//Get Game to generate random number to guess this should appear at the top of the screen so the player knows which number to match



$(document).ready(function(){

  var numRandom=Math.floor(Math.random()*102+19)
  
  // On the screen, display the number 

  $('#scoreToMatch').text(numRandom);
  
// Each Crystal needs its own random number drawn. 


  var crystal1= Math.floor(Math.random()*12+1)

  var crystal2= Math.floor(Math.random()*12+1)

  var crystal3= Math.floor(Math.random()*12+1)
  
  var crystal4= Math.floor(Math.random()*12+1)
  
// Game and player stats need their own variable 


  
var wins= 0;
var losses= 0;
var userTotal= 0; 
 
  

$('#wins').text(wins);
$('#losses').text(losses);

// When a crystal is clicked, there needs to be a number gussesed adding up to the total sum
//Need to figure out how to get the guesses to display on the screen- currently they are not. 

//white crystal

$('#white').click(function(){
  userTotal = userTotal + crystal1;
  console.log("New userTotal= " + userTotal);
  $('#totalScore').text(userTotal); 
        //Win & lose conditions


      if (userTotal == numRandom){
        winner();
      }
      else if (userTotal > numRandom){
        loser();
      }   
})

//silver crystal

$('#silver').click(function(){
  userTotal = userTotal + crystal2;
  console.log("New userTotal= " + userTotal);
  $('#totalScore').text(userTotal); 
      if (userTotal == numRandom){
        winner();
      }
      else if (userTotal > numRandom){
        loser();
      } 
})

// blue crystal 


$('#blue').click(function(){
  userTotal = userTotal + crystal3;
  console.log("New userTotal= " + userTotal);
  $('#totalScore').text(userTotal);

        if (userTotal == numRandom){
        winner();
      }
      else if (userTotal > numRandom){
        loser();
      } 
})

//purple crystal 


$('#purple').click(function(){
  userTotal = userTotal + crystal4;
  console.log("New userTotal= " + userTotal);
  $('#totalScore').text(userTotal); 
    
        if (userTotal == numRandom){
        winner();
      }
      else if ( userTotal > numRandom){
        loser();
      }
  });   
})


// Need function for when the game needs to reset to the beginning 
function gameReset(){
      numRandom=Math.floor(Math.random()*102+19);
      console.log(numRandom)
      $('#scoreToMatch').text(numRandom);
      crystal1= Math.floor(Math.random()*12+1);
      crystal2= Math.floor(Math.random()*12+1);
      crystal3= Math.floor(Math.random()*12+1);
      crystal4= Math.floor(Math.random()*12+1);
      userTotal= 0;
      $('#totalScore').text(userTotal);
      } 


// If a Player wins, there needs to be an alert and the game needs to reset 


function winner(){
alert("Yay! You Won!");
  wins++; 
  $('#wins').text(wins);
  gameReset();
}


//  If a player loses, the game needs to show a losing alert and then reset

function loser(){
alert ("You Lose!");
  losses++;
  $('#losses').text(losses);
}

