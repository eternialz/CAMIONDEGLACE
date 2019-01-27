const { app, BrowserWindow } = require('electron');
var path = require('path');

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1280,
        height: 757,
        title: 'Camion De Glace - GGJ2019',
        icon: path.join(__dirname, 'assets/icons/128x128.png'),
    });

    win.setMenu(null);

    // and load the index.html of the app
    win.loadURL(`file://${__dirname}/index.html`);
    //win.openDevTools();
}
// allow to play sound without interact
app.commandLine.appendSwitch('--autoplay-policy','no-user-gesture-required');
app.on('ready', createWindow);
