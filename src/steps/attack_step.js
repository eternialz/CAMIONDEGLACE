import { Step } from "./step";
import { StringHelper } from "../helpers/string-helper";

export class AttackStep extends Step {
    constructor(final, nextStep) {
        super(true, final, [nextStep]);
        this.random = StringHelper.randomString();
    }

    display() {
        TextHistoryService.addText(`Entrez ${this.random} pour attaquer!`, left);
    }

    onInput(userInput) {
        // TODO:
    }
}
