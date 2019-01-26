const { app, BrowserWindow } = require('electron');

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({ width: 1280, height: 720, frame: false });

    win.setMenu(null);

    // and load the index.html of the app
    win.loadURL(`file://${__dirname}/index.html`);
    win.openDevTools();
}

app.on('ready', createWindow);