import { TextHistoryService } from "../services/text_history_service";
import { Game } from "../game";

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
        //console.log("refresh");
        this.outputTarget.innerHTML = TextHistoryService.html;
        Game.nextTick();
    }

    keyDown(e) {
        if ((e.keyCode == 8 || e.keyCode == 46) && this.combatMode) {
            e.preventDefault();
        }
    }
    
    keyUp(e) {
        if (e.keyCode === 13) {
            console.log(Game.currentEvent.step);
            Game.currentEvent.step.nextInput(this.commandTarget.value);
            TextHistoryService.addText(this.commandTarget.value, false);
            this.commandTarget.value = "";
        }
    }
}