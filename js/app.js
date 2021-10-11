let email = document.getElementById("email");
let errorIcon = document.getElementById("error-icon");
let errorPara = document.getElementById("error-para");
let form = document.getElementsByTagName("form")[0];
var emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; ////Regular expression

form.addEventListener("submit", formSubmitted);

function formSubmitted(e) {
  e.preventDefault();
  let emailValue = email.value;
  if(!emailPattern.test(emailValue)) {
    errorIcon.style.display = "block";
    errorPara.style.display = "block";
    email.classList.add("input-error-style");
  } else {
    errorIcon.style.display = "none";
    errorPara.style.display = "none";
    email.classList.remove("input-error-style");
  }
}
