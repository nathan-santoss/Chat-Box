import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api',{
    name: 'chat-box',
    enviarP1: (mensagem, nome) => ipcRenderer.send('enviando-Mp1', mensagem, nome),
    receberP1: (mensagem, nome) => ipcRenderer.on('devolver-para-p1', mensagem, nome),
    
    enviarP2: (mensagem, nome) => ipcRenderer.send('enviando-Mp2', mensagem, nome),
    receberP2: (mensagem, nome) => ipcRenderer.on('devolver-para-p2', mensagem, nome),
})