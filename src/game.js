import { ArrayHelper } from "./helpers/array-helper";
import { Event } from "./events/event";
import { DisplayTextStep } from "./steps/display_text_step";
import { UserInputStep } from "./steps/user_input_step";

export const Game = {
    allEvents:  [],
    startEvent: new Event([
        new DisplayTextStep("Bienvenue dans le camion de glace.", false, 1),
        new DisplayTextStep("Quel glace veux-tu ?", false, 2),
        new DisplayTextStep("Ho non, tu n'as pas vu le temps passer, il faut maintenant très tard", false, 3),
        new DisplayTextStep("Il va falloir maintenant rentrer à la maison", false, 4),
        new UserInputStep("Ce jeu est 100% textuel. Entrez jouer pour commencer, quitter si vous souhaitez quitter.", (resp) => {
            if (resp == "") {
                return 5;
            }
            return -1;
        }),
        new DisplayTextStep("C'est partie!", true)
    ], "../.."),
    vimEvent: new Event([
        new DisplayTextStep("Bienvenue dans la maison de vim.", false, 1),
        new DisplayTextStep("Ho non, la porte se ferme ! Te voila piegé !", false, 2),
        new UserInputStep("Trouve comment sortir de là", (resp) => {
            if ([":wq", ":q!", ":q"].includes(resp)) {
                return 3;
            }
            return 2;
        }),
        new DisplayTextStep("Bravo, tu es sortie!", true)
    ], "../.."),
    endEvent: new Event([
        new DisplayTextStep("Bienvenue dans la maison de vim.", false, 1),
        new DisplayTextStep("Ho non, la porte se ferme ! Te voila piegé !", false, 2),
        new UserInputStep("Trouve comment sortir de là", (resp) => {
            if ([":wq", ":q!", ":q"].includes(resp)) {
                return 3;
            }
            return 2;
        }),
        new DisplayTextStep("Bravo, tu es sortie!", true)
    ], "../.."),
    sessionEvents: [],
    currentEvent: null,
    nbEvents: 9, // Random guess: to adjust
    init: () => {
        Game.loadAllEvents();
        Game.pickCurrEvents();
    },

    loadAllEvents: () => {
        Game.allEvents.push(new Event([
            new DisplayTextStep("Bienvenue dans la maison de vim.", false, 1),
            new DisplayTextStep("Ho non, la porte se ferme ! Te voila piegé !", false, 2),
            new UserInputStep("Trouve comment sortir de là", (resp) => {
                if ([":wq", ":q!", ":q"].includes(resp)) {
                    return 3;
                }
                return 2;
            }),
            new DisplayTextStep("Bravo, tu es sortie!", true)
        ], "../.."));
    },

    pickCurrEvents: () => {
        let shuffledEvents = ArrayHelper.shuffle(Game.allEvents);
        Game.sessionEvents = shuffledEvents.slice(0, Game.nbEvents);
        Game.currentEvent = Game.sessionEvents[0];
    },
    nextTick: () => {
        Game.currentEvent.nextStep();
    }
};
