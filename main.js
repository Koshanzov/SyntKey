console.log("app is running");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        resizable: false,
        title: "SyntKey",
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file',
        slashes: true
    }));

    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });

    win.once('ready-to-show', () => {
        win.webContents.setZoomFactor(1.1);
    });
}

app.on('ready', function(){
    createWindow();
    electron.Menu.setApplicationMenu(null);
})