import { TextHistoryService } from "../services/text_history_service";
import { Game } from "../game";
const remote = require('electron').remote;

export default class UserInterfaceController extends Stimulus.Controller {
    static targets = [ "command", "output" ];
    combatMode = false;
    updateTimer = null;

    connect() {
        Game.init();
        this.updateTimer = setInterval(() => {
            this.refresh();
        }, 1000);
    }

    disconnect() {
        if (this.updateTimer) {
            clearInterval(this.updateTimer);
        }
    }

    refresh() {
        this.outputTarget.innerHTML = TextHistoryService.html;
        // auto scroll to new message
        this.outputTarget.scrollTop = this.outputTarget.scrollHeight;
        Game.nextTick();
    }

    keyDown(e) {
        if ((e.keyCode == 8 || e.keyCode == 46) && this.combatMode) {
            e.preventDefault();
        }
    }
    
    keyUp(e) {
        if (e.keyCode === 13) {
            if (this.commandTarget.value == "quitter") {
                const window = remote.getCurrentWindow();
                window.close();
            }
            else {
                Game.currentEvent.step.nextInput(this.commandTarget.value);
                TextHistoryService.addText(this.commandTarget.value, 'hero');
                this.commandTarget.value = "";
            }
        }
    }
}