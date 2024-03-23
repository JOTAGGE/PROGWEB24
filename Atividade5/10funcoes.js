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

function caixaAlta() {
    var txt = prompt("Digite um texto: ");
    var txtUpper = txt.toUpperCase();
    console.log("Seu texto original: ", txt);
    console.log("Seu texto em caixa alta: ", txtUpper);
}

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

function arrayInvertido() {
    console.log("vamos inverter as coisas.");
    var n1 = prompt("Digite um numero: ");
    var n2 = prompt("Digite outro numero: ");
    var n3 = prompt("Digite outro numero: ");
    let meuArray = [n1, n2, n3];
meuArray.reverse();

console.log(meuArray); 

}

function porcentagem(valor, porcento, acrescimo) {
    valor = prompt("Qual o valor?");
    porcento = prompt("Qual a porcentagem?");
    acrescimo = valor * (porcento/100);
    console.log("O Valor acrescido é de: ", acrescimo);
}

function palidromo() {
    var palavra;
    var palavraInvertida = palavra.split("").reverse().join();
    if (palavra === palavraInvertida) {
        console.log(true)    
    } else{ console.log(false)}
    
    
    
}

//bemVindo();
//imparOuPar();
//MediaAritmetica();
//caixaAlta();
//numeroPrimo();
//arrayInvertido();
//porcentagem();
palidromo();