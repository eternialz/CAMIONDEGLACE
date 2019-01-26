import { ArrayHelper } from "./helpers/array-helper";

const Game = {
    allEvents:  [],
    currEvents: [],
    nbEvents: 9, // Random guess: to adjust
    init: () => {
        Game.loadAllEvents();
    },
    loadAllEvents: () => {
        // TODO generate events
    },
    pickCurrEvents: () => {
        let shuffledEvents = ArrayHelper.shuffle(events);
        Game.currEvents = shuffledEvents.slice(0, Game.nbEvents);
    },
};
