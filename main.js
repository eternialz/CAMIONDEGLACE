const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 1280, height: 720 })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)