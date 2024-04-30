const prompt = require ('prompt-sync')();

// Exercício 1: Soma dos primeiros N números inteiros positivos
function somaAteN(N) {
    if (N === 1) {
        return 1;
    } else {
        return N + somaAteN(N - 1);
    }
}

// Exercício 2: Cálculo recursivo específico
function calculoEspecifico(N) {
    if (N === 0) {
        return 0;
    } else {
        return 2 * N + calculoEspecifico(N - 1);
    }
}

// Exercício 3: Potência sem o uso de Math.pow()
function potencia(x, k) {
    if (k === 0) {
        return 1;
    } else {
        return x * potencia(x, k - 1);
    }
}

// Exercício 4: N-ésimo número da sequência de Tribonacci
function tribonacci(N) {
    if (N === 0) {
        return 0;
    } else if (N === 1 || N === 2) {
        return 1;
    } else {
        return tribonacci(N - 1) + tribonacci(N - 2) + tribonacci(N - 3);
    }
}

// Exercício 5: N-ésimo número de Pell
function pell(N) {
    if (N === 0 || N === 1) {
        return N;
    } else {
        return 2 * pell(N - 1) + pell(N - 2);
    }
}

// Testando as funções com input do usuário
var input = prompt("Digite um número inteiro positivo:");

var N = parseInt(input);

console.log("Soma dos primeiros N números inteiros positivos:", somaAteN(N));
console.log("Resultado do cálculo específico:", calculoEspecifico(N));
console.log("Potência:", potencia(2, 3)); // Exemplo com x=2 e k=3
console.log("N-ésimo número da sequência de Tribonacci:", tribonacci(N));
console.log("N-ésimo número de Pell:", pell(N));
