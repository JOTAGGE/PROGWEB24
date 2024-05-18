const prompt = require ("prompt-sync")();

// Função para calcular potência sem usar a função de potência da linguagem (Questão 1)
function calcularPotencia() {
    let base = parseFloat(prompt("Digite o valor da base:"));
    let expoente = parseInt(prompt("Digite o valor do expoente:"));
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }
    console.log("O resultado da potência é: " + resultado);
}

// Função para contar números pares e ímpares (Questão 2)
function contarParesEImpares() {
    let numerosPares = 0;
    let numerosImpares = 0;
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
        if (numero % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    }
    console.log("Quantidade de números pares: " + numerosPares);
    console.log("Quantidade de números ímpares: " + numerosImpares);
}

// Função para gerar a sequência de Fibonacci até o n-ésimo termo (Questão 3)
function fibonacciAteN() {
    let n = parseInt(prompt("Digite o valor de n para a sequência de Fibonacci:"));
    let resultado = "Sequência de Fibonacci até o " + n + "º termo:\n";
    let anterior = 0;
    let atual = 1;
    for (let i = 0; i < n; i++) {
        resultado += atual + " ";
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    console.log(resultado);
}

// Função para gerar a sequência de Fibonacci até que o valor seja maior que 500 (Questão 3)
function fibonacciAteLimite() {
    let limite = 500;
    let resultado = "Sequência de Fibonacci até que o valor seja maior que " + limite + ":\n";
    let anterior = 0;
    let atual = 1;
    while (atual <= limite) {
        resultado += atual + " ";
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    console.log(resultado);
}

// Função para calcular o fatorial de um número (Questão 4)
function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(numero + "! = " + fatorial);
}

// Função para determinar menor valor, maior valor e soma dos valores (Questão 5)
function determinarMenorMaiorSoma() {
    let quantidadeNumeros = parseInt(prompt("Quantos números você deseja inserir?"));
    let menor = Infinity;
    let maior = -Infinity;
    let soma = 0;
    for (let i = 0; i < quantidadeNumeros; i++) {
        let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
        soma += numero;
    }
    console.log("Menor valor: " + menor);
    console.log("Maior valor: " + maior);
    console.log("Soma dos valores: " + soma);
}

// Função para determinar menor valor, maior valor e soma dos valores entre 0 e 1000 (Questão 6)
function determinarMenorMaiorSomaEntre0e1000() {
    let quantidadeNumeros = parseInt(prompt("Quantos números você deseja inserir?"));
    let menor = Infinity;
    let maior = -Infinity;
    let soma = 0;
    for (let i = 0; i < quantidadeNumeros; i++) {
        let numero = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
        if (numero >= 0 && numero <= 1000) {
            if (numero < menor) {
                menor = numero;
            }
            if (numero > maior) {
                maior = numero;
            }
            soma += numero;
        } else {
            console.log("Número fora do intervalo de 0 a 1000. Tente novamente.");
            i--; // Decrementa o contador para repetir a inserção deste número
        }
    }
    console.log("Menor valor: " + menor);
    console.log("Maior valor: " + maior);
    console.log("Soma dos valores: " + soma);
}

// Função para calcular o fatorial de um número até 16 (Questão 7)
function calcularFatorialAte16() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número para calcular o fatorial (limite até 16):"));
        if (numero < 0 || numero > 16) {
            console.log("Número fora do limite permitido. Tente novamente.");
        }
    } while (numero < 0 || numero > 16);
    
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(numero + "! = " + fatorial);
}

// Função para determinar se um número é primo (Questão 8)
function verificarNumeroPrimo() {
    let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));
    let ehPrimo = true;
    if (numero <= 1) {
        ehPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }
    if (ehPrimo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}

// Função para determinar os divisores de um número (Questão 9)
function determinarDivisores() {
    let numero = parseInt(prompt("Digite um número inteiro para determinar seus divisores:"));
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    if (divisores.length === 2) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo. Divisores: " + divisores.join(", "));
    }
}

// Função para mostrar os números primos até N (Questão 10)
function mostrarNumerosPrimosAteN() {
    let numero = parseInt(prompt("Digite um número inteiro para mostrar todos os números primos até ele:"));
    let divisoes = 0;
    let numerosPrimos = [];
    for (let i = 2; i <= numero; i++) {
        let ehPrimo = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            divisoes++;
            if (i % j === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            numerosPrimos.push(i);
        }
    }
    console.log("Números primos até " + numero + ": " + numerosPrimos.join(", "));
    console.log("Número de divisões: " + divisoes);
}

// Função principal
function main() {
    let opcao;
    do {
        opcao = parseInt(prompt("Escolha uma questão para executar:\n1. Calcular potência\n2. Contar números pares e ímpares\n3. Sequência de Fibonacci até n\n4. Calcular fatorial de um número\n5. Determinar menor, maior valor e soma\n6. Determinar menor, maior valor e soma entre 0 e 1000\n7. Calcular fatorial até 16\n8. Verificar se um número é primo\n9. Determinar divisores de um número\n10. Mostrar números primos até N\n0. Sair \n"));
        if (opcao === 1) {
            calcularPotencia();
        } else if (opcao === 2) {
            contarParesEImpares();
        } else if (opcao === 3) {
            let subOpcao = parseInt(prompt("Escolha o tipo de sequência de Fibonacci:\n1. Até n-ésimo termo\n2. Até que seja maior que 500"));
            if (subOpcao === 1) {
                fibonacciAteN();
            } else if (subOpcao === 2) {
                fibonacciAteLimite();
            } else {
                console.log("Opção inválida.");
            }
        } else if (opcao === 4) {
            calcularFatorial();
        } else if (opcao === 5) {
            determinarMenorMaiorSoma();
        } else if (opcao === 6) {
            determinarMenorMaiorSomaEntre0e1000();
        } else if (opcao === 7) {
            calcularFatorialAte16();
        } else if (opcao === 8) {
            verificarNumeroPrimo();
        } else if (opcao === 9) {
            determinarDivisores();
        } else if (opcao === 10) {
            mostrarNumerosPrimosAteN();
        } else if (opcao === 0) {
            console.log("Encerrando o programa.");
            process.exit();
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
}

// Chamando a função principal para iniciar o programa
main();
