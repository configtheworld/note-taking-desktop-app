import { app, BrowserWindow } from 'electron';
const path = require('path');

function CreateWindow() {
  // Browser Window Configuration
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // load html
  mainWindow.loadFile('index.html');

  // IPCs

  // take value as text and turn it markdown then html 2
}

app.whenReady().then(() => {
  CreateWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) CreateWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
