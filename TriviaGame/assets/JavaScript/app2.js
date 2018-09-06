console.log("app2.js");
var questions = [
        {question: "Which actor played James Bond in Goldeneye, Tomorrow Never Dies, The World Is Not Enough, and Die Another Day?",
        choice: ["Sean Connery","Daniel Craig","Roger Moore","Pierce Bronson"],
        answer: "Pierce Bronson"
    },
        {question: "Who is the most recent actor to play James Bond?",
        choice: ["Sean Connery","Daniel Craig","Roger Moore","Pierce Bronson"],
        answer: "Daniel Craig"
    },
    {question: "Who was the very first James Bond?",
    choice: ["Sean Connery","Daniel Craig","Roger Moore","Pierce Bronson"],
    answer: "Sean Connery"
},
        "What is James Bond signature car?",
        "Which Spy Organization does James Bond belong too",
        "Where is James Bond from?",
        "What game does James Bond play in Casino Royal?",
        "What is the name of the Terrorist organization in Quantum Solace?",
        "Who played James Bond the longest?",
        "Who wrote James Bond",
    ];
    function displayQuestion(questionNumber){
        $("#question").text(questions[questionNumber].question);
        $("#label1").text(questions[questionNumber].choice[0])
        $("#label2").text(questions[questionNumber].choice[1])
        $("#label3").text(questions[questionNumber].choice[2])
        $("#label4").text(questions[questionNumber].choice[3])
    }

   
    displayQuestion(0)
//start timer
//check question
//next question
//timer restarts
// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);

// function fiveSeconds() {
//     $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//     console.log("10 seconds left");
//   }

//   function tenSeconds() {
//     $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//     console.log("5 seconds left");
//   }

//   function timeUp() {
//     console.log("done");
//     $("#time-left").append("<h2>Time's Up!</h2>");
//     console.log("time is up");
//   }