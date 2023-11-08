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

  let modal = document.querySelector(".modal");
  let closeButton = document.querySelector(".modal-title-button");
  let icons = document.querySelectorAll(".desktop-icon");

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  icons.forEach((icon) => {
    icon.addEventListener("dblclick", populateModal);
  });

  function populateModal(evt) {
    modal.style.display = "block";
    console.log(evt.currentTarget);
    // Get Classes Of Current Target
    //Check Which class Matches the key in the Data Array
    // Set Data of Modal To Those Classes
  }
});
