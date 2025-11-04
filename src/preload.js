import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api',{
    name: 'chat-box'
})