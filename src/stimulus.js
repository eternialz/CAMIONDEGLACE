import SceneController from './controllers/scene_controller';
import UserInterfaceController from './controllers/user_interface_controller';

const application = Stimulus.Application.start();

application.register(
    'hello',
    class extends Stimulus.Controller {
        static get targets() {
            return ['name'];
        }
    }
);

application.register('scene', SceneController);
application.register('user-interface', UserInterfaceController);
