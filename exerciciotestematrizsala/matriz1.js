const prompt = require ("prompt-sync")();

let m1 = [[],[]];

m1 [0][0] = parseInt(prompt("Digite o primeiro número da matriz: "));
m1 [0][1] = parseInt(prompt("Digite o segundo número da matriz: "));
m1 [1][0] = parseInt(prompt("Digite o terceiro número da matriz: "));
m1 [1][1] = parseInt(prompt("Digite o quarto número da matriz: "));
console.log("sua matriz fica assim: \n" + "[[" + m1 [0][0] +"," + m1 [0][1] +"],\n" + "[" + m1 [1][0] +"," + m1 [1][1] +"]] \n");
console.log(m1 [1][1])