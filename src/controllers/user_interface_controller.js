export default class UserInterfaceController extends Stimulus.Controller {
    static targets = [ "command", "output" ];
    combatMode = false;

    connect() { }

    keyDown(e) {
        if ((e.keyCode == 8 || e.keyCode == 46) && this.combatMode) {
            alert("test");
            e.preventDefault();
        }
    }
    
    keyUp(e) {
        if (e.keyCode === 13) {
            this.nextInput(this.commandTarget.value);
            this.commandTarget.value = "";
        }
    }

    nextInput(text) {
        alert("Input:" + text);
        if (text == "vim") {
            this.addText("Welcome in vim room!");
        }
        else if (text == "right") {
            this.addText("Right", false);
        }
    }

    addText(text, left = true) {
        this.outputTarget.innerHTML += `<p class="text-${left ? 'left' : 'right'}">${text}</p>`;
    }
}