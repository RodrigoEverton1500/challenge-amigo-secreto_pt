//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");

function adicionarAmigo() {    
    let novoAmigo = document.getElementById("amigo");
    if(novoAmigo.value == "") {
        alert("Insira o nome de um amigo");
        return;
    }

    amigos.push(novoAmigo.value);
    listarAmigos(novoAmigo);
}

function listarAmigos(novoAmigo) {
    let novoLi = document.createElement("li");
    novoLi.textContent = novoAmigo.value;
    listaAmigos.appendChild(novoLi);
    novoAmigo.value = "";
}

function sortearAmigo() {
    let indice = parseInt(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Amigo secreto: " + amigoSorteado;

    limparLista();
}

function limparLista() {
    listaAmigos.innerHTML = "";
    amigos = [];
}