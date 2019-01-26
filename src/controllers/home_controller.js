export default class HomeController extends Stimulus.Controller {
  static targets = ["output"]
  
  connect() {
    this.outputTarget.textContent = "test";
  }
  
  click() {
    console.log('qsdqsdq');
  }
}