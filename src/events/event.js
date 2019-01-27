import { AttackStep } from '../steps/attack_step';
import { Game } from '../game';
import { TextHistoryService } from '../services/text_history_service';
import { Player } from '../player';

export class Event {
    constructor(steps, background, persona, music) {
        this.steps = steps;
        this.step = this.steps[0];
        this.isFinished = false;
        this.background = background;
        this.persona = persona;
        this.attackInterval;
        if (music) {
            this.music = new Audio(music);
            this.music.loop = true;
            this.music.preload = "auto";
        }
    }

    nextStep() {
        if (!this.isFinished && this.step.nextStep) {
            this.step = Object.create(this.steps[this.step.nextStep]);
            this.step.display();
            if (this.step instanceof AttackStep && !this.attackInterval) {
                this.attackInterval = setInterval(() => {
                    const playerDamage = (Math.floor(Math.random() * 20) / 20) * this.persona.damage;
                    TextHistoryService.addText(
                        `<em>${this.persona.name}</em> vous attaque. Vous recevez <em>${playerDamage} dégats.</em>`
                    );
                    Player.loseHealth(playerDamage);
                    if (Player.isDead()) {
                        clearInterval(Game.currentEvent.attackInterval);
                        Game.currentEvent.attackInterval = null;
                        Game.currentEvent = Game.endEvent;
                    }
                }, 5000);
            } else if (!(this.step instanceof AttackStep) && this.attackInterval) {
                clearInterval(this.attackInterval);
                this.attackInterval = null;
            }
            if (this.step.isFinal) {
                this.isFinished = true;
            }
        }
    }

    reset() {
        this.step = this.steps[0];
        this.isFinished = false;
    }
}
