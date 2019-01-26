import HomeController from "./controllers/home_controller";

const application = Stimulus.Application.start();
        
application.register("hello", class extends Stimulus.Controller {
static get targets() {
    return [ "name" ]
}});

application.register("home", HomeController);