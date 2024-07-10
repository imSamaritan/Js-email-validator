const inputField = document.querySelector("input");
const inputFieldContainer = document.querySelector('.input-field');
const inputIcon = document.querySelector('span');

function validate({ target }) {
 const _value = target.value;
 const pattern = /^[abcde]+$/;

 if (pattern.test(_value)) {
  inputIcon.classList.remove("invalid");
 } else {
  inputIcon.classList.add("invalid");
 }
}

inputField.addEventListener('keyup', validate);