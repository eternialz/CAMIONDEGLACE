export const Player = {
    happiness: 100,
    gainHappiness: (gain) => {
        Player.happiness = (Player.happiness + gain > 100) ? 100 : Player.happiness + gain;
    },
    loseHappiness: (loss) => {
        Player.happiness = (Player.happiness - loss < 0) ? 0 : Player.happiness - loss;
    }
};
