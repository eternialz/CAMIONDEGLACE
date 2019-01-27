import { Step } from "./step";
import { TextHistoryService } from "../services/text_history_service";
import { Game } from "../game";

export class TalkStep extends Step {
    constructor(message, final, type, nextStep = undefined) {
        super(message, false, final, nextStep);
        this.type = type;
    }

    display() {
        const name = (this.type == "event") ? Game.currentEvent.persona.name : 'Hero';
        TextHistoryService.addText(this.message, this.type, name);
    }
}