const jogo = document.querySelector(".botaoenviar");
const valorDigitado = document.querySelector(".input-valordigitado");
const tabelaResultado = document.querySelector(".tabela-resultado");
var i = 1;

valorSorteio = Math.random() * 100;

jogo.addEventListener("click", function (event) {
    if (valorDigitado.value > 100) {
        alert("Digite um número entre 1 e 100")
    } else {
        if (i > 10) {
            alert("Não tente mais. Dê um refresh na tela");
        } else if (valorDigitado.value == Math.trunc(valorSorteio)) {
            escreveTela(
                valorDigitado.value,
                "Acertou",
                "Dê um refresh e jogue novamente"
            );
            i = 11;
            alert("Acertou");
        } else if (i == 10) {
            escreveTela(
                valorDigitado.value,
                "Terminou",
                "Dê um refresh e jogue novamente"
            );
            i++;
        } else {
            verificaPerto(valorDigitado.value, Math.trunc(valorSorteio));
            i++;
        }

    }
});

valorDigitado.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (valorDigitado.value > 100) {
            alert("Digite um número entre 1 e 100")
        } else {
            if (i > 10) {
                alert("Não tente mais. Dê um refresh na tela");
            } else if (valorDigitado.value == Math.trunc(valorSorteio)) {
                escreveTela(
                    valorDigitado.value,
                    "Acertou",
                    "Dê um refresh e jogue novamente"
                );
                i = 11;
                alert("Acertou");
            } else if (i == 10) {
                escreveTela(
                    valorDigitado.value,
                    "Terminou",
                    "Dê um refresh e jogue novamente"
                );
                i++;
            } else {
                verificaPerto(valorDigitado.value, Math.trunc(valorSorteio));
                i++;
            }
    
        }
    }
});

function escreveTela(numerodigitado, texto, instrucao) {
    const novaLinha = document.createElement("tr");
    const resultadoPassagem = document.createElement("td");
    const numeroDigitado = document.createElement("td");
    const resultadoTexto = document.createElement("td");
    const resultadoInstrucao = document.createElement("td");
    resultadoPassagem.innerHTML = i;
    numeroDigitado.innerHTML = numerodigitado;
    resultadoTexto.innerHTML = texto;
    resultadoInstrucao.innerHTML = instrucao;
    novaLinha.appendChild(resultadoPassagem);
    novaLinha.appendChild(numeroDigitado);
    novaLinha.appendChild(resultadoTexto);
    novaLinha.appendChild(resultadoInstrucao);
    tabelaResultado.appendChild(novaLinha);
}

function verificaPerto(valorDigitado, valorSorteio) {
    if (valorDigitado > valorSorteio) {
        distancia = valorDigitado - valorSorteio;
        if (distancia < 11) {
            instrucao = "O número está pra trás e você está bem perto";
        } else if (distancia < 31) {
            instrucao = "O número está pra trás e você está um pouco perto";
        } else {
            instrucao = "O número está pra trás e você está longe";
        }
    } else {
        distancia = valorSorteio - valorDigitado;
        if (distancia < 11) {
            instrucao = "O número está pra frente e você está bem perto";
        } else if (distancia < 31) {
            instrucao = "O número está pra frente e você está um pouco perto";
        } else {
            instrucao = "O número está pra frente e você está longe";
        }
    }
    escreveTela(valorDigitado, "Errou", instrucao);
}