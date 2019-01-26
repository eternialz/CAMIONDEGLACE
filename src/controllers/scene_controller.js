import { BackgroundService } from "../services/background_service";

export default class SceneController extends Stimulus.Controller {
    static targets = ["scene"];
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
        this.sceneTarget.style.backgroundImage = `url('./assets/${BackgroundService.name}.png')`;
    }
}