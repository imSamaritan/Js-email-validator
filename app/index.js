import App from "./components/App.js";
import Dom from "./components/shared/Dom.js";
import {inputField } from "./components/shared/_Private.js";

const validate = () => {
   /** @type {string} */
   const inputValue = inputField.value.trim();
   /**@type {true|false} */
   const validation = App.validateEmail(inputValue);
   /**
    * @type {{
    *    state:"valid"|"invalid"; 
    *    message: string; 
    *    stateClass: 
    *    string;iconClass: string;
    * }}
    */
   let settings; 
   if (validation) settings = {
         state: "valid",
         message: "valid email address",
         stateClass: "valid",
         iconClass: "fa fa-check-circle"
      };
   else settings = {
         state: "invalid",
         message: "invalid email address",
         stateClass: "invalid",
         iconClass: "fa fa-times-circle"
      };

   //set application interface state
   Dom.setState(settings);

   //Restore initial/default app state
   if (inputValue.length === 0) {
      Dom.restoreToDefaultState();
   }
}

//Wire keyup event on the input
inputField.addEventListener('keyup', validate);

