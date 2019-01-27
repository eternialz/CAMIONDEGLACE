import { TextHistoryService } from '../services/text_history_service';

export class PNJ {
    constructor(name, damage = 20, asset = '../..') {
        this.name = name;
        this.health = 100;
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
