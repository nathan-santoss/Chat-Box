import { app, BrowserWindow, ipcMain, nativeTheme, Menu } from "electron";
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
    // janela.webContents.openDevTools()
    janela1.loadFile(conteudoHTML)


    let menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    janela1.webContents.on('context-menu', () => {
        menu.popup({window: janela1})
    })
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
    let menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    const conteudoHTML = path.join(__dirname, '../app/p2/index2.html')
    // janela.webContents.openDevTools()
    janela2.loadFile(conteudoHTML)
    janela2.setMenu(null)
}

let janela_sobre
const criarJanela_sobre = () => {
    janela_sobre =  new BrowserWindow({
        width: 300, height: 300, resizable: false, maximizable: false, minimizable: false,
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    
    const conteudoHTML = path.join(__dirname, '../app/sobre/sobre.html')
    // janela.webContents.openDevTools()
    janela_sobre.loadFile(conteudoHTML)
    let menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    
    janela_sobre.setMenu(null)

}




const template = [
    {label: 'Arquivo',
        submenu: [
            {label: 'Aparência',
                submenu: [
                    {label: 'Mudar tema', click: () => mudarTema()}, // fim do submenu "tema"
                    {label: 'Zoom',
                        submenu: [
                            {label: 'Apliar', role: 'zoomin'},
                            {label: 'Reduzir', role: 'zoomout' }
                        ]
                    }// fim do submenu "Zoom"
                ]
            },// fim do sub-menu "aparência"
            {label: 'Nova Conversa', click: () => criarJanela_p2()}

        ]
    },// fim do submenu 'Arquivo'
    {label: 'Sobre', click: () => criarJanela_sobre()},
    {label: 'Sair', role: 'quit'}
]


app.whenReady().then(() => {
    criarJanela_p1()
})

ipcMain.on('enviando-Mp1', (event, mensagem, nome) =>{
    janela2.webContents.send('devolver-para-p2', mensagem,nome)
})

ipcMain.on('enviando-Mp2', (event, mensagem, nome) =>{
    janela1.webContents.send('devolver-para-p1', mensagem, nome)
})

const mudarTema = () => {
    if(nativeTheme.themeSource === 'dark'){nativeTheme.themeSource = 'light'}
    else{nativeTheme.themeSource = 'dark'}
}