function calculoAdocao(){
    const pesoInput = document.getElementById('peso');
    const idadeInput = document.getElementById('idade');
    const peso = parseInt(pesoInput.value);
    const idade = parseInt(idadeInput.value);
    let notaFinal = 10;
    const resultadoCalculoPesoIdade = document.getElementById('resultadoCalculoPesoIdade'); // Corrigido o id
    pesoInput.value = ""; // Limpa o campo de peso
    idadeInput.value = ""; // Limpa o campo de idade

    // Corrigido: primeiro verifica o maior valor
    if (peso > 20){
        notaFinal -= 4;    
    }
    else if (peso > 10){ 
        notaFinal -= 2;
    }

    if (idade >= 14){
        notaFinal -= 4;
    }
    else if (idade >= 8){
        notaFinal -= 2;
    }

    if (notaFinal > 7){
       resultadoCalculoPesoIdade.innerHTML = "A probabilidade de adoção é alta";
       resultadoCalculoPesoIdade.style.color = "green"; // Texto verde para alta probabilidade
       resultadoCalculoPesoIdade.style.fontWeight = "bold"; // Deixa em negrito
       resultadoCalculoPesoIdade.style.fontSize = "27px"; // Deixa em negrito
    }
    
    else if (notaFinal >= 5 && notaFinal <= 7){
       resultadoCalculoPesoIdade.innerHTML = "A probabilidade de adoção é média";
       resultadoCalculoPesoIdade.style.color = "orange"; // Texto verde para alta probabilidade
       resultadoCalculoPesoIdade.style.fontWeight = "normal"; // Deixa em negrito
       resultadoCalculoPesoIdade.style.fontSize = "27px"; // Deixa em negrito
    }
    else {
        resultadoCalculoPesoIdade.innerHTML = "A probabilidade de adoção é baixa";
        resultadoCalculoPesoIdade.style.color = "red"; // Texto verde para alta probabilidade
        resultadoCalculoPesoIdade.style.fontWeight = "bold"; // Deixa em negrito
        resultadoCalculoPesoIdade.style.fontSize = "27px"; // Deixa em negrito
    }
}
function limparResultado() {
    resultadoCalculoPesoIdade.innerHTML = ''; // Limpa o resultado
}
