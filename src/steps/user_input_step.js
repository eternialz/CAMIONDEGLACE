import { DisplayTextStep } from "./display_text_step";

export class UserInputStep extends DisplayTextStep {
    constructor(message, responseAction) {
        super(message, false);
        this.requireUserAction = true;
        this.responseAction = responseAction;
    }

    nextInput(value) {
        this.nextStep = this.responseAction(value);

    }
}
