const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

app.whenReady().then(() => {

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

const load_win = new BrowserWindow({
  width:400,
  height:400,
  frame: false,
  alwaysOnTop: true,
  resizable: false,
  backgroundColor: '#000F1A',

  
})
load_win.loadFile('load_w.html')

  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    minWidth: 1629,
    minHeight: 869,
    x: 0,
    y: 0,
    show: false, 
    backgroundColor: '#000F1A',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    }
  });

  mainWindow.loadFile('index.html'); 

  mainWindow.once('ready-to-show', () => {
    setTimeout(()=>{
      mainWindow.show(); 
      load_win.close()
    },2000)
    
  });
});
