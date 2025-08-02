
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value; 
}

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert('Por favor, digite um nome!');
        return; 
    }
    listaDeAmigos.push(nome);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = listaDeAmigos.join(', ');
    document.getElementById('amigo').value = '';    
}
function sortearAmigo() {
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
