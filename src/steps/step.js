export class Step {
    constructor(message, userAction, final) {
        this.message = message;
        this.requireUserAction = userAction;
        this.isFinal = final;
    }

    display() {
    }

    nextStep() {
        if (this.isFinal) {
            return null;
        }
        else if (this.nextSteps.length == 1) {
            return this.nextSteps[0];
        }
        const canEnterSteps = possiblesStepsIdx.map(el => steps[el]).filter(step => step.canEnter(null));
        if (canEnterSteps.length == 1) {
            return canEnterSteps[0]
        }
        if (canEnterSteps[0]) {
            console.error("MORE THAN ONE POSSIBILITY IN YOUR TREE!!!");
            return canEnterSteps[0];
        }
        throw new Error('No steps matched');
        
        
    }
}