import { Player } from '../player';

export default class IndicatorController extends Stimulus.Controller {
    static targets = ['health', 'happiness'];
    updateTimer = null;

    connect() {
        this.updateTimer = setInterval(() => {
            this.refresh();
        }, 1000);
    }

    disconnect() {
        if (this.updateTimer) {
            clearInterval(this.updateTimer);
        }
    }

    refresh() {
        this.healthTarget.innerHTML = Player.health;
        this.happinessTarget.innerHTML = Player.happiness;
    }
}
