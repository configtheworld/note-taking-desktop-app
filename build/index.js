"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require('path');
function CreateWindow() {
    // Browser Window Configuration
    var mainWindow = new electron_1.BrowserWindow({
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
}
electron_1.app.whenReady().then(function () {
    CreateWindow();
    electron_1.app.on('activate', function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            CreateWindow();
    });
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
