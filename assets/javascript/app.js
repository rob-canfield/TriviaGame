var answered = false;
var unanswered = 0
var correct = 0
var incorrect = 0
var intervalId;
var seconds = 5
var index = 0
var trivia;

var ootTrivia = [
    {
        question : "Where was Link born?",
        answers : ["Kokiri Forest", "Hyrule", "Gerudu Valley", "Kakariko Village"],
        correct : 1
    }, 
    {
        question : "Where did Link learn to play the 'Song of Storms?'",
        answers : ["Lake Hyrule", "Death Mountain", "Inside the Windmill", "Desert Wasteland"],
        correct : 2
    }, 
    {
        question : "Which year was Ocarina of Time released?",
        answers : ["1998", "1992", "2000", "1995"],
        correct : 0
    }, 
    {
        question : "How many years did Link remain in the Spiritual Realm after drawing the Master Sword?",
        answers : ["fourteen", "seven", "four", "three"],
        correct : 1
    }, 
    {
        question : "After Link found and killed all 100 Gold Skultas, what was his reward?",
        answers : ["Giant's Wallet", "Golden Scale", "200 rupees", "Golden Gauntlets"],
        correct : 2
    }, 
    {
        question : "What special weapon does Link need to use to defeat Ganon at the end of the game?",
        answers : ["Arrows of Light", "Goron Hammer", "Bombshoes", "Faore's Wind"],
        correct : 0
    }, 
    {
        question : "What gift does Princess Zelda give to Link when they first meet?",
        answers : ["The Ocarina of Time", "a hand written letter", "Zelda's Lullaby", "a new hat"],
        correct : 1
    }, 
    {
        question : "Which number installment is Ocarina of Time in The Legend of Zelda Series?",
        answers : ["first", "second", "fifth", "fourth"],
        correct : 2
    }, 
    {
        question : "Which TV series was Ocarina of Time inspired by?",
        answers : ["Twin Peaks", "Buffy the Vampire Slayer", "On the Air", "The X-Files"],
        correct : 0
    }, 
    {
        question : "What was the name of the Graveyard keeper?",
        answers : ["Milo", "Ingo", "Grog", "Dampé"],
        correct : 3
    }
]

function displayQuestion() {

    $("#results").html("");

    //displays each question and eaach answer selection in browser
    $("#question").html(ootTrivia[index].question);
    $("#choice1").html(ootTrivia[index].answers[0]);
    $("#choice2").html(ootTrivia[index].answers[1]);
    $("#choice3").html(ootTrivia[index].answers[2]);
    $("#choice4").html(ootTrivia[index].answers[3]);

    commence();

    //assigns attribute to answer selections, labeling all of them witht he correct answer
    var answer = ootTrivia[index].answers[ootTrivia[index].correct];
    $(".answer").attr("data-correct", answer);
}

function displayEndResults() {

    //removes trivia game and shows end of game results
    trivia = $("#trivia").detach();

    $("#results").html("<h1>CORRECT: " + correct + "</h1><h1>INCORRECT: " + incorrect + "</h1>");
    $("#results").append('<img src="https://media0.giphy.com/media/TRtXbqJpUnFPq/giphy.gif?cid=790b761180ccc98235cc61ad0b0d03f84b7b004a6b304ded&rid=giphy.gif" style="width: 50%">')
    $("#results").append('<button>Try again?</button>').attr('id', "try-again")

  
}

function commence() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    seconds--;
    $("#time-remaining").html("<h2>Time: " + seconds + "</h2>");
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

function userCorrect (){
    correct++;
}

function userIncorrect (){
    incorrect++;
}

displayQuestion();



$(".answer").on('click', function(){
    
    var answerSelected = $(this).text();
    console.log(answerSelected);

    var correctAnswer = $(this).attr('data-correct');
    console.log(correctAnswer);

    
    if (answerSelected === correctAnswer){
        userCorrect();
    } else {
        userIncorrect();
    }

    

    if (index < 9){
        incrementGame();
    } else {

        displayEndResults();


        $("#try-again").on('click', function (){
            correct = 0;
            incorrect = 0;
            index = 0;
            displayQuestion();
            $("#results").html("");
            trivia.append("body");
        })
       
    }


})







  

