export class Step {
    constructor(message, userAction, final, nextSteps) {
        this.message = message;
        this.requireUserAction = userAction;
        this.isFinished = false;
        this.isFinal = final;
        this.nextSteps = nextSteps;
    }

    display() {
    }

    nextSteps() {
        if (this.isFinal) {
            return null;
        }
        if (this.nextSteps.length == 0) {
            return this.nextSteps[0];
        }
    }
}