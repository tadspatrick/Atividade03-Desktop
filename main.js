const { app, BrowserWindow } = require('electron')

let mainWindow, childWindow, thirdWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    x: 100,
    y: 200,
    webPreferences: { nodeIntegration: true },
    show: true,
  })

  mainWindow.loadFile('index.html')
  //mainWindow.loadURL('https://www.google.com.br')
  //mainWindow.maximize();
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.once('close', () => {
      mainWindow = null;
  });

  // Secondary Window

  childWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: { nodeIntegration: true },
    show: true,
    parent: mainWindow,
  })

  childWindow.loadFile('index.html')
  childWindow.once('ready-to-show', () => {
    childWindow.show();
  });

  childWindow.once('close', () => {
    childWindow = null;
    mainWindow.maximize();
  });

  // Thirdy Window

  thirdWindow = new BrowserWindow({
    width: 800,
    height: 800,
    x: 50,
    y: 100,
    webPreferences: { nodeIntegration: true },
    show: true,
    movable: false,
    opacity: 0.8
  })

  thirdWindow.loadFile('index.html')
  thirdWindow.once('ready-to-show', () => {
    thirdWindow.show();
  });

  thirdWindow.once('close', () => {
    thirdWindow = null;
  });

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})





  



