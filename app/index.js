import App from "./components/App.js";
import {
   pattern,
   inputField,
   inputIcon,
   invalidSettings,
   validSettings
} from "./components/shared/_Private.js";

//Wire keyup event on the input
inputField.addEventListener('keyup', validate);

function validState() {
   inputIcon.className = "fa fa-check-circle";
   App.clearSettings(invalidSettings);
   App.addSettings(validSettings);
}

function invalidState() {
   inputIcon.className = "fa fa-envelope";
   App.clearSettings(validSettings);
   App.addSettings(invalidSettings);
}

function validate({ target }) {
   const inputValue = target.value.trim();
   const validateEmail = pattern.test(inputValue);

   if (validateEmail)
      validState();
   else
      invalidState();

   if (inputValue.length === 0) {
      App.clearSettings(invalidSettings);
   }

}

