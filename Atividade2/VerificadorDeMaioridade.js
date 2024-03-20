const prompt = require("prompt-sync")();
// Solicitar data de nascimento do usuário
let dataNascimento = prompt("Digite sua data de nascimento (no formato DD/MM/AAAA):");

// Extrair o ano de nascimento da data fornecida
let anoNascimento = parseInt(dataNascimento.split("/")[2]);

// Obter o ano atual
let anoAtual = new Date().getFullYear();

// Calcular idade do usuário
let idade = anoAtual - anoNascimento;

// Exibir mensagem informando se o usuário é maior ou menor de idade
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
