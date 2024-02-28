const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('keytar', {
    getPassword : () =>ipcRenderer.invoke('getPassword'),
    setPassword: (val) =>ipcRenderer.invoke('setPassword', val),
    deletePassword: () =>ipcRenderer.invoke('deletePassword'),
    findCredentials: () =>ipcRenderer.invoke('findCredentials'),
    findPassword: () =>ipcRenderer.invoke('findPassword')
})

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})