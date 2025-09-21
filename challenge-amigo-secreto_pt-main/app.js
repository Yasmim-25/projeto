let listaAmigos = [];
let amigosDisponiveis = []; // lista auxiliar para controlar repetição

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();
    
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    listaAmigos.push(nome);
    amigosDisponiveis = [...listaAmigos]; // atualiza a lista de disponíveis
    atualizarListaAmigos();
    inputAmigo.value = '';
    inputAmigo.focus();
}

function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'amigo-item';
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');

    // 🔔 Verificação do mínimo de 3 amigos
    if (listaAmigos.length < 3) {
        alert('É necessário ter pelo menos 3 amigos na lista para sortear!');
        return;
    }
    
    if (amigosDisponiveis.length === 0) {
        alert('Todos os amigos já foram sorteados! Reinicie para começar de novo.');
        return;
    }
    
    // Sorteia um índice aleatório da lista de disponíveis
    const indice = Math.floor(Math.random() * amigosDisponiveis.length);
    const sorteado = amigosDisponiveis[indice];
    
    // Remove o sorteado da lista de disponíveis
    amigosDisponiveis.splice(indice, 1);
    
    // Mostra o resultado
    const li = document.createElement('li');
    li.textContent = `O nome sorteado foi: ${sorteado}`;
    li.className = 'result-item';
    resultadoElement.appendChild(li);
}

function Reiniciar() {
    listaAmigos = [];
    amigosDisponiveis = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
    document.querySelector('.button-draw').disabled = false;
    document.getElementById('amigo').focus();
}

// Adiciona evento de tecla Enter no input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});
