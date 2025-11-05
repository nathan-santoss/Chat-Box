let nome
const setName = () => {
    nome = document.getElementById('input-name').value
    document.getElementById('input-name').value
    document.getElementById('user').innerHTML = `Olá ${nome.toUpperCase()}`
    document.getElementById('chat').style.display = 'block'
    document.getElementById('nome-user').style.display = 'block'
    document.getElementById('identificar').style.display = 'none'
}

const enviarMensagem = () => {
    const msg = document.getElementById('mensagem-emissor').value
    if(msg.trim() === ''){return}
    document.getElementById('emissor').innerHTML += `${nome}: ${msg} <br>`
    window.api.enviarP1(mensagem)

}

receberMensagem = () => {
    const msg = window.api.receberP1(mensagem)
}

