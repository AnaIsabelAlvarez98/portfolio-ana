document.addEventListener("DOMContentLoaded", () => {
  //--- NAVBAR STYLES ---
  const navbarLinks = document.querySelectorAll(".navbar a");
  const logo = document.querySelector(".logo");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbarLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  logo.addEventListener("click", function () {
    navbarLinks.forEach((link) => link.classList.remove("active"));
  });

  //--- MOBILE MENU FUNCTION ---
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    document.querySelector('.mobile-menu').classList.toggle('open');
  }

  document.getElementById('burger-menu').addEventListener('click', function() {
    toggleMobileMenu(this);
  });

  //--- LINK SECTIONS AND CONTACT-BTN ---
  const contactButton = document.querySelector(".contact-btn");
  const contactSection = document.querySelector("#contact");

  contactButton.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  logo.addEventListener("click", () => {
    const homeSection = document.querySelector("#home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  });

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  //--- SCROLLREVEAL ANIMATIONS ---
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".home-img", {});
  sr.reveal(".home-content", { delay: 100 });
  sr.reveal(".contact-btn", { delay: 200 });
  sr.reveal(".icon-container", { delay: 200 });

  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  srLeft.reveal("#about-info-left", { delay: 100 });
  srLeft.reveal(".heading", { delay: 100 });

  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  srRight.reveal("#about-info-rigth", { delay: 100 });
  srRight.reveal(".contact-info", { delay: 100 });

  // --- DARK MODE ---
  let darkMode = localStorage.getItem("darkMode");
  const lightModeBtn = document.getElementById("light-mode");
  const darkModeBtn = document.getElementById("dark-mode");
  const body = document.body;

  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  }

  lightModeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
      lightModeBtn.classList.add("rotate");
      lightModeBtn.classList.remove("bxs-moon");
      lightModeBtn.classList.add("bx-sun");
    } else {
      disableDarkMode();
      lightModeBtn.classList.remove("rotate");
      lightModeBtn.classList.remove("bx-sun");
      lightModeBtn.classList.add("bxs-moon");
    }
  });

  darkModeBtn?.addEventListener("click", () => {
    disableDarkMode();
    lightModeBtn.classList.remove("rotate");
    lightModeBtn.classList.remove("bxs-moon");
    lightModeBtn.classList.add("bx-sun");
  });

  // --- LANGUAGE BUTTON ---
  const languageBtn = document.querySelector(".languaje-btn");

  languageBtn.addEventListener("click", () => {
    languageBtn.classList.toggle("clicked");
  });

  // --- FORM HANDLING ---
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      emailjs.send("portfolio-form", "template_s2rmmze", {
        from_name: name,
        from_email: email,
        message: message
      })
      .then(() => {
        document.getElementById("message-send").style.display = "block";
        setTimeout(() => {
          document.getElementById("message-send").style.display = "none";
        }, 5000);
        contactForm.reset();
      }, (error) => {
        console.log("FAILED...", error);
      });
    } else {
      document.getElementById("error-message").style.display = "block";
      setTimeout(() => {
        document.getElementById("error-message").style.display = "none";
      }, 5000);
    }
  });
});