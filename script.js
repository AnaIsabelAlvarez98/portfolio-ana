document.addEventListener("DOMContentLoaded", function () {
  //--- NAVBAR---
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
//---SCRORLLREVEAL ANIMATIONS---
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
});
