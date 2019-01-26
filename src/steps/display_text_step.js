import { Step } from "./step";
import { TextHistoryService } from "../services/text_history_service";

export class DisplayTextStep extends Step {
    constructor(message, final, nextStep = undefined) {
        super(message, false, final, nextStep);
    }

    display() {
        TextHistoryService.addText(this.message);
    }
}