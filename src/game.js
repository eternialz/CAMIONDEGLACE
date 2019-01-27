import { ArrayHelper } from './helpers/array-helper';
import { Event } from './events/event';
import { DisplayTextStep } from './steps/display_text_step';
import { UserInputStep } from './steps/user_input_step';
import { BackgroundService } from './services/background_service';
import { PNJ } from './meetings/PNJ';
import { AttackStep } from './steps/attack_step';
import { Player } from './player';
import { SceneService } from './services/scene_service';

export const Game = {
    allEvents: [],
    startEvent: new Event(
        [
            new DisplayTextStep('Bienvenue dans le camion de glace.', false, 1),
            new DisplayTextStep('Quel glace veux-tu ?', false, 2),
            new DisplayTextStep("Ho non, tu n'as pas vu le temps passer, il faut maintenant très tard", false, 3),
            new DisplayTextStep('Il va falloir maintenant rentrer à la maison', false, 4),
            new UserInputStep(
                'Ce jeu est 100% textuel. Entrez <em>jouer</em> pour commencer, <em>quitter</em> si vous souhaitez quitter.',
                {},
                resp => {
                    if (resp == 'jouer') {
                        return 5;
                    }
                    return 4;
                }
            ),
            new DisplayTextStep("C'est parti!", true),
        ],
        'mountain_volcano',
        new PNJ(''),
        './assets/music/purple_planet_music_-_hope_-_dream_the_dream.mp3'
    ),
    vimEvent: new Event(
        [
            new DisplayTextStep('Bienvenue dans la maison de vim.', false, 1),
            new DisplayTextStep('Ho non, la porte se ferme ! Te voila piegé !', false, 2),
            new UserInputStep('Trouve comment sortir de là', {}, resp => {
                if ([':wq', ':q!', ':q'].includes(resp)) {
                    return 3;
                }
                return 2;
            }),
            new DisplayTextStep('Bravo, tu es sortie!', true),
        ],
        'vim',
        new PNJ('')
    ),
    endEvent: new Event(
        [
            new DisplayTextStep('Félicitation', false, 1),
            new DisplayTextStep('Vous êtes de retour à la maison', false, 2),
            new DisplayTextStep('Et vous avez gagné ...', false, 3),
            new DisplayTextStep(
                "une <em>fessé</em> de votre mère qui n'est pas contente et qui était <em>très inquiète</em>",
                false,
                4
            ),
            new UserInputStep('Entrez <em>quitter</em> pour arrêter le jeu, autre chose pour reprendre ...', {}, _ => {
                return 5;
            }),
            new DisplayTextStep('Bye bye !!!', true),
        ],
        'house',
        new PNJ('')
    ),
    gameOverEvent: new Event(
        [
            new DisplayTextStep('Vous êtes <em>MORT</em>', false, 1),
            new DisplayTextStep('<em>FIN DU JEU</em>', false, 2),
            new UserInputStep('Tapez <em>"rejouer"</em> pour recommencer', {}, resp => {
                if (resp == "rejouer") {
                    return 3;
                }
                return 2;
            }),
            new DisplayTextStep('NOUVELLE PARTIE', true)

        ],
        'cemetery',
        new PNJ(''),
    ),
    sessionEvents: [],
    currentEvent: null,
    currentEventIndex: 0,
    nbEvents: 1, // To adjust after
    init: () => {
        Game.loadAllEvents();
        Game.pickCurrEvents();
        Player.init();
    },

    loadAllEvents: () => {
        Game.allEvents.push(
            new Event(
                [
                    new DisplayTextStep('Bienvenue dans la maison de vim.', false, 1),
                    new DisplayTextStep('Ho non, la porte se ferme ! Te voila piegé !', false, 2),
                    new AttackStep('Vous attaquez', false, [3, 2, 4]),
                    new DisplayTextStep('Vous avancez vers le lieu suivant.', true),
                    new DisplayTextStep('Vous êtes mort... LOL!', true),
                ],
                'cemetery',
                new PNJ('Maurice'),
                './assets/music/purple_planet_music_-_cinematic_-_halo_effect.mp3'
            )
        );
    },

    pickCurrEvents: () => {
        let shuffledEvents = ArrayHelper.shuffle(Game.allEvents);
        Game.sessionEvents = shuffledEvents.slice(0, Game.nbEvents);
        Game.changeGameEvent(Game.startEvent);
    },
    nextTick: () => {
        Game.currentEvent.nextStep();
        if (Game.currentEvent.isFinished) {
            if (Game.currentEventIndex < Game.nbEvents) {
                Game.changeGameEvent(Game.sessionEvents[Game.currentEventIndex]);
                Game.currentEventIndex++;
            } else {
                if (Game.currentEvent != Game.endEvent && Game.currentEvent != Game.gameOverEvent) {
                    // display end
                    Game.changeGameEvent(Game.endEvent);
                } else {
                    Game.startEvent.reset();
                    Game.vimEvent.reset();
                    Game.endEvent.reset();
                    Game.gameOverEvent.reset();
                    // start a new game
                    Game.allEvents = [];
                    Game.init();
                }
            }
        }
    },
    changeGameEvent: event => {
        // stop current event music
        if (Game.currentEvent && Game.currentEvent.music) {
            Game.currentEvent.music.pause();
            Game.currentEvent.music.currentTime = 0;
        }
        Game.currentEvent = event;
        SceneService.personaAsset = event.persona.asset;
        BackgroundService.name = event.background;
        event.step.display();
        // play new music
        if (Game.currentEvent.music) {
            Game.currentEvent.music.play();
        }
    },
};
