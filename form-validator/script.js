const form = document.querySelector("form");
const username = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm-password");

function checkUsernameValidation() {
  if (username.value.length < 5) {
    showError(username, "Username must be of at least 5 characters.");
    return false;
  } else if (username.value.length > 15) {
    showError(username, "Username must be smaller than 15 characters.");
    return false;
  } else {
    showSuccess(username);
    return true;
  }
}

function checkEmailValidation() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    showSuccess(email);
    return false;
  } else {
    showError(email, "Enter valid email address");
    return true;
  }
}

function checkPasswordValidation() {
  if (password.value === confirmPassword.value) {
    showSuccess(confirmPassword, "Password matched.");
    return true;
  } else {
    showError(confirmPassword, "Password does not match.");
    return false;
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}

form.addEventListener("submit", e => {
  e.preventDefault();

  checkUsernameValidation();
  checkEmailValidation();
  checkPasswordValidation();
});
