import App from "./components/App.js";
import {
   pattern,
   inputField,
   inputIcon,
   labelElement,
   invalidSettings,
   validSettings
} from "./components/shared/_Private.js";

const app = new App(labelElement);

//Wire keyup event on the input
inputField.addEventListener('keyup', validate);



function validState() {
   inputIcon.className = "fa fa-check-circle";
   App.clearSettings(invalidSettings);
   App.addSettings(validSettings);
   app.userResponse({
      message: "valid email address",
      className: "valid"
   });
}

function invalidState() {
   inputIcon.className = "fa fa-envelope";
   App.clearSettings(validSettings);
   App.addSettings(invalidSettings);
   app.userResponse({
      message: "Invalid email address",
      className: "error"
   });
}

function validate({ target }) {
   const inputValue = target.value.trim();
   const validateEmail = pattern.test(inputValue);

   if (validateEmail)
      validState();
   else
      invalidState();

   if (inputValue.length === 0) {
      labelElement.textContent = "";
      App.clearSettings(invalidSettings);
      App.clearSettings([[labelElement, "error"]]);
   }

}

