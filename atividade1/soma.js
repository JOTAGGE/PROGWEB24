const prompt = require ('prompt-sync') ({sigint: true});

function soma(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var sum = parseInt(n1) + parseInt(n2) + parseInt(n3);
    document.getElementById("soma").innerHTML = sum;
}

let numero1 = parseInt(prompt("digite um número: "));
let numero2 = parseInt(prompt("digite outro número: "));
let numero3 = parseInt(prompt("digite outro número: "));
let resultado = numero1 + numero2 + numero3;

console.log("A soma desses números é: ", resultado);

