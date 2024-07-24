import App from "./components/App.js";
import Dom from "./components/shared/Dom.js";
import {inputField } from "./components/shared/_Private.js";

//Wire keyup event on the input
inputField.addEventListener('keyup', validate);

function validate({ target }) {
   const inputValue = target.value.trim();
   const validation = App.validateEmail(inputValue);
   /**
    * @type {{state:string; message: string; stateClass: string;iconClass: string;}}
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

   Dom.setState({
      state: "valid",
      message: "valid email address",
      stateClass: "valid",
      iconClass: "fa fa-check-circle"
   });

   //Restore default state of an app w   
   if (inputValue.length === 0) {
      Dom.restoreToDefaultState();
   }

}

