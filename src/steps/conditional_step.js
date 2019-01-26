import { Step } from './step';

export class ConditionalStep extends Step {
    constructor(message, userAction, final, enterCondition) {
        super(message, userAction, final);
        this.enterCondition = enterCondition;
    }

    canEnter(parameter) {
        return !!this.enterCondition(parameter);
    }
}