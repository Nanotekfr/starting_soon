const start = 5;
let time = start * 60

const clock = document.getElementsByClassName('clock');

setInterval(updateClock, 1000);

function updateClock() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  if (minutes < 0) {
    minutes = 0;
    seconds = 0;
  }
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
  time--;
}