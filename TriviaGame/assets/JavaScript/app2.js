var questions = [
    {
        question: "Which actor played James Bond in Goldeneye, Tomorrow Never Dies, The World Is Not Enough, and Die Another Day?",
        choice: ["Sean Connery", "Daniel Craig", "Roger Moore", "Pierce Bronson"],
        answer: "Pierce Bronson"
    },
    {
        question: "Who is the most recent actor to play James Bond?",
        choice: ["Sean Connery", "Daniel Craig", "Roger Moore", "Pierce Bronson"],
        answer: "Daniel Craig"
    },
    {
        question: "Who was the very first James Bond?",
        choice: ["Sean Connery", "Daniel Craig", "Roger Moore", "Pierce Bronson"],
        answer: "Sean Connery"
    },
    {
        question: "What is James Bond signature car?",
        choice: ["Honda", "Ferrai", "BMW", "Aston Martin"],
        answer: "Aston Martin"
    },

    {
        question: "Which Spy Organization does James Bond belong too",
        choice: ["MI6", "Mossad", "FSB", "CIA"],
        answer: "MI6"
    },
    {
        question: "Where is James Bond from?",
        choice: ["England", "United States", "South Africa", "Mars"],
        answer: "England"
    },
    {
        question: "What game does James Bond play in Casino Royal?",
        choice: ["Sean Connery", "Daniel Craig", "Roger Moore", "Pierce Bronson"],
        answer: "Daniel Craig"
    },
    // {question: "What is the name of the Terrorist organization in Quantum Solace?",
    // choice:[] 

    // {question: "Who played James Bond the longest?",
    // {question: "Who wrote James Bond",
];
console.log("app2.js");
var gameStarted = false;
var questionNumber = 0;
$("#start").on("click", function () {
    gameStarted = true;
    displayQuestion(questionNumber);
       
        
       


});

$("#next").on("click", function () {
    questionNumber++;
    displayQuestion(questionNumber);
       
        
       


});
////////////
function checkQuestion(questionNumber) {
    console.log("checking question" + questionNumber);
}
function displayQuestion(questionNumber) {
    $("#question").text(questions[questionNumber++].question);
    $("#label1").text(questions[questionNumber].choice[0])
    $("#label2").text(questions[questionNumber].choice[1])
    $("#label3").text(questions[questionNumber].choice[2])
    $("#label4").text(questions[questionNumber].choice[3])
    // $("#button").text(onclick[questionNumber].question)
}



    /////////////
// };function Question(text,choices,answer){
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;

// }
// Question.prototype.correctAnswer = function(choices){
//     return choices === this.answer
// };


//start timer
//check question
//next question
// //timer restarts

