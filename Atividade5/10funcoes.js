const prompt = require ("prompt-sync")();

//questão 1

function bemVindo() {
    console.log("Bem Vindo");
}

//questão 2

function imparOuPar(params) {
    console.log("Vamos ver se seu numero é par ou impar (par = true; impar = false)")
    var n1 = parseFloat(prompt("Digite um número: "));
    if (n1%2 == 0) {
        console.log(true);
    } else{console.log(false);}
    
}

//questão 3

function MediaAritmetica() {
    let n1 = parseFloat(prompt("Digite o numero 1: "));
    let n2 = parseFloat(prompt("Digite o numero 2: "));
    let n3 = parseFloat(prompt("Digite o numero 3: "));
    let n4 = parseFloat(prompt("Digite o numero 4: "));
    let n5 = parseFloat(prompt("Digite o numero 5: "));
    var listaDeNumeros = [n1,n2,n3,n4,n5];
    var somaDeArray = listaDeNumeros[0] + listaDeNumeros[1] + listaDeNumeros[2]+ listaDeNumeros[3] + listaDeNumeros[4];
    var mediaAritmetica = somaDeArray / 5;
    console.log(somaDeArray);
    console.log("A Média aritmética da sua lista é: ", mediaAritmetica);
}


//questao 4
 
function caixaAlta() {
    var txt = prompt("Digite um texto: ");
    var txtUpper = txt.toUpperCase();
    console.log("Seu texto original: ", txt);
    console.log("Seu texto em caixa alta: ", txtUpper);
}

//questao 5

function numeroPrimo() {
    var numero = prompt("Digite um número para ver se ele é primo: ");
    if (numero <= 1) {
        console.log(false);
    }
    if (numero <= 3) {
        console.log(true);
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        console.log(false);
    } else{console.log(true)}

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            console.log(false)
        }
    }
    
}

//questao 6

function arrayInvertido() {
    console.log("vamos inverter as coisas.");
    var n1 = prompt("Digite um numero: ");
    var n2 = prompt("Digite outro numero: ");
    var n3 = prompt("Digite outro numero: ");
    let meuArray = [n1, n2, n3];
meuArray.reverse();

console.log(meuArray); 

}

//questao 7

function porcentagem(valor, porcento, acrescimo) {
    valor = prompt("Qual o valor?");
    porcento = prompt("Qual a porcentagem?");
    acrescimo = valor * (porcento/100);
    console.log("O Valor acrescido é de: ", acrescimo);
}

//questao 8

function palidromo() {
    var palavra = prompt("Digite uma palavra: ");
    var palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        console.log(true)    
    } else{ console.log(false)}

}

//questao 9

function decimalParaBinario(numero) {
    numero = parseFloat(prompt("digite um número: "));
    if (numero === 0) {
        console.log("0");
    }

    let binario = "";
    
    // Algoritmo de divisão sucessiva para converter para binário
    while (numero > 0) {
        // O resto da divisão por 2 é o próximo dígito binário
        binario = (numero % 2) + binario;
        // Divida o número por 2 para continuar a conversão
        numero = Math.floor(numero / 2);
    }

    console.log(binario);
    
}


//questao 10

function calcularFatorial() {
    let numero = prompt("Digite um número para calcular o fatorial:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        console.log("Por favor, insira um número inteiro positivo válido.");
        return;
    }

    console.log("O fatorial de " + numero + " é:", calcularFatorial(numero));
}

//-------------------------------------------------------

function menu() {
    console.log("Escolha uma das opções abaixo:");
    console.log("1. Bem-vindo");
    console.log("2. Par ou Ímpar");
    console.log("3. Média Aritmética");
    console.log("4. Caixa Alta");
    console.log("5. Número Primo");
    console.log("6. Array Invertido");
    console.log("7. Porcentagem");
    console.log("8. Palíndromo");
    console.log("9. Decimal para Binário");
    console.log("10. Calcular Fatorial");
    console.log("0. Sair");

    let opcao = prompt("Digite o número da opção desejada:");

    switch (opcao) {
        case "1":
            console.log("Bem Vindo");
            break;
        case "2":
            imparOuPar();
            break;
        case "3":
            mediaAritmetica();
            break;
        case "4":
            caixaAlta();
            break;
        case "5":
            numeroPrimo();
            break;
        case "6":
            arrayInvertido();
            break;
        case "7":
            porcentagem();
            break;
        case "8":
            palindromo();
            break;
        case "9":
            decimalParaBinario();
            break;
        case "10":
            calcularFatorial();
            break;
        case "0":
            console.log("Saindo do programa.");
            return;
        default:
            console.log("Opção inválida. Por favor, escolha novamente.");
    }

    menu(); // Exibir o menu novamente após executar a opção selecionada
}

// Chamada da função de menu para iniciar o programa
menu();