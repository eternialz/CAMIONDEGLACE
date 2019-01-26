export class Step {
    constructor(message, userAction, final, nextStep = undefined) {
        this.message = message;
        this.requireUserAction = userAction;
        this.isFinal = final;
        this.nextStep = nextStep;
    }

    display() {
    }

    nextInput(value) {

    }
}