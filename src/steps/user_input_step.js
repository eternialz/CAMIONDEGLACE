import { DisplayTextStep } from "./display_text_step";
import { StringHelper } from "../helpers/string-helper";
import { TextHistoryService } from "../services/text_history_service";
import { Game } from "../game";

export class UserInputStep extends DisplayTextStep {
    constructor(message, dialogMessages, responseAction) {
        super(message, false);
        this.requireUserAction = true;
        this.responseAction = responseAction;
        this.dialogMessages = dialogMessages;
    }

    nextInput(value) {
        this.nextStep = this.responseAction(value);
        if (this.dialogMessages[`hero${StringHelper.capitalize(value)}Text`]) {
            TextHistoryService.addText(this.dialogMessages[`hero${StringHelper.capitalize(value)}Text`], 'hero');
        }
        if (this.dialogMessages[`event${StringHelper.capitalize(value)}Text`]) {
            Game.currentEvent.persona.talk(this.dialogMessages[`event${StringHelper.capitalize(value)}Text`]);
        }
    }
}
