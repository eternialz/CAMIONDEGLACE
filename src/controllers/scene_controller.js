import { BackgroundService } from '../services/background_service';
import { SceneService } from '../services/scene_service';

export default class SceneController extends Stimulus.Controller {
    static targets = ['scene', 'hero', 'persona'];
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
        if (SceneService.heroAsset) {
            this.heroTarget.innerHTML = "<img src='" + SceneService.heroAsset + "'/>";
        }
        if (SceneService.personaAsset && SceneService.personaAsset != '../..') {
            this.personaTarget.innerHTML = "<img src='" + SceneService.personaAsset + "'/>";
        }
        this.sceneTarget.style.backgroundImage = `url('./assets/${BackgroundService.name}.png')`;
    }
}
