const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  const inputValue = firstName.value;
  const trimmedValue = inputValue.trim();


  if (trimmedValue.length >= 2) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}
