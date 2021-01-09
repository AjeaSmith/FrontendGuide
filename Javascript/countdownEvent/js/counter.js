const days = document.querySelector("#days h1");
const hours = document.querySelector("#hours h1");
const minutes = document.querySelector("#minutes h1");
const seconds = document.querySelector("#seconds h1");
const counterTitle = document.querySelector(".counter_title");
// get date to count down from
const dateInterval = setInterval(() => {
  let countDownDate = new Date("December 25, 2021").getTime();
  let currentTime = Date.now();
  let timeDifference = countDownDate - currentTime;
  days.innerHTML = Math.floor(timeDifference / (1000 * 3600 * 24));
  hours.innerHTML = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.innerHTML = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  seconds.innerHTML = Math.floor((timeDifference % (1000 * 60)) / 1000);
  if (timeDifference <= 0) {
    clearInterval(dateInterval);
    counterTitle.innerHTML = "Merry Christmas!";
  }
}, 1000);
