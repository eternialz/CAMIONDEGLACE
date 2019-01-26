export default class InputController extends Stimulus.Controller {
    static targets = [ "command" ];
    
    connect() { }
    
    keyUp(e) {
        if (e.keyCode === 13) {
            this.nextInput(this.commandTarget.value);
            this.commandTarget.value = "";
        }
    }

    nextInput(text) {
        alert("Input:" + text);
    }
}