class App {
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


}

export default App;