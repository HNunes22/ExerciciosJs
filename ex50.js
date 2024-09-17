                    // SIMULADOR DE CONTA BANCÁRIA

class Conta {
    constructor(cliente, saldo) {
        this.cliente = cliente;
        this.saldo = saldo;
        this.extrato = []
    }
}

class Caixa_eletrônica {
    constructor() {
        this.conta_bancaria = [];
    }

    addConta(conta){
        this.conta_bancaria.push(conta)
    }
    
    depositar_dinheiro(conta, quantia){
        if(!conta) {
            return 'CONTA NÃO INFROMADA'
        }

        if(quantia <= 0) {
            return `Quantia inválida. Para depositar precisa de uma quantia maior que 0`
        }

        const conta_cliente = this.conta_bancaria.find(contas => contas.cliente === conta)
        if(conta_cliente) {
           conta_cliente.saldo += quantia
           conta_cliente.extrato.push(`Deposito: ${quantia}`)
           return `Sr.(a) ${conta} foi depositado ${quantia}R$ em sua conta, totalizando agora ${conta_cliente.saldo}R$`
           
        } else {
            return `Conta do Sr.(a) ${conta} não existe em nosso sistema`
        }
    }

    sacar_dinheiro(conta, quantia){
        if(!conta) {
            return 'CONTA NÃO INFORMADA'
        }

        if(quantia <= 0) {
            return `Quantia inválida. Para sacar precisa de uma quantia maior que 0`
        }

        const conta_cliente = this.conta_bancaria.find(contas => contas.cliente === conta)
        if(conta_cliente){
            if(conta_cliente.saldo >= quantia) {
                conta_cliente.saldo -= quantia
                conta_cliente.extrato.push(`Saque: ${quantia}`)
                return `Sr.(a) foi sacado ${quantia}R$ de sua conta, totalizando agora ${conta_cliente.saldo}R$`
            } else {
                return `Sr(a) ${conta} você não tem dinheiro suficiente para este saque`
            }
          
        } else {
            return `Conta do Sr.(a) ${conta} não existe em nosso sistema`
        }
    }

    transferir_dinheiro(conta_remetente, conta_destinatario, dinheiro){
        if(!conta_remetente || !conta_destinatario) {
            return "DADOS NÃO INFORMADOS CORRETAMENTE"
        }

        if(dinheiro <= 0) {
            return `Quantia inválida. Para transferir precisa de uma quantia maior que 0`
        }

        const conta1 = this.conta_bancaria.find(contas => contas.cliente === conta_remetente)
        const conta2 = this.conta_bancaria.find(contas => contas.cliente === conta_destinatario)

        if(conta1 && conta2) {
            if(conta1.saldo >= dinheiro){
                conta1.saldo -= dinheiro
                conta2.saldo += dinheiro
                conta1.extrato.push(`Transferência para ${conta_destinatario}: ${dinheiro}R$`) 
                conta2.extrato.push(`Transferência de ${conta_remetente}: ${dinheiro}R$`) 
                return `Sr.(a) ${conta_remetente} sua transferência de ${dinheiro}R$ para Sr.(a) ${conta_destinatario} foi feita com sucesso`
            } else {
                return `Sr.(a) ${conta_remetente} você não possui saldo suficiente para está transferência`
            }
        } else {
            return `O(a) remetente ${conta_remetente} ou O(a) destinatário(a) ${conta_destinatario} não existe em nosso sistema  `
        }
    }

    exibir_conta() {
        return this.conta_bancaria
    }

    exibir_extrato(conta) {
        const conta_extrato = this.conta_bancaria.find(contas => contas.cliente === conta)
        return conta_extrato ? conta_extrato.extrato : 'Conta não encontrada' // ? e : são um If / else
    }

}


const conta1 = new Conta('Hugo', 90000)
const conta2 = new Conta('Yara', 10000)

const sistemaBancario = new Caixa_eletrônica()

sistemaBancario.addConta(conta1)
sistemaBancario.addConta(conta2)



console.log(sistemaBancario.depositar_dinheiro('Yara', 10000))

console.log(sistemaBancario.sacar_dinheiro('Yara', 1000))

console.log(sistemaBancario.exibir_conta())

console.log(sistemaBancario.transferir_dinheiro('Hugo',"Yara", 9000))
console.log(sistemaBancario.exibir_conta())
console.log(sistemaBancario.exibir_extrato('Yerverson'))