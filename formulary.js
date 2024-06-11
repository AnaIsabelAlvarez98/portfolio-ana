document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("IqIJwvp8W-b-e0yHC");
  
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let templateParams = {
          from_name: name,
          from_email: email,
          phone: tel,
          message: message,
        };
  
        emailjs.send("portfolio-form", "template_s2rmmze", templateParams).then(
          function (response) {
            document.getElementById("thankYouMessage").style.display = "block";
  
            
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
          }

        );
      });

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });