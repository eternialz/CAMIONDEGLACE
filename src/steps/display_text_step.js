import { Step } from "./step";
import { TextHistoryService } from "../services/text_history_service";

export class DisplayTextStep extends Step {
    constructor(message, final, nextStep) {
        super(message, false, final, [nextStep]);
    }

    display(left = true) {
        TextHistoryService.addText(this.message, left);
    }
}