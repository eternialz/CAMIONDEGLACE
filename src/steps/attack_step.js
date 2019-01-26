import { Step } from "./step";
import { StringHelper } from "../helpers/string-helper";

export class AttackStep extends Step {
    constructor(message, final) {
        super(message, true, final);
        this.random = StringHelper.randomString();
    }

    display() {
        TextHistoryService.addText(`Entrez ${this.random} pour attaquer!`, left);
    }

    nextInput(value) {
        // TODO:
    }
}
