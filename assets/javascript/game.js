//GLOBAL VARIABLES
//

// gem Variables
var gem = {
    bismuth:
    {
        name: "Bismuth",
        value: 0
    },   
    rose:
    {
        name: "Rose",
        value: 0
    },   
    opal:
    {
        name: "Opal",
        value: 0
    },  
    jade:
    {
        name: "Jade",
        value: 0
    }   
}

// Score variables

var currentScore = 0;
var targetScore = 0;

//Wins and Losses variables
var winCount = 0;
var lossCount = 0;

//ALL THE FUNCTIONS
//
var getRandom = function (min, max) {
    return Math.floor(Math.random() * ( max - min +1)) +min;
}

var startGame = function() {
    
    // Reset the current score
    currentScore = 0;
    
    // Set new Target Score (19-120)
    targetScore = getRandom (19, 120);

    // different values for each gem between 1-12
    gem.bismuth.value = getRandom (1, 12);
    gem.rose.value = getRandom (1, 12);
    gem.opal.value =  getRandom (1, 12);
    gem.jade.value = getRandom (1, 12);

    // Change HTML to reflect all changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    //restart the game
}

// FUNCTION THAT RESPONDS TO CLICKS

var addValues = function(gem) {
currentScore = currentScore + gem.value; 
//adding to card
$("#yourScore").html(currentScore);
checkWin();
}

//check if user won or lost and resets
var checkWin = function(){

    //check if current score is equal to target score or not
    if (currentScore > targetScore) {
        alert ("YOU LOST!");
        //adds to loss counter
        lossCount++;
        //change loss counter in html
        $("#lost").html(lossCount);
        //restart the game
        startGame();

    }
    else if (currentScore == targetScore){
        alert("YOU WONNNNNNN!"); 
        //adds to win counter
        winCount++;
        //change win count in HTML
        $("win").html(winCount);
        //restart the game
        startGame();

    }

}

//MAIN WHERE ALL THE THINGS GET CALLED and things function
//       

//starts the game for the first time
startGame();


$("#bismuth").click(function() {
    addValues(gem.bismuth);
});

$("#rose").click(function() {
    addValues(gem.rose);
});
$("#opal").click(function() {
    addValues(gem.opal);
});

$("#jade").click(function() {
    addValues(gem.jade);
});