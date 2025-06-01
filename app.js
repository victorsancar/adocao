function calculoAdocao(){
    const pesoInput = document.getElementById('peso');
    const idadeInput = document.getElementById('idade');
    const peso = parseInt(pesoInput.value);
    const idade = parseInt(idadeInput.value);
    let notaFinal = 10;
    const resultadoCalculoPesoIdade = document.getElementById('resultadoCalculoPesoIdade'); // Corrigido o id

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
    }
    else if (notaFinal >= 5 && notaFinal <= 7){
       resultadoCalculoPesoIdade.innerHTML = "A probabilidade de adoção é média";
    }
    else {
        resultadoCalculoPesoIdade.innerHTML = "A probabilidade de adoção é baixa";
    }
}
