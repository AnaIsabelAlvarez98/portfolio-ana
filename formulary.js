// document.addEventListener("DOMContentLoaded", () => {
//     emailjs.init("IqIJwvp8W-b-e0yHC");
  
//     document
//       .getElementById("contactForm")
//       .addEventListener("submit", function (event) {
//         event.preventDefault();
  
//         let name = document.getElementById("name").value.trim();
//         let email = document.getElementById("email").value.trim();
//         let message = document.getElementById("message").value.trim();

//         let templateParams = {
//           from_name: name,
//           from_email: email,
//           message: message,
//         };
  
//         emailjs.send("portfolio-form", "template_s2rmmze", templateParams).then(
//           function (response) {
//             document.getElementById("message-send").style.display = "block";
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//           }

//         );
//       });

//     function validateEmail(email) {
//       const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return re.test(email);
//     }
//   });

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateForm()) {
            emailjs.sendForm("portfolio-form", "template_s2rmmze", this)
                .then(function(response) {
                    document.getElementById("message-send").style.display = "block";
                }, function(error) {
                    console.error('Error al enviar el formulario', error);
                });
        }
    });

    function validateForm() {
        // Agrega tu lógica de validación aquí
        // Por ejemplo, puedes verificar si los campos están completos y si el correo electrónico es válido
        // Si la validación es exitosa, devuelve true; de lo contrario, devuelve false
    }
});