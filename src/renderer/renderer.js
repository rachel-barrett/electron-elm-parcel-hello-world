const ipcRenderer = require('electron').ipcRenderer

reply = ipcRenderer.sendSync('channel','Who should I say hello from?')

console.log(reply) // logs the reply message to web developer console
