let listaDeNumeros = [];
let numeroMaximo = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
}

function mensagemnInicial() {
    textoNaTela('h1', 'Jogo do número secreto');
    textoNaTela('p', 'Escolha um número de 1 a 10');
}

mensagemnInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            textoNaTela('p', 'O número secreto é menor');
        } else {
            textoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
    
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumeros.length;

    if (quantidadeDeElementos == numeroMaximo) {
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemnInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}