export const Player = {
    maxHappiness: 100,
    minHappiness: 0,
    happiness: Player.maxHappiness,
    gainHappiness: (gain) => {
        Player.happiness = (Player.happiness + gain > Player.maxHappiness) ? Player.maxHappiness : Player.happiness + gain;
    },
    loseHappiness: (loss) => {
        Player.happiness = (Player.happiness - loss < Player.minHappiness) ? Player.minHappiness : Player.happiness - loss;
    }
};
