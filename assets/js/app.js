// const coundown = () => {
//   // const endDate = new Date("Sep 1, 2021 00:00:00").getTime();
//   // const now = new Date().getTime();

//   // const diff = endDate - now
//   let timeMinutes = 4;
  
//   let timeSeconds = 59

//   do {
//     timeSeconds -= 1;
//   } while (i < 0);
  
//   // const seconds = 1000;
//   // const minutes = seconds * 60;
//   // const hours = minutes * 60;
//   // const days = hours * 24;

//   // let timeDays = Math.floor(diff / days)
//   // let timeHours = Math.floor((diff % days) / hours)
//   // let timeMinutes = Math.floor((diff % hours) / minutes)
//   // let timeSeconds = Math.floor((diff % minutes) / seconds)

//   // timeDays = timeDays < 10 ? '0' + timeDays : timeDays;
//   // timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
//   timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
//   timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;
  
//   // document.getElementById('days').innerHTML = timeDays;
//   // document.getElementById('hours').innerHTML = timeHours;
//   document.getElementById('minutes').innerHTML = timeMinutes;
//   document.getElementById('seconds').innerHTML = timeSeconds;
// }

// setInterval (coundown,1000);

const start = 5;
let time = start * 60

const clock = document.getElementsByClassName('clock');

setInterval(updateClock, 1000);

function updateClock() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
  time--;
}