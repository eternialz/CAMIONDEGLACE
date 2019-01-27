var song;

function preload() {
    song = loadSound('assets/music/purple_planet_music_-_hope_-_dream_the_dream.mp3');
}

function setup() {
    song.loop();
}

function mousePressed() {
    if (song.isPlaying()) {
        song.stop();
    } else {
        song.play();
    }
}
