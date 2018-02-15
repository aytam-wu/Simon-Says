var simonSaysArray = [];
var userInput = [];
var round = 0;
var currentRound = 0;
var score = 0;
var sequence = 0;

// var circle1 = document.querySelector('#circle1').addEventListener('click', function () {
//     document.querySelector('#circle1').style.opacity = '0.5';
//     window.setTimeout(function(){
//         document.querySelector('#circle1').style.opacity = '1'
//     }, 300)
//     userInput.push(1);
//     console.log(userInput)
//     console.log(simonSays)
//     for (var i = 0; i < userInput.length; i++) {
//         if(userInput[i] !== simonSays[i]) {
//             alert('Sorry, please play again.');
//             return;
//         }
//     };
// })

// var circle2 = document.querySelector('#circle2').addEventListener('click', function () {
//     document.querySelector('#circle2').style.opacity = '0.5';
//     window.setTimeout(function(){
//         document.querySelector('#circle2').style.opacity = '1'
//     }, 300)
//     userInput.push(2);
//     console.log(userInput)
//     console.log(simonSays)
//     for (var i = 0; i < userInput.length; i++) {
//         if(userInput[i] !== simonSays[i]) {
//             alert('Sorry, please play again.');
//             return;
//         }
//     };
// })

// var circle3 = document.querySelector('#circle3').addEventListener('click', function () {
//     document.querySelector('#circle3').style.opacity = '0.5';
//     window.setTimeout(function(){
//         document.querySelector('#circle3').style.opacity = '1'
//     }, 300)
//     userInput.push(3);
//     console.log(userInput)
//     console.log(simonSays)
//     for (var i = 0; i < userInput.length; i++) {
//         if(userInput[i] !== simonSays[i]) {
//             alert('Sorry, please play again.');
//             return;
//         }
//     };
// })

// var circle4 = document.querySelector('#circle4').addEventListener('click', function () {
//     document.querySelector('#circle4').style.opacity = '0.5';
//     window.setTimeout(function(){
//         document.querySelector('#circle4').style.opacity = '1'
//     }, 300)
//     userInput.push(4);
//     console.log(userInput)
//     console.log(simonSays)
//     for (var i = 0; i < userInput.length; i++) {
//         if(userInput[i] !== simonSays[i]) {
//             alert('Sorry, please play again.');
//             return;
//         }
//     };
// })

// // variables to create mulitple sequences
// var circleBtnOne = circle1;

// var circleBtnTwo = circle2;

// var circleBtnThree = circle3;

// var circleBtnFour = circle4;

// // start sequence
var start = document.getElementById('start').addEventListener('click', function () {
    // simonSays.push(Math.floor(Math.random()*4)+1);   // equals to whole numbers < 4
    // for(var i = 1; i <= simonSays.length; i++) {
    //     var circleId = 'circle' + simonSays[i - 1]
    //     window.setTimeout(function(){               // "lights"
    //         document.getElementById(circleId).style.opacity = '.5'
    //     }, 300)
    //     window.setTimeout(function(){
    //         document.getElementById(circleId).style.opacity = '1'
    //     }, 600)
    //     nextRound();
    // };
    roundStart();
});

// // quit button; resets arrays
// var quit = document.getElementById('quit').addEventListener('click', function () {
//     simonSays = [];
//     userInput = [];
//     alert('You have restarted your game.\nPlease click "Start" to play again!');
//     console.clear();
// })

// // users' action
// var userAnswer = function () {
//     for(var i = 0; i < userInput.length; i++) {     // checks the user's answer; if incorrect user loses
//         if (userInput[i] !== simonSays[i]){
//             console.log('Sorry, you lose.');
//             return;
//         }
//     }
//     console.log('Congratulations, you win!');    // breaks out the for loop; prints winner.
// }

// // running different sequences
// var nextRound = function (i) {
//     for(var i = 0; i < userInput.length; i++){
//         if(userInput === simonSays){
//             simonSays.push(Math.floor(Math.random()*4)+1);
//             sequence ++;
//     }
// }

var roundStart = function() {
    var circles = document.getElementsByClassName('button');

    if(round < 1){
        for(var i = 0; i < circles.length; i++){
            circles[i].addEventListener('click', function(){
                var circleId = this.getAttribute('id');
                userInput.push(parseInt(circleId.charAt(circleId.length - 1)));
                roundStart();
            });
        }
    }

    if(round == 0){
        simonSaysArray.push(Math.floor(Math.random()*4)+1);
        simonSays(simonSaysArray);
        round++;
    }

    if(userInput.length === simonSaysArray.length){
        for(var i = 0; i < userInput.length; i++){
            if(JSON.stringify(userInput) === JSON.stringify(simonSaysArray)){
                userInput = [];
                simonSaysArray.push(Math.floor(Math.random()*4)+1);
                simonSays(simonSaysArray);
                round++;
                roundStart();
                break;
            }
    
            if(userInput[i] != simonSaysArray[i]){
                userInput = [];
                alert('You lose')
                break;
            }
        }
    }
}

var simonSays = function(simonSaysArray) {
    var x = 0
    var flashColor = setInterval(
        function(){
            // var circleElement = document.getElementById('circle' + simonSaysArray[x])
            // circleElement.style.display = 'none';
            // // var opacity = 1;
            // // var opacityInterval = setInterval(function(){
            // //     circleElement.style.opacity = opacity
            // //     if(opacity <= 0.1){
            // //         clearInterval(opacityInterval)
            // //         circleElement.style.opacity = 1
            // //     }
            // //     opacity -= opacity * 0.1
            // // }, x * 100)
            $('#circle' + simonSaysArray[x]).fadeTo('fast', 0).fadeTo('fast', 1);

            x++

            if(x >= simonSaysArray.length){
                clearInterval(flashColor)
            }
        }, 1000
    )
}

// tracking score 
// highest score