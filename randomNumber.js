let randomNumber;
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const counter = document.getElementById("counter");
counter.style.color = "rgb(182, 182, 182)";
randomNumber = getRandomNumber(1000, 1000000);
document.write(randomNumber);
