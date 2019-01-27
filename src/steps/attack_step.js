import { Step } from './step';
import { StringHelper } from '../helpers/string-helper';
import { Game } from '../game';
import { Player } from '../player';

export class AttackStep extends Step {
    constructor(message, final, nextSteps) {
        super(message, true, final);
        this.random = '';
        this.nextSteps = nextSteps; // # [victory, self, defeat]
    }

    display() {
        this.random = StringHelper.randomString();
        TextHistoryService.addText(`Vous décider d'attaquer ${currentPersona.name}!`);
        TextHistoryService.addText(`Entrez ${this.random} pour attaquer!`);
    }

    nextInput(value) {
        const currentPersona = Game.currentEvent.persona;
        const score = StringHelper.compare(this.random, value);
        const damage = (score * Player.damage) / 100;
        TextHistoryService.addText(`Vous faites ${damage} points de dégats`);
        currentPersona.health -= damage;
        if (currentPersona.isDead()) {
            TextHistoryService.addText(`Vous avez assassiner ${currentPersona.name}.`);
            TextHistoryService.addText(`Votre attaque de base s'améliore.`);
            Player.levelUp();
            this.nextStep = this.nextSteps[0];
        } else {
            const playerDamage = (Math.floor(Math.random() * 20) / 20) * currentPersona.damage;
            TextHistoryService.addText(`${currentPersona.name} vous attaque en retour!`);
            TextHistoryService.addText(`Vous recevez ${playerDamage} dégats.`);
            Player.loseHealth(playerDamage);
            if (Player.isDead()) {
                // Reset Game
                this.nextStep = this.nextSteps[2];
            } else {
                this.nextStep = this.nextSteps[1];
            }
        }
    }
}
