var simonSays = []
var userInput = []
var round = 0

// start sequence
var start = document.getElementById('start').addEventListener('click', function () {
    simonSays.push(Math.floor(Math.random()*4)+1)   // equals to whole numbers < 4
    for(var i = 1; i <= simonSays.length; i++) {
        var circleId = 'circle' + simonSays[i - 1]
        window.setTimeout(function(){               // "lights"
            window.setTimeout(function(){
                document.getElementById(circleId).style.opacity = '1'
            }, i * 500)
            document.getElementById(circleId).style.opacity = '.5'
        }, i * 500)
    }
})

// quit button; resets arrays
var quit = document.getElementById('quit').addEventListener('click', function () {
    simonSays = []
    userInput = []
})

// users' action
var userAnswer = function () {
    for(var i = 0; i < userInput.length; i++) {     // checks the user's answer; if incorrect user loses
        if (userInput[i] != simonSays[i]){
            console.log('Sorry, you lose.')
            return;
        }
    }
    console.log('Congratulations, you win!')    // breaks out the for loop; prints winner.
}

var circleBtnOne = document.querySelector('#circle1').addEventListener('click', function () {       // function for circle1 from user
    document.querySelector('#circle1').style.opacity = '0.5'
    userInput.push(1);
    if(userInput.length === simonSays.length) {
        for(var i = 0; i < userInput.length; i++) {
            if (userInput[i] != simonSays[i]) {
                console.log('Sorry, please play again.')
                return;    
            }
        }
        console.log('Congratulations, you win!')
    }
    
})