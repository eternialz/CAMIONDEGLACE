import HomeController from "./controllers/home_controller";
import InputController from "./controllers/input_controller";

const application = Stimulus.Application.start();
        
application.register("hello", class extends Stimulus.Controller {
static get targets() {
    return [ "name" ]
}});

application.register("home", HomeController);
application.register("input", InputController);