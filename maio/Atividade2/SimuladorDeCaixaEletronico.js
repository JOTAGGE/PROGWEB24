const prompt = require("prompt-sync")();
// Solicitar o valor do saque ao usuário
let valorSaque = parseInt(prompt("Digite o valor que você deseja sacar:"));

// Verificar se o valor é múltiplo de 10
if (valorSaque % 10 === 0) {
    console.log("Saque realizado com sucesso.");
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10.");
}
