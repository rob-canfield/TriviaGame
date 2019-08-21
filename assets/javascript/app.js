




var answered = false;
var unanswered = 0
var correct = 0
var incorrect = 0
var intervalId;
var seconds = 16
var index = 0

var ootTrivia = [
    {
        question : "Where was Link born?",
        answers : ["Kokiri Forest", "Hyrule", "Gerudu Valley", "Kakariko Village"],
        correct : 2
    }, 
    {
        question : "Where did Link learn to play the 'Song of Storms?'",
        answers : ["Lake Hyrule", "Death Mountain", "Inside the Windmill", "Desert Wasteland"],
        correct : 3
    }, 
    {
        question : "Which year was Ocarina of Time released?",
        answers : ["1998", "1992", "2000", "1995"],
        correct : 1
    }, 
    {
        question : "How many years did Link remain in the Spiritual Realm after drawing the Master Sword?",
        answers : ["fourteen", "seven", "four", "three"],
        correct : 2
    }, 
    {
        question : "After Link found and killed all 100 Gold Skultas, what was his reward?",
        answers : ["Giant's Wallet", "Golden Scale", "200 rupees", "Golden Gauntlets"],
        correct : 3
    }, 
    {
        question : "What special weapon does Link need to use to defeat Ganon at the end of the game?",
        answers : ["Arrows of Light", "Goron Hammer", "Bombshoes", "Faore's Wind"],
        correct : 1
    }, 
    {
        question : "What gift does Princess Zelda give to Link when they first meet?",
        answers : ["The Ocarina of Time", "a hand written letter", "Zelda's Lullaby", "a new hat"],
        correct : 2
    }, 
    {
        question : "Which number installment is Ocarina of Time in The Legend of Zelda Series?",
        answers : ["first", "second", "fifth", "fourth"],
        correct : 3
    }, 
    {
        question : "Which TV series was Ocarina of Time inspired by?",
        answers : ["Twin Peaks", "Buffy the Vampire Slayer", "On the Air", "The X-Files"],
        correct : 1
    }, 
    {
        question : "What was the name of the Graveyard keeper?",
        answers : ["Milo", "Ingo", "Grog", "Dampé"],
        correct : 4
    }
]



function displayQuestion() {
$("#question").html(ootTrivia[index].question);
$("#choice1").html(ootTrivia[index].answers[0]);
$("#choice2").html(ootTrivia[index].answers[1]);
$("#choice3").html(ootTrivia[index].answers[2]);
$("#choice4").html(ootTrivia[index].answers[3]);
commence();

var answerCorrect = ootTrivia[index].answers[ootTrivia[index].correct];
$(".answer").attr("data-correct", answerCorrect);
}

function commence() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $("#time-remaining").html("<h2>Time remaining: " + seconds + "</h2>");
}

function stop() {
    clearInterval(intervalId);
}

function incrementGame() {
    index ++;
    seconds = 16;
    stop();
    displayQuestion();
}

displayQuestion();


//user clicks one choice

$(".answer").on('click', function(){
    
    var answerSelected = $(this).text();
    console.log(answerSelected);

    var correctAnswer = $(this).attr('data-correct');
    console.log(correctAnswer);

 if (answerSelected === correctAnswer){
     correct++;
     console.log("correct: " + correct);


 } else {
     incorrect++;
     console.log(incorrect);
 }
    incrementGame();

    
})

    // if answer is correct, stop timer, display "correct" on new timer 5 seconds, proceed to nect question

    //if answer is incorrect, stop timer, display "incorrect" and the correct answer on new timer 5 seconds, proceed to nect question

    //if time runs out, display "time's up" on new timer 5 seconds, proceed to nect question



