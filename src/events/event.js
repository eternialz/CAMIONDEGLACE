export class Event {
    constructor(steps, background) {
        this.steps = steps;
        this.step = this.steps[0];
        this.isFinished = false;
        this.background = background;
    }

    nextStep() {
        if (!this.isFinished && this.step.nextStep) {
            this.step = Object.create(this.steps[this.step.nextStep]);
            this.step.display()
            if (this.step.isFinal) {
                this.isFinished = true;
            }
        }
    }
}