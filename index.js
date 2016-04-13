var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on("ready", function() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		fullscreen: true
	});
	
	mainWindow.setMenu(null);
	
	mainWindow.loadURL("file://" + __dirname + "/index.html");
});