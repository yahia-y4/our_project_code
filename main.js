const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        minWidth: 1629,
        minHeight: 869,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true, 
            enableRemoteModule: false,
            nodeIntegration: true  
        }
    });

    mainWindow.maximize()
    mainWindow.loadFile('index.html');
});
