import { Step } from './step';
import { StringHelper } from '../helpers/string-helper';
import { Game } from '../game';
import { Player } from '../player';
import { TextHistoryService } from '../services/text_history_service';
import { TypeService } from '../services/type_service';

export class AttackStep extends Step {
    constructor(message, final, nextSteps) {
        super(message, true, final);
        this.random = '';
        this.nextSteps = nextSteps; // # [victory, self, defeat]
    }

    display() {
        const currentPersona = Game.currentEvent.persona;
        this.random = StringHelper.randomString();
        TypeService.type = this.random;
        t addTextHistoryService.addTextAsync(`${this.message} <em>${currentPersona.name}</em>!`);
        TextHistoryService.addTextAsync(`Entrez <em>${this.random}</em> pour attaquer!`);
    }

    nextInput(value) {
        const currentPersona = Game.currentEvent.persona;
        const score = StringHelper.compare(this.random, value);
        const damage = (score * Player.damage) / 100;
        TextHistoryService.addTextAsync(`Vous faites <em>${damage} points</em> de dégats`);
        currentPersona.health -= damage;

        if (currentPersona.isDead()) {
            TextHistoryService.addTextAsync(`Vous avez <em>assassiner ${currentPersona.name}</em>.`);
            TextHistoryService.addTextAsync(`Votre attaque de base s'améliore.`);
            Player.levelUp();
            Player.resetHealth();
            this.nextStep = this.nextSteps[0];
        } else {
            this.nextStep = this.nextSteps[1];
        }
    }
}
