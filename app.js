const { app, BrowserWindow } = require('electron')
const { join } = require('path')
const { format } = require('url')

const createWindow = () => {
  let win = new BrowserWindow({
    width: 400
  , height: 300
  , icon: join(__dirname, 'icon.png')
  })

  win.loadURL(format({
    pathname: join(__dirname, 'index.html')
  , protocol: 'file'
  , slashes: true
  }))

  win.setMenu(null)

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
