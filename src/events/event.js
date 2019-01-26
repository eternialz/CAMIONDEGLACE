export class Event {
    constructor(steps, possibleNextSteps) {
        this.steps = steps;
        this.possibleNextSteps = possibleNextSteps;
        this.step = this.steps[0];
        this.step.display();
        this.isFinished = false;
    }

    nextStep() {
        if (!this.isFinished) {
            this.step = this.step.nextStep(this.steps, this.possibleNextSteps[this.currentStepIndex]);
            this.step.display()
            if (this.step.isFinal) {
                this.isFinished = true;
            }
        }
    }
}