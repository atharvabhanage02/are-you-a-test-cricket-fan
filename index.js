
var readlineSync = require('readline-sync');
console.log("Cricket Quiz");
console.log("**************************************");

console.log("Lets Play Noq!!");
console.log("");
var user = readlineSync.question("What is your name ? \n");
console.log("");
var highScore = {
  name:"Atharva",
  score:5
}
questionOne = {
  question: "This bowler became only the second man to take ten wickets in an innings?",
  answer: "Anil Kumble"
}

questionTwo = {
  question: "Who has most hundreds in Test Cricket?",
  answer: "Sachin Tendulkar"
}
questionThree = {
  question: "Who has most wickets in Test Cricket?",
  answer: "Muttiah Muralitharan"
}
questionFour = {
  question: "Who won the First ever World Cup?",
  answer: "West Indies"
}
questionFive = {
  question: "Who has most hundreds in a single World Cup?",
  answer: "Rohit Sharma"
}
var score = 0;
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i = 0;i<questions.length;i++){
  var userans = readlineSync.question(questions[i].question);
  if(userans.toUpperCase() == questions[i].answer.toUpperCase()){
    console.log("You are right!!");
    console.log("");
    score++;
    
  }else{
    console.log("Sorry ,You are wrong !!!");
    console.log("");
  }
}
console.log("**************************************");
console.log(user +" your score is "+ score);
console.log("**************************************");
console.log("Highest Scorer is ",highScore.name)
