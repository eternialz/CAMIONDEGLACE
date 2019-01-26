import { ArrayHelper } from "./helpers/array-helper";

export const Game = {
    allEvents:  [],
    sessionEvents: [],
    currentEvent: null,
    nbEvents: 9, // Random guess: to adjust
    init: () => {
        Game.loadAllEvents();
        Game.pickCurrEvents();
    },

    loadAllEvents: () => {
        // TODO generate events
    },

    pickCurrEvents: () => {
        let shuffledEvents = ArrayHelper.shuffle(Game.allEvents);
        Game.sessionEvents = shuffledEvents.slice(0, Game.nbEvents);
        Game.currentEvent = Game.sessionEvents[0];
    },

    processInput: (input) => {
        Game.currentEvent.processInput(input);
    }
};
