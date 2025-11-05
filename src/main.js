import { app, BrowserWindow, ipcMain } from "electron";
import * as path from 'path'
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let janela1 = null
const criarJanela_p1 = () => {
    janela1 =  new BrowserWindow({
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
    janela1.setMenu(null)
    // janela.webContents.openDevTools()
    janela1.loadFile(conteudoHTML)
}
let janela2 = null
const criarJanela_p2 = () => {
    janela2 =  new BrowserWindow({
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
    janela2.setMenu(null)
    // janela.webContents.openDevTools()
    janela2.loadFile(conteudoHTML)
}



app.whenReady().then(() => {
    criarJanela_p1()
    criarJanela_p2()
})

ipcMain.on('enviando-Mp1', (event, mensagem, nome) =>{
    janela2.webContents.send('devolver-para-p2', mensagem,nome)
})

ipcMain.on('enviando-Mp2', (event, mensagem, nome) =>{
    janela1.webContents.send('devolver-para-p1', mensagem, nome)
})

