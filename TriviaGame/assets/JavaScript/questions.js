function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;

}
Question.prototype.correctAnswer = function(choices){
    return choices === this.answer
}

 var time = 0;
var lap = 1;
function reset() {

  time = 0;
  lap = 1;

  $("#display").text("00:00");
  $("#laps").text("");

}

function start() {
  intervalId = setInterval(count, 1000);
}

function stop() {

  console.log("stopping");
  clearInterval(intervalId);

}

function recordLap() {

  var converted = timeConverter(time);
  $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
  lap++;

}

function count() {

  time++;
  var converted = timeConverter(time);
  $("#display").text(converted);

}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}







setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function fiveSeconds() {
    $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
    console.log("10 seconds left");
  }

  function tenSeconds() {
    $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
    console.log("5 seconds left");
  }

  function timeUp() {
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
  }
