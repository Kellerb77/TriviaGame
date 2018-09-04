//ADD TIMER- in quiz control
$(document).ready(function(){

    function populate(){
        if(quiz.isEnded()) {
            showScores();
        }
        //choices Struggling
        else{
            var element = document.getElementById("questions");
            element.innerHTML = quiz.getQuestionIndex().text;
            var choice = quiz.getQuestionIndex().choice;
    
        for(var i = 0; i< choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choice[i];
                guess("btn" + i, choice[i]);

            }
            showProgress();
        }
    };
    //show Guess
    function guess(id, guess){
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            populate();
        }

    };
    //Show Progress (1-10)which question
    function showProgress(){
        var currentQuestionNumber = quiz.questionIndex + 1;
        var element = document.getElementById("Progress");
        element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;


    }
    //score
    function showScore() {
        var gameOverHTML = "<h1>Result</h1>";
        gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        var element= document.getElementById("quiz");
        element.innerHTML= gameOverHTML;
    }
    //Show 10 questions individually
    var questions = [
        "Which actor played James Bond in Goldeneye, Tomorrow Never Dies, The World Is Not Enough, and Die Another Day?",
        "Who is the most recent actor to play James Bond?",
        "Who was the very first James Bond?",
        "What is James Bond signature car?",
        "Which Spy Organization does James Bond belong too",
        "Where is James Bond from?",
        "What game does James Bond play in Casino Royal?",
        "What is the name of the Terrorist organization in Quantum Solace?",
        "Who played James Bond the longest?",
        "Who wrote James Bond",
    ];
  
    populate();

});
