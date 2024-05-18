const prompt = require ("prompt-sync")();

// Função para solicitar uma nota válida (Questão 1)
function pedirNota() {
    let nota;
    do {
        nota = parseFloat(prompt("Digite uma nota entre zero e dez:"));
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert("Nota inválida. Digite novamente.");
        }
    } while (nota < 0 || nota > 10 || isNaN(nota));
    console.log("Nota válida: " + nota);
}

// Função para validar usuário e senha (Questão 2)
function validarUsuarioSenha() {
    let usuario, senha;
    do {
        usuario = prompt("Digite o nome de usuário:");
        senha = prompt("Digite a senha:");
        if (usuario === senha) {
            alert("Erro: senha não pode ser igual ao nome de usuário. Tente novamente.");
        }
    } while (usuario === senha);
    console.log("Usuário e senha válidos.");
}

// Função para validar informações (Questão 3)
function validarInformacoes() {
    let nome, idade, salario, sexo, estadoCivil;
    do {
        nome = prompt("Digite o nome (maior que 3 caracteres):");
        idade = parseInt(prompt("Digite a idade (entre 0 e 150):"));
        salario = parseFloat(prompt("Digite o salário (maior que zero):"));
        sexo = prompt("Digite o sexo ('f' ou 'm'):");
        estadoCivil = prompt("Digite o estado civil ('s', 'c', 'v' ou 'd'):");
        if (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== 'f' && sexo !== 'm') || (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd')) {
            alert("Erro: Alguma informação é inválida. Verifique e tente novamente.");
        }
    } while (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== 'f' && sexo !== 'm') || (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd'));
    console.log("Informações válidas.");
}

// Função para calcular anos para igualar populações (Questão 4)
function calcularAnosParaIgualar() {
    let populacaoA = 80000;
    let populacaoB = 200000;
    let taxaCrescimentoA = 0.03;
    let taxaCrescimentoB = 0.015;
    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA);
        populacaoB *= (1 + taxaCrescimentoB);
        anos++;
    }
    console.log("Serão necessários " + anos + " anos para que a população do país A ultrapasse ou iguale a população do país B.");
}

// Função para calcular anos para igualar populações com entrada do usuário (Questão 5)
function calcularAnosParaIgualarUsuario() {
    let populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB;
    do {
        populacaoA = parseInt(prompt("Digite a população do país A:"));
        populacaoB = parseInt(prompt("Digite a população do país B:"));
        taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento do país A (em decimal):"));
        taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento do país B (em decimal):"));
        if (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0) {
            alert("Erro: As populações e as taxas de crescimento devem ser números positivos. Tente novamente.");
        }
    } while (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0);
    
    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA);
        populacaoB *= (1 + taxaCrescimentoB);
        anos++;
    }
    console.log("Serão necessários " + anos + " anos para que a população do país A ultrapasse ou iguale a população do país B.");
}

// Função para imprimir números de 1 a 20 um abaixo do outro (Questão 6)
function imprimirNumerosAbaixo() {
    let numeros = "";
    for (let i = 1; i <= 20; i++) {
        numeros += i + "\n";
    }
    console.log(numeros);
}

// Função para imprimir números de 1 a 20 um ao lado do outro (Questão 6)
function imprimirNumerosLadoALado() {
    let numeros = "";
    for (let i = 1; i <= 20; i++) {
        numeros += i + " ";
    }
    console.log(numeros);
}

// Função para encontrar o maior número entre 5 números (Questão 7)
function encontrarMaiorNumero() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(parseFloat(prompt("Digite o número " + (i + 1) + ":")));
    }
    let maior = Math.max(...numeros);
    console.log("O maior número é: " + maior);
}

// Função para calcular soma e média de 5 números (Questão 8)
function calcularSomaEMedia() {
    let numeros = [];
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        numeros.push(parseFloat(prompt("Digite o número " + (i + 1) + ":")));
        soma += numeros[i];
    }
    let media = soma / 5;
    console.log("A soma dos números é: " + soma + "\nA média dos números é: " + media);
}

// Função para imprimir números ímpares entre 1 e 50 (Questão 9)
function imprimirNumerosImpares() {
    let numerosImpares = "";
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            numerosImpares += i + "\n";
        }
    }
    console.log(numerosImpares);
}

// Função para gerar números inteiros entre dois números (Questão 10 e 11)
function gerarNumerosInteirosEExibirSoma() {
    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
    let soma = 0;
    let numerosGerados = "";
    if (numero1 < numero2) {
        for (let i = numero1 + 1; i < numero2; i++) {
            soma += i;
            numerosGerados += i + " ";
        }
    } else {
        for (let i = numero2 + 1; i < numero1; i++) {
            soma += i;
            numerosGerados += i + " ";
        }
    }
    console.log("Números gerados: " + numerosGerados + "\nSoma dos números gerados: " + soma);
}

// Função para gerar tabuada de um número (Questão 12)
function gerarTabuada() {
    let numero = parseInt(prompt("Digite um número inteiro para gerar a tabuada (entre 1 e 10):"));
    let tabuada = "Tabuada de " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
        tabuada += numero + " X " + i + " = " + (numero * i) + "\n";
    }
    console.log(tabuada);
}

// Função principal
function main() {
    let opcao;
    do {
        opcao = parseInt(prompt("Escolha uma questão para executar:\n1. Pedir uma nota válida\n2. Validar usuário e senha\n3. Validar informações\n4. Calcular anos para igualar populações (fixas)\n5. Calcular anos para igualar populações (entradas do usuário)\n6. Imprimir números de 1 a 20\n7. Encontrar o maior número entre 5 números\n8. Calcular soma e média de 5 números\n9. Imprimir números ímpares entre 1 e 50\n10. Gerar números inteiros entre dois números e mostrar a soma\n11. Gerar números inteiros entre dois números, mostrar a soma e exibir os números gerados\n12. Gerar tabuada de um número\n0. Sair \n"));
        if (opcao === 1) {
            pedirNota();
        } else if (opcao === 2) {
            validarUsuarioSenha();
        } else if (opcao === 3) {
            validarInformacoes();
        } else if (opcao === 4) {
            calcularAnosParaIgualar();
        } else if (opcao === 5) {
            calcularAnosParaIgualarUsuario();
        } else if (opcao === 6) {
            let subOpcao = parseInt(prompt("Escolha a forma de imprimir:\n1. Abaixo do outro\n2. Lado a lado"));
            if (subOpcao === 1) {
                imprimirNumerosAbaixo();
            } else if (subOpcao === 2) {
                imprimirNumerosLadoALado();
            } else {
                alert("Opção inválida.");
            }
        } else if (opcao === 7) {
            encontrarMaiorNumero();
        } else if (opcao === 8) {
            calcularSomaEMedia();
        } else if (opcao === 9) {
            imprimirNumerosImpares();
        } else if (opcao === 10) {
            gerarNumerosInteirosEExibirSoma();
        } else if (opcao === 11) {
            gerarNumerosInteirosEExibirSoma();
        } else if (opcao === 12) {
            gerarTabuada();
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


