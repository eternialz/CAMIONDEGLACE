export class Event {
    constructor(initialStep) {
        this.step = initlalStep;
        this.step.display();
        this.isFinished = false;
    }

    nextStep() {
        if (!this.isFinished) {
            this.step = this.step.nextStep();
            this.step.display()
            if (this.step.isFinal) {
                this.isFinished = true;
            }
        }
    }
}