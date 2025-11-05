import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api',{
    name: 'chat-box',
    enviarP1: (mensagem) => ipcRenderer.send('enviando-Mp1', mensagem),
    receberP1: (mensagem) => ipcRenderer.on('devolver-para-p1', mensagem),
    
    enviarP2: (mensagem) => ipcRenderer.send('enviando-Mp2', mensagem),
    receberP2: (mensagem) => ipcRenderer.on('devolver-para-p2', mensagem),
})