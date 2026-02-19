// Highlight on mouse hover
function highlight(element) {
    element.style.backgroundColor = "#ffffcc";
}

function removeHighlight(element) {
    element.style.backgroundColor = "white";
}

// Validate Name
function validateName() {
    let name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameError").innerHTML =
            "Name must be at least 3 characters";
        return false;
    } else {
        document.getElementById("nameError").innerHTML = "";
        return true;
    }
}

// Validate Email
function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(pattern)) {
        document.getElementById("emailError").innerHTML =
            "Invalid email format";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
        return true;
    }
}

// Validate Feedback
function validateFeedback() {
    let msg = document.getElementById("feedback").value;

    if (msg.length < 10) {
        document.getElementById("feedbackError").innerHTML =
            "Feedback must be at least 10 characters";
        return false;
    } else {
        document.getElementById("feedbackError").innerHTML = "";
        return true;
    }
}

// Final Submit
function submitForm() {
    if (validateName() && validateEmail() && validateFeedback()) {
        alert("Thank you! Your feedback has been submitted.");
    } else {
        alert("Please fix errors before submitting.");
    }
}
