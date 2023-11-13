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
          // Populate Modal With Information
          modalTitle.textContent = data["title"];
          modalMedia.innerHTML = data["media"];
          modalText.innerHTML = data["text"];
          modalButton.textContent = data["button"];
          modalButtonLink.href = data["buttonUrl"];
          modal.style.display = "block";
        }
      }
    });
  }
  // Information For Modal To Grab
  // If isLink is true, a linkUrl needs to be provided to link to
  // Otherwise Populate the Object with the information needed for the modal
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
      text: "This is a group project I did in the senior year of my class! <br/> <br/>We coded together a website that let user's login, create and save fighter loadouts, and play a turn based combat fighting game!<br/><br/> This project is a website that our team created using Rabbitmq, Apache, Html, PHP, JS, and Nodejs.",
      button: "Github",
      buttonUrl: "https://github.com/Yavuz7/UFCFightSim",
    },
    {
      id: "aspireHigh",
      isLink: "false",
      title: "Aspire High Youth Development Internship",
      media: "Display Video Here",
      text: "This is the internship I'm currently working! <br/><br/> I have been working under a senior developer to improve my coding and design skills.<br/> (He's are a cool dude.)<br/><br/> The website was coded with plain Javascript, HTML, and CSS. <br/><br/> Website isn't up as of 11/13/23 ",
      button: "Website",
      buttonUrl: "https://aspirehighyouth.org/",
    },
    {
      id: "dotr",
      isLink: "false",
      title: "Yugioh DOTR Remake (Demo)",
      media: "Display Video Here",
      text: "This is a group project I did for my 3D Game Development class! <br/><br/> I made it based off a old favorite game of mine, Yugioh Duelist Of The Roses!<br/><br/> The graphics aren't quite there, but it was quite intensive on the coding side. <br/><br/> Coded in C, and card data is retrieved JSON!",
      button: "Github",
      buttonUrl: "https://github.com/Yavuz7/VulkanProjectGF3D",
    },
    {
      id: "quake2",
      isLink: "false",
      title: "Quake 2 Boss Mod",
      media:
        "The Mod Has Since Broke <br/>and I have no way to get pictures, <br/>sorry...",
      text: "This is a project I did for my game mod class, based around being hunted down around the map by a scary boss!<br/><br/>As the Quake 2 source code was coded in C, so too was this mod!",
      button: "Github",
      buttonUrl: "https://github.com/Yavuz7/Quake2BossMod",
    },
  ];
});
