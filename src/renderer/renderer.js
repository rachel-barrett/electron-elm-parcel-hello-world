const ipcRenderer = window.require('electron').ipcRenderer // Note need to use window.require instead of require here to avoid conflict between electron and browserify's require function. This is a bit of a hack and apparently should be fixed in parcel 2 when using --target electron.

reply = ipcRenderer.sendSync('channel','Who should I say hello from?')

console.log(reply) // logs the reply message to web developer console
