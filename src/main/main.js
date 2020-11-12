const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipcMain = electron.ipcMain

const isDev = !app.isPackaged

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${__dirname}/../../parcel-build/prd/index.html`
    )
  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)

ipcMain.on('channel', (event, args) => {
  console.log(args) //logs the message to terminal
  event.returnValue = 'Hello from the main process!'
})
