const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true, 
            enableRemoteModule: false,
            nodeIntegration: true  
        }
    });

    mainWindow.loadFile('index.html');
});
