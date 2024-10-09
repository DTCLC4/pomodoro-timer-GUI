// Import necessary modules from Electron
const { app, BrowserWindow } = require('electron'); // Import the app and BrowserWindow classes
const path = require('path'); // Import path module for handling file paths

// Function to create a new browser window
function createWindow() {
  // Create a new instance of BrowserWindow with specified dimensions and settings
  const win = new BrowserWindow({
    width: 800, // Set the width of the window
    height: 600, // Set the height of the window
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Specify the path to the preload script
    }
  });

  // Load the HTML file into the window (the main UI of the app)
  win.loadFile('dist/index.html');
}

// When the app is ready, create the browser window
app.whenReady().then(createWindow);

// Handle the event when all windows are closed
app.on('window-all-closed', () => {
  // If the platform is not macOS, quit the app
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Handle the event when the app is activated (macOS specific)
app.on('activate', () => {
  // If there are no open windows, create a new one
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
