import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api',{
    name: 'chat-box',
    enviar: (mensagem) => ipcRenderer.send('enviando-Mp1', mensagem),
    devolver: (mensagem) => ipcRenderer.on('devolver-para-p2', mensagem)
    
})