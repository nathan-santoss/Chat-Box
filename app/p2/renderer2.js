

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
    window.api.enviarP2(msg, nome)
    document.getElementById('mensagem-emissor').value = ''

}
// função exclusiva para escrever no HTML a mensagem recebida 
const escreverMensagemRecebida = (mensagem, nome) => {
    document.getElementById('recebedor').innerHTML += `${nome}: ${mensagem} <br>`
}

window.api.receberP2((event, mensagem, nome) =>{
    escreverMensagemRecebida(mensagem, nome)
})