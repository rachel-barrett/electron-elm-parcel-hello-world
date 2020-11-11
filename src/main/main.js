const { app, BrowserWindow } = require('electron') // import the app and BrowserWindow modules of the electron package

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(`file://${__dirname}/../renderer/index.html`)
  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)