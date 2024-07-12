class App {
 #labelElement;
 /**
  * 
  * @param {HTMLLabelElement} labelElement 
  */
 constructor(labelElement) {
  this.#labelElement = labelElement;
 }
 /**
  * @param {(Element|string)[][]} settings 
  * @returns {void}
  */
 static clearSettings(settings) {
  for (const setting of settings) {
   setting[0].classList.remove(setting[1]);
  };
 }
 /**
  * @param {(Element|string)[][]} settings 
  * @returns {void}
  */
 static addSettings(settings) {
  for (const setting of settings) {
   setting[0].classList.add(setting[1]);
  };
 }

 /**
  * 
  * @param {{message: string; className: string}} settings
  * @returns {void} 
  */
 userResponse(settings) {
  const { message, className } = settings;
  this.#labelElement.className = className;
  this.#labelElement.textContent = message;
 }


}

export default App;