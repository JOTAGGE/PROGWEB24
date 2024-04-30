const prompt = require("prompt-sync")();
// Solicitar peso e altura do usuário
let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros:");

// Converter entrada para números
peso = parseFloat(peso);
altura = parseFloat(altura);

peso = document.getElementById('peso');
altura = document.getElementById('altura');

// Calcular IMC
let imc = peso / (altura * altura);

function mostrarResultados() {

    imc = document.getElementById('imc');

    imc.mostrarResultados = imc;

    let categoria = document.getElementById('categoria');
    

    // Exibir categoria de IMC
    if (imc < 18.5) {
        console.log("Abaixo do peso");
        categoria.mostrarResultados = 'Abaixo do peso';    
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
        categoria.mostrarResultados = 'Peso Normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Excesso de peso");
        categoria.mostrarResultados = 'Abaixo do Excesso de Peso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        console.log("Obesidade grau I");
        categoria.mostrarResultados = 'Obesidade grau I';
    } else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obesidade grau II");
        categoria.mostrarResultados = 'Obesidade Grau II';
    } else {
        console.log("Obesidade grau III");
        categoria.mostrarResultados = 'Obesidade Grau III';        
    }    
}

