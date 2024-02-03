let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNalista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
        
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

 




/*function calcularImc(){
    let peso = parseFloat(prompt('Digite seu peso'));
    let altura = parseFloat(prompt('Digite sua altura'));
    let mediaImc = peso / (altura ** 2);
    console.log(mediaImc);
    
    if(mediaImc < 18.5){
        alert('Você está abaixo do peso');
    } else{
        if(mediaImc > 24.9){
            alert('Você está acima do peso');
        }else{
            alert('Você está no peso ideal');
        }
    }
 }

 calcularImc();

 /*function fatoralizador(){
    let numeroFat = parseInt(prompt('Digite um número para ser fatorado'));
    let fatorando = parseInt(1);
    let resultado = parseInt(1);
    
    while(fatorando <= numeroFat){
        resultado = resultado * fatorando;
        fatorando++;
    }
    
    alert(resultado);
 }

 fatoralizador();*/

/*function cotarValor(){
    let valorDolar = parseFloat(prompt('Digita o um valor em dolar'));
    let cotacaoDolar = parseFloat(4.80);
    let valorReais = (valorDolar * cotacaoDolar);
    alert(`o valor em reais é ${valorReais}`);
}

cotarValor();*/

