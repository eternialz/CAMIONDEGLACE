import { Step } from "./step";

export class UserInputStep extends Step {
    constructor(message, final, nextStep, responseAction) {
        super(message, true, final, [nextStep]);
        this.responseAction = responseAction;
    }

    display() {

    }

    onInput(userInput) {
        this.responseAction(userInput);
    }
}
