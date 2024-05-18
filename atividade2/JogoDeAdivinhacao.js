const prompt = require("prompt-sync")();
// Gerar número secreto entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

// Continuar o jogo até que o usuário adivinhe o número secreto
do {
    palpite = parseInt(prompt("Adivinhe o número secreto (entre 1 e 100):"));
    if (palpite < numeroSecreto) {
        console.log("Tente um número maior.");
    } else if (palpite > numeroSecreto) {
        console.log("Tente um número menor.");
    }
} while (palpite !== numeroSecreto);

console.log("Parabéns! Você acertou o número secreto.");
