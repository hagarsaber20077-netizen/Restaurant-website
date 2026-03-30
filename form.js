document.getElementById("form2").addEventListener("submit", function (h) {
    h.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");

    nameError.textContent = " ";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    // name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    } else if (name.length < 3 || name.length > 15) {
        nameError.textContent = "Name must be 3–15 characters.";
        valid = false;
    }

    // email validation
    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    } else if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // subject validation
    if (subject !== "" && subject.length < 3) {
        subjectError.textContent = "Subject must be at least 3 characters.";
        valid = false;
    }

    // message validation
    if (message !== "" && message.length < 5) {
        messageError.textContent = "Message must be at least 5 characters.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        h.target.submit();
    }
});
