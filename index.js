// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const chatbot = require('./chatbot');
const path = require('node:path')
const puppeteer = require('puppeteer');

async function launchBrowser() {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--disable-extensions'],
    
  });
  // Use the browser instance here, e.g., pass it to the createWindow function
  createWindow();
}
                                                              
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets', '\\imagens\\janela.ico'), // Caminho para o seu ícone
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  console.log(__dirname); // Verifica o diretório atual
  mainWindow.loadFile(path.join(__dirname, 'pag.html'));


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.whenReady().then(() => {

  launchBrowser();
  chatbot.start();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if   
 (BrowserWindow.getAllWindows().length === 0) {
    
    launchBrowser();
  }
});
  //chatbot.start(io);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
