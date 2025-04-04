document
  .getElementById("contact-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      document.getElementById("form-status").textContent =
        "Thank you for your message!";
      document.getElementById("form-status").style.color = "green";
    } else {
      document.getElementById("form-status").textContent =
        "Please fill out all fields.";
      document.getElementById("form-status").style.color = "red";
    }
  });
