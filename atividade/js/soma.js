let n1 = prompt('Informe o primeiro número: ');
let n2 = prompt('Informe o segundo número: ');

    function soma(num1, num2){
        return (Number(num1) + Number(num2));
    }

    document.write(`O valor final é: ${(soma(n1, n2))}`);