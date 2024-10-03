import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        autoHideMenuBar: true
    });

    // Load your Laravel app in Electron
    mainWindow.loadURL('http://localhost:8000'); // Replace with your Laravel URL

    // Open the DevTools (for debugging)
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
