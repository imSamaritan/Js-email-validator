import App from "../App.js";
import {labelElement, inputIcon,validSettings,invalidSettings} from "./_Private.js";

export default class Dom {
  static restoreToDefaultState() {
    labelElement.textContent = "";
    inputIcon.className = "fa fa-envelope";
    App.clearSettings(invalidSettings);
    App.clearSettings([[labelElement, "error"]]);
  }

 /**
  * 
  * @param {{
  * state: "valid"|"invalid";
  * stateResponse:{message:string;className:string}
  * }} settings 
  * 
  * @returns {void}
  */
 static setState(settings) {
  const {state, message, stateClass, iconClass } = settings;
  inputIcon.className = iconClass;

  if (state === "valid") {
    App.clearSettings(invalidSettings);
    App.addSettings(validSettings);
  }

  if (state === "invalid") { 
    App.clearSettings(validSettings);
    App.addSettings(invalidSettings);
  }

  labelElement.className = stateClass;
  labelElement.textContent = message;
 }

}
