import { TextHistoryService } from '../services/text_history_service';

export class PNJ {
    constructor(name, asset = '../..', damage = 20) {
        this.name = name;
        this.health = 60;
        this.damage = damage;
        this.asset = asset;
    }

    talk(text) {
        TextHistoryService.addText(text, 'event', this.name);
    }

    isDead() {
        return this.health <= 0;
    }
}
