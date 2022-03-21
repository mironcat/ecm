const { contextBridge, ipcRenderer } = require('electron')
let i=0;
contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    saveContent: (content) => ipcRenderer.send('saveContent', content),
    //content: ipcRenderer.invoke("loadContent"),
    content: () => ipcRenderer.invoke("loadContent")
})