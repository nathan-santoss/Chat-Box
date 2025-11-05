const setName = () => {
    const nome = document.getElementById('input-name').value
    document.getElementById('input-name').value
    document.getElementById('user').innerHTML = `Olá ${nome.toUpperCase()}`
}

const enviarMensagem = () => {
    const msg = document.getElementById('mensagem-emissor').value
    document.getElementById('emissor').innerHTML += `Você: ${msg} <br>`
}