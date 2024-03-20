const prompt = require("prompt-sync")();

let saldoAtual = 1000; // Definindo saldo inicial

// Função para verificar saldo
function verificarSaldo() {
    if (saldoAtual > 0) {
        console.log(saldoAtual);
        console.log("Saldo positivo");
    } else {
        console.log(saldoAtual);
        console.log("Saldo negativo");
    }
}

// Função para realizar saque
function realizarSaque(valorSaque) {
    if (valorSaque <= saldoAtual) {
        saldoAtual -= valorSaque;
        console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
    } else {
        console.log("Saldo insuficiente");
    }
}

// Função para realizar depósito
function realizarDeposito(valorDeposito) {
    saldoAtual += valorDeposito;
    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
}

// Função para realizar transferência entre contas
function realizarTransferencia(saldoDestino, valorTransferencia, limiteTransferencia) {
    if (valorTransferencia <= saldoAtual && valorTransferencia <= limiteTransferencia) {
        saldoAtual -= valorTransferencia;
        saldoDestino += valorTransferencia;
        console.log("Transferência realizada com sucesso");
    } else {
        console.log("Transferência não autorizada");
    }
}

// Função para checar cheque especial
function checarChequeEspecial() {
    if (saldoAtual < 0) {
        console.log("Dentro do limite do cheque especial");
    } else {
        console.log("Fora do limite do cheque especial");
    }
}

// Função para atualizar cadastro
function atualizarCadastro(cadastroAtivo) {
    if (cadastroAtivo && saldoAtual > 0 ) {
        console.log("Cadastro ativo e saldo positivo");
    } else if (cadastroAtivo && saldoAtual <= 0) {
        console.log("Cadastro ativo mas precisa regularizar saldo");
    } else {
        console.log("Por favor, atualize seu cadastro");
    }
}

// Função para avaliar crédito
function avaliarCredito(historicoCredito, rendaMensal) {
    if (saldoAtual > 1000 && historicoCredito && rendaMensal > 3000) {
        console.log("Crédito aprovado");
    } else {
        console.log("Crédito negado");
    }
}

// Função para exibir menu
function exibirMenu() {
    console.log("\nMenu:");
    console.log("1. Verificar Saldo");
    console.log("2. Realizar Saque");
    console.log("3. Realizar Depósito");
    console.log("4. Realizar Transferência");
    console.log("5. Checar Cheque Especial");
    console.log("6. Atualizar Cadastro");
    console.log("7. Avaliar Crédito");
    console.log("8. Sair");
}

// Função principal
function main() {
    let opcao;
    do {
        exibirMenu();
        opcao = parseInt(prompt("Escolha uma opção: ")); // Adicionando espaço após a pergunta para melhor formatação

        switch (opcao) {
            case 1:
                verificarSaldo();
                break;
            case 2:
                let valorSaque = parseFloat(prompt("Informe o valor do saque: "));
                realizarSaque(valorSaque);
                break;
            case 3:
                let valorDeposito = parseFloat(prompt("Informe o valor do depósito: "));
                realizarDeposito(valorDeposito);
                break;
            case 4:
                let saldoDestino = parseFloat(prompt("Informe o saldo da conta destino: "));
                let valorTransferencia = parseFloat(prompt("Informe o valor da transferência: "));
                let limiteTransferencia = parseFloat(prompt("Informe o limite de transferência: "));
                realizarTransferencia(saldoDestino, valorTransferencia, limiteTransferencia);
                break;
            case 5:
                checarChequeEspecial();
                break;
            case 6:
                    let respostaCadastro = prompt("O cadastro está ativo? (sim ou nao): ").toLowerCase();
                    if (respostaCadastro === "sim") {
                        atualizarCadastro(true);
                    } else if (respostaCadastro === "nao") {
                        atualizarCadastro(false);
                    } else {
                        console.log("Opção inválida.");
                    }
            break;
                
            case 7:
                    let respostaHistoricoCredito = prompt("O histórico de crédito é bom? (sim ou nao): ").toLowerCase();
                    if (respostaHistoricoCredito === "sim" || respostaHistoricoCredito === "nao") {
                        let rendaMensal = parseFloat(prompt("Informe a renda mensal: "));
                        avaliarCredito(respostaHistoricoCredito === "sim", rendaMensal);
                    } else {
                        console.log("Opção inválida.");
                    }
            break;

            case 8:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== 8);
}

// Chamando a função principal para iniciar o programa
main();
