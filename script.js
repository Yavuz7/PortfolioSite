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

  // Modal Info
  let modalTitle = document.querySelector(".modal-title-text");
  let modalMedia = document.querySelector(".modal-media");
  let modalText = document.querySelector(".modal-banner-text");
  let modalButton = document.querySelector(".modal-banner-button");
  let modalButtonLink = document.querySelector(".modal-banner-button-link");

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  icons.forEach((icon) => {
    icon.addEventListener("dblclick", modalHandler);
  });

  function modalHandler(evt) {
    // Get Classes Of Current Target
    classes = evt.currentTarget.classList;
    classes.forEach((className) => {
      //Go Through List to find the class that matches the id, usually the second in the list
      if (modalInfo.find((element) => element.id == className) != null) {
        //If the icon is a link, open the link, otherwise populate modal and display
        let data = modalInfo.find((element) => element.id == className);
        if (data.isLink == "true") {
          window.open(data["linkUrl"]);
        } else {
          // let modalTitle = document.querySelector(".modal-title-text");
          // let modalMedia = document.querySelector(".modal-media");
          // let modalText = document.querySelector(".modal-banner-text");
          // let modalButton = document.querySelector(".modal-banner-button");
          modalTitle.textContent = data["title"];
          modalMedia.textContent = data["media"];
          modalText.textContent = data["text"];
          modalButton.textContent = data["button"];
          modalButtonLink.href = data["buttonUrl"];
          modal.style.display = "block";
        }
      }
    });
    //Check Which class Matches the key in the Data Array

    //Check If Link Should Open a new tab and then do that
    // Set Data of Modal To Those Classes

    //Display The Final Modal
  }

  const modalInfo = [
    {
      id: "linkedin",
      isLink: "true",
      linkUrl: "https://www.linkedin.com/in/yavuz-yurtseven-399256213/",
    },
    {
      id: "github",
      isLink: "true",
      linkUrl: "https://github.com/Yavuz7",
    },
    {
      id: "aboutSite",
      isLink: "true",
      linkUrl: "https://github.com/Yavuz7/PortfolioSite/blob/main/README.md",
    },
    {
      id: "ufcFightSim",
      isLink: "false",
      title: "UFC Fight Simulator Project",
      media: "Display Video Here",
      text: "This is a group project I did in the senior year of my class!",
      button: "Github",
      buttonUrl: "https://github.com/Yavuz7/UFCFightSim",
    },
    {
      id: "aspireHigh",
      isLink: "false",
      title: "Aspire High Youth Development Internship",
      media: "Display Video Here",
      text: "This is the internship I'm currently working. The Website I've been working on isn't up yet.",
      button: "Website",
      buttonUrl: "https://aspirehighyouth.org/",
    },
    {
      id: "dotr",
      isLink: "false",
      title: "Yugioh DOTR Remake (Demo)",
      media: "Display Video Here",
      text: "This is a group project I did for my 3D Game Development class!",
      button: "Github",
      buttonUrl: "https://github.com/Yavuz7/VulkanProjectGF3D",
    },
    {
      id: "quake2",
      isLink: "false",
      title: "Quake 2 Boss Mod",
      media: "Display Video Here",
      text: "This is a project I did for my game mod class!",
      button: "Github",
      buttonUrl: "https://github.com/Yavuz7/UFCFightSim",
    },
  ];
});
