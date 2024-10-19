const taxa = 10/100;
        let valor = prompt('Valor do jantar: ');

        function vFinal(t, v){
            return ((v*t) + Number(v));
        }
        
        document.write(`O valor final é: R$ ${(vFinal(taxa, valor)).toFixed(2)}`);