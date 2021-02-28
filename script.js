const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const hours = document.querySelector("#hours");

//Target Countdown
const graduation = "1 April 2021";

//Countdown FUnction
function countdown() {
  const graduationDate = new Date(graduation);
  const currentDate = new Date();

  const totalSeconds = (graduationDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  console.log(days, hours, minutes, seconds);
}
//initial call
countdown();

setInterval(countdown, 1000);
