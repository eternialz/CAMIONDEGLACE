import HomeController from "./controllers/home_controller";
import UserInterfaceController from "./controllers/user_interface_controller";

const application = Stimulus.Application.start();
        
application.register("hello", class extends Stimulus.Controller {
static get targets() {
    return [ "name" ]
}});

application.register("home", HomeController);
application.register("user-interface", UserInterfaceController);