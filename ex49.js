class Fatura {
    constructor(codigo_fatura, lista_produtos, quantidade, preco, valor_total) {
        this.codigo_fatura = codigo_fatura
        this.lista_produtos = lista_produtos
        this.quantidade = quantidade
        this.preco = preco
        this.valor_total = valor_total
    }
}

class Empresa {
    constructor() {
        this.faturas = []
    }

    addFaturas(faturas) {
        this.faturas.push(faturas)
    }

    verificar_desconto(fatura) {
        if(!fatura) {
            return `OOOPS SEM FATURAS DIGITALIZADAS`
        }

        const Indexfaturas = this.faturas.findIndex(boleto => boleto.codigo_fatura === fatura) 
        if(Indexfaturas !== -1) {
            const soma = this.faturas[Indexfaturas].preco.reduce((acu, curr) => acu + curr, 0).toFixed(2)
            if(soma >= "3000" && soma <= "6000") {
                const calculoDesconto = (soma * 0.15)
                const somaTotal = soma - calculoDesconto
                this.faturas[Indexfaturas].valor_total = Math.round(somaTotal)
                return `O valor ${soma}R$ ganhou um desconto de 15%, total: ${somaTotal.toFixed(2)}R$`
            } else if(soma > "6000") {
                const calculoDesconto = (soma * 0.20)
                const somaTotal = soma - calculoDesconto
                this.faturas[Indexfaturas].valor_total = Math.round(somaTotal)
                return `O valor ${soma}R$ ganhou um desconto de 20%, total: ${somaTotal.toFixed(2)}R$`
            } else if(soma < 3000) {
                this.faturas[Indexfaturas].valor_total = Math.round(soma)
                return `A fatura ${fatura} não tem desconto` 
            } 
        } else {
            return `A fatura ${fatura} não existe no nosso sistema` 
        }
    }

    pagar_fatura(boleto, dinheiro) {
        if(!boleto) {
            return `BOLETO NÃO DIGITALIZADO. obs, UTILIZE O CÓDIGO DA SUA FATURA`
        }

        const boleto_fatura = this.faturas.findIndex(boletos => boletos.codigo_fatura === boleto)

        if(boleto_fatura !== -1) {
            const dinheiro_a_pagar = this.faturas[boleto_fatura].valor_total
            if(dinheiro == dinheiro_a_pagar) {
                this.faturas[boleto_fatura].codigo_fatura = `PAGO`
                return `A fatura ${boleto} foi paga com sucesso`
            } else if (dinheiro > dinheiro_a_pagar) {
                const calcular_troco = dinheiro - this.faturas[boleto_fatura].valor_total
                this.faturas[boleto_fatura].codigo_fatura = `PAGO`
                return `A fatura ${boleto} foi paga com sucesso com um troco de ${calcular_troco}`
            } else {
                return `Dinheiro insuficiente para pagar a fatura ${boleto}`
            }
        } else {
            return `A fatura ${boleto} não existe em nosso sistema`
        }
    }

    listar_Faturas() {
        return this.faturas
    }
} 


const fatura1 = new Fatura('FAT101',['Geladeira', 'Fogão', 'Cama'], 1, [2200.99,3600.99,699.99], 3201.97)

const sistemaFaturas = new Empresa()

sistemaFaturas.addFaturas(fatura1)

console.log(sistemaFaturas.listar_Faturas())

console.log(sistemaFaturas.verificar_desconto('FAT101'))
console.log(sistemaFaturas.listar_Faturas())

console.log(sistemaFaturas.pagar_fatura('FAT101', 7800))