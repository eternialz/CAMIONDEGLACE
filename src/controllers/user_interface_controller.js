import { TextHistoryService } from "../services/text_history_service";

export default class UserInterfaceController extends Stimulus.Controller {
    static targets = [ "command", "output" ];
    combatMode = false;

    connect() { 
        this.updateTimer = setInterval(() => {
            this.refresh();
        }, this.data.get("refreshInterval"));
    }

    disconnect() {
        if (this.updateTimer) {
            clearInterval(this.updateTimer);
        }
    }

    refresh() {
        this.outputTarget.innerHTML = TextHistoryService.value;
    }

    keyDown(e) {
        if ((e.keyCode == 8 || e.keyCode == 46) && this.combatMode) {
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
        if (text == "vim") {
            this.addText("Welcome in vim room!");
        }
        else if (text == "right") {
            this.addText("Right", false);
        }
    }

    addText(text, left = true) {
        TextHistoryService.addText(text, left);
        this.outputTarget.innerHTML = TextHistoryService.html;
    }
}