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
    // Solicitar ao usuário que insira um número
    let numero = prompt("Digite um número para calcular o fatorial:");

    // Verificar se o usuário cancelou a entrada ou inseriu um valor inválido
    if (numero === null || isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero) < 0) {
        return "Erro: Por favor, insira um número inteiro positivo válido.";
    }

    // Converter o número para inteiro
    numero = parseInt(numero);

    // Inicializar o resultado do fatorial como 1
    let fatorial = 1;

    // Calcular o fatorial
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}






//-------------------------------------------------------



let opcao = parseInt(prompt("Escolha uma opção:\n1. Bem-vindo\n2. Par ou Ímpar\n3. Média Aritmética\n4. Caixa Alta\n5. Número Primo\n6. Array Invertido\n7. Porcentagem\n8. Palíndromo\n9. Decimal para Binário\n10. Calcular Fatorial\n0. fechar programa\n"));

if (opcao === 1) {
    bemVindo();
} else if (opcao === 2) {
    imparOuPar();
} else if (opcao === 3) {
    mediaAritmetica();
} else if (opcao === 4) {
    caixaAlta();
} else if (opcao === 5) {
    numeroPrimo();
} else if (opcao === 6) {
    arrayInvertido();
} else if (opcao === 7) {
    porcentagem();
} else if (opcao === 8) {
    palidromo();
} else if (opcao === 9) {
    decimalParaBinario();
} else if (opcao === 10) {
    // Chamar a função e exibir o resultado
let resultado = calcularFatorial();
console.log("O fatorial é:", resultado);
} else if (opcao === 0){
    process.exit();
}