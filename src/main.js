import { app, BrowserWindow, ipcMain } from "electron";
import * as path from 'path'
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const criarJanela_p1 = () => {
    const janela =  new BrowserWindow({
        width: 800, height: 500,
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    const conteudoHTML = path.join(__dirname, '../app/p1/index1.html')
    janela.setMenu(null)
    // janela.webContents.openDevTools()
    janela.loadFile(conteudoHTML)
}
const criarJanela_p2 = () => {
    const janela =  new BrowserWindow({
        width: 800, height: 500,
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    const conteudoHTML = path.join(__dirname, '../app/p2/index2.html')
    janela.setMenu(null)
    // janela.webContents.openDevTools()
    janela.loadFile(conteudoHTML)
}



app.whenReady().then(() => {
    criarJanela_p1()
    // criarJanela_p2()
})
