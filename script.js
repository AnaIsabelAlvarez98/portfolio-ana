document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const logo = document.querySelector('.logo');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', function () {
        navbarLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  
    logo.addEventListener('click', function () {
      navbarLinks.forEach(link => link.classList.remove('active'));
    });
  });