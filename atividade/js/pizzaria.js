function contaFinal(){
    let valor = document.getElementById('conta').value;
    let qtd = document.getElementById('pagantes').value;
    
    alert(`O valor por pessoa é: R$ ${(valor / qtd).toFixed(2)}`);
}