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
    document.getElementById('emissor').innerHTML += `${nome}: ${msg} <br>`
    
}

window.addEventListener('devolver-para-p2', (event) => {
    const msg = window.api.devolver(mensagem)
    receberMensagem(msg)
})


receberMensagem = (mensagem) => {
    document.getElementById('recebedor').innerHTML = `FULANO: ${mensagem}`
}

