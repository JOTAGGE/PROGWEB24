class contaBancaria{
    constructor(saldoInicial){
        this.saldo = saldoInicial || 0;
    }

    depositar(valor){
        this.saldo += valor;
        console.log("Deposito de R$", ${valor}, "realizado. Saldo atual: R$", ${valor})
    }
    sacar(valor){

    }

    extrato(){

    }
}