var simonSaysArray = [];
var userInput = [];
var currentRound = 0;
var score = 0;
var sequence = 0;

// start sequence button
var start = document.getElementById('start').addEventListener('click', function () {
    roundStart();
});

// starting sequence
var roundStart = function() {
    var circles = document.getElementsByClassName('button');
    if(score < 1){
        for(var i = 0; i < circles.length; i++){
            circles[i].addEventListener('click', function(){
                var circleId = this.getAttribute('id'); // this circle
                userInput.push(parseInt(circleId.charAt(circleId.length - 1))); // grabbing last user input's circle array
                roundStart(); // running program again
            });
        }
    }

// scoreboard
    if(score === 0){
        simonSaysArray.push(Math.floor(Math.random()*4)+1);
        simonSays(simonSaysArray); // flashing circles
        score++; // score increments
    }
// checking userInput and simonSaysArray
    if(userInput.length === simonSaysArray.length){
        for(var i = 0; i < userInput.length; i++){
            if(JSON.stringify(userInput) === JSON.stringify(simonSaysArray)){  // array becomes a string
                userInput = [];
                simonSaysArray.push(Math.floor(Math.random()*4)+1);
                simonSays(simonSaysArray); // simonSaysArray takes the array and flashs circles
                score++;
                roundStart(); // runs program again
                break;
            }
            // checking userInput and simonSaysArray if they do not match up
            if(userInput[i] !== simonSaysArray[i]){
                userInput = [];
                simonSays = [];
                score = 0;
                alert('You lose')
                break;
            }
        }
    }
}
// setting interval
var simonSays = function(simonSaysArray) {
    var x = 0
    var flashColor = setInterval( // flashing circles
        function(){
            $('#circle' + simonSaysArray[x]).fadeTo('fast', 0).fadeTo('fast', 1);
            x++;
            if(x >= simonSaysArray.length){
                clearInterval(flashColor)
            }
        }, 1000
    )
}
