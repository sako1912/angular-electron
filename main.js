const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");


let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  console.log(__dirname);
  
  //online
  //mainWindow.loadURL('http://127.0.0.1:4400')
   
  // offline( /dist/프로젝트명/index.html)
   mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/angular-electron/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
   // Open the DevTools.
   mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})