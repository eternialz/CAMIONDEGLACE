import { TextHistoryService } from "../services/text_history_service";

export class PNJ {

    constructor(name) {
        this.name = name;
    }

    talk(text) {
        TextHistoryService.addText(text, "event", this.name);
    }
}