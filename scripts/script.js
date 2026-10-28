let clubName = "Gherst and Gerblins";
console.log("Welcome to " + clubName);

function sayHi() {
    console.log("Hi! Thanks for visiting.");
}

sayHi();

function sayGoodbye(){
    console.log("Goodbye!");
}

sayGoodbye();
sayGoodbye();

//day 2

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
    nextMeeting.textContent = "Our next meeting is Sunday, November 8 at 3 PM.";
}

nextButton.addEventListener("click", showNextMeeting);