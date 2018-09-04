function Quiz(questions){
    this.score =0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer){
    this.questionIndex++;
    if(this.getQuestionIndex().correctAnswer(answer))
    this.score++;
}
//TIMER
var audio = new Audio("raven.mp3");


//HELP
setTimeout(fiveSeconds, 1000 * 130);
setTimeout(tenSeconds, 1000 * 140);
setTimeout(timeUp, 1000 * 150);

//130?
function oneHundredThirtySeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}
//? would it be 140?
function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");
};