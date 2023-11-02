// Code Derived From : https://stackoverflow.com/questions/6787374/how-to-display-system-time

document.addEventListener("DOMContentLoaded", () => {
  let timer = document.querySelector(".footer-clock");
  let oldTime;

  function updateTime() {
    let currentTime = new Date();
    let minutes = currentTime.getMinutes();

    if (!oldTime || minutes > oldTime || minutes === 0) {
      let hours = currentTime.getHours();

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      let writeup = (hours > 12 ? hours - 12 : hours) + ":" + minutes + " ";

      if (hours > 11) {
        writeup += "pm";
      } else {
        writeup += "am";
      }

      oldTime = currentTime.getMinutes();
      timer.innerHTML = writeup;
    }
    setTimeout(updateTime, 2000);
  }
  updateTime();
});
