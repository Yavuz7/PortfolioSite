// Code Derived From : https://stackoverflow.com/questions/6787374/how-to-display-system-time

window.addEventListener("DOMContentLoaded", () => {
  let timer = document.querySelector("footer-clock");
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  updateTime();

  function updateTime() {
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let writeup = hours + ":" + minutes + " ";
    if (hours > 11) {
      writeup += "am";
    } else {
      writeup += "pm";
    }
    setTimeout("updateTime()", 59000);
    timer.innerHTML = writeup;
  }
});
