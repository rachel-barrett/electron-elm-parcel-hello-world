import { Elm } from './elm/Main.elm'

const ipcRenderer = window.require('electron').ipcRenderer // Note need to use window.require instead of require here to avoid conflict between electron and browserify's require function. This is a bit of a hack and apparently should be fixed in parcel 2 when using --target electron.

var app = Elm.Main.init({
  node: document.getElementById('root')
})

app.ports.sendIpc.subscribe(function(message) {
  const reply = ipcRenderer.sendSync('channel', message)
  app.ports.receiveIpc.send(reply)
})

