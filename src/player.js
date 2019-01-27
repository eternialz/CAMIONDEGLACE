export const Player = {
    maxHappiness: 100,
    minHappiness: 0,
    happiness: Player.maxHappiness,
    maxHealth: 100,
    health: Player.maxHealth,
    baseDamage: 20,
    damage: Player.baseDamage,
    reset: () => {
        Player.happiness = Player.maxHappiness;
        Player.health = Player.maxHealth;
        Player.damage = Player.baseDamage;
    },
    gainHappiness: gain => {
        Player.happiness =
            Player.happiness + gain > Player.maxHappiness ? Player.maxHappiness : Player.happiness + gain;
    },
    loseHappiness: loss => {
        Player.happiness =
            Player.happiness - loss < Player.minHappiness ? Player.minHappiness : Player.happiness - loss;
    },
    resetHealth: () => {
        Player.health = Player.maxHealth;
    },
    loseHealth: loss => {
        Player.health = Math.max(Player.health - loss, 0);
    },
    levelUp: () => {
        Player.damage += 5;
    },
    isDead: () => {
        return Player.health == 0;
    },
};
