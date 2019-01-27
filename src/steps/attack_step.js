import { Step } from './step';
import { StringHelper } from '../helpers/string-helper';
import { Game } from '../game';
import { Player } from '../player';
import { TextHistoryService } from '../services/text_history_service';

export class AttackStep extends Step {
    constructor(message, final, nextSteps) {
        super(message, true, final);
        this.random = '';
        this.nextSteps = nextSteps; // # [victory, self, defeat]
    }

    display() {
        const currentPersona = Game.currentEvent.persona;
        this.random = StringHelper.randomString();
        TextHistoryService.addText(`${this.message} <em>${currentPersona.name}</em>!`);
        TextHistoryService.addText(`Entrez <em>${this.random}</em> pour attaquer!`);
    }

    nextInput(value) {
        const currentPersona = Game.currentEvent.persona;
        const score = StringHelper.compare(this.random, value);
        const damage = (score * Player.damage) / 100;
        TextHistoryService.addText(`Vous faites <em>${damage} points</em> de dégats`);
        currentPersona.health -= damage;

        if (currentPersona.isDead()) {
            TextHistoryService.addText(`Vous avez <em>assassiner ${currentPersona.name}</em>.`);
            TextHistoryService.addText(`Votre attaque de base s'améliore.`);
            Player.levelUp();
            Player.resetHealth();
            this.nextStep = this.nextSteps[0];
        } else {
            const playerDamage = (Math.floor(Math.random() * 20) / 20) * currentPersona.damage;
            TextHistoryService.addText(`<em>${currentPersona.name}</em> vous attaque en retour!`);
            TextHistoryService.addText(`Vous recevez <em>${playerDamage} dégats.</em>`);
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
