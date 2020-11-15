### Steps to run the project:

```npm start```

### Steps to create this project:

[Electron quick start](https://www.electronjs.org/docs/tutorial/quick-start)

1. Initialise the 'package.json' file of the node project with `npm init -y`.
2. Install electron as a local dev dependency in the 'package.json’ with `npm install —save-dev electron`.
3. Manually create a basic 'main.js' and 'index.html' for a basic electron application.
4. Add an npm script for starting the project with `electron .`.
---
5. Separate into main and renderer processes
6. Use separate directories for main and renderer processes
7. Make main and renderer process communicate via ipc.
---
8. Use parcel to bundle the front end. For this, need to run the following command to add some dev dependencies: `npm install -save-dev parcel-bundler concurrently cross-env wait-on`
---
9. Use Elm instead of pure js.
