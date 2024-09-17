                        // SISTEMA DE GESTÃO DE ESTACIONAMENTO

class Carro {
    placa: string
    entrada: Date
    saida: Date | null
    constructor(placa: string, horarios: Date) {
        this.placa = placa;
        this.entrada = horarios;
        this.saida = null
    }
}

class Estacionamento {
    estacionamento: Carro[];
    constructor() {
        this.estacionamento = []
    }

    addCarro(carros: Carro) {
        this.estacionamento.push(carros)
    }

    registrarSaida(placa: string, saida: Date) {
        if(!placa || !saida) {
            return 'OOOPS! Dados não informados corretamente'
        }
        const carro = this.estacionamento.find(carro => carro.placa === placa)
        if(carro) {
            carro.saida = saida
            return `Saída do carro com a placa ${placa} registrado`
        } else {
            return `OOOPS ${placa} não encontrada`
        }
    }

    calcularValor(placa: string) {
        if(!placa) {
            return 'Placa não informada'
        }

        const carro = this.estacionamento.find(carro => carro.placa === placa)
        if(carro) {
         if(!carro.saida) {
            return `O carro com a placa ${placa}, não saiu do estacionamento`
         }   
         const tempoFicado = (carro.saida.getTime() - carro.entrada.getTime()) / (1000 * 60 * 60);
         const calculodoValorTotal = tempoFicado * 5
         return `O carro da placa ${placa} ficou ${tempoFicado.toFixed(2)}h, com um custo total de ${calculodoValorTotal.toFixed(2)}R$`
        } else {
            return "Carro não registrado"
        }
    }

    listCars() {
        return this.estacionamento
    }
}

const carro1 = new Carro('AO98UU', new Date('2023-10-11T18:45:39'))
const carro2 = new Carro('QU89II', new Date('2022-11-09T20:12:00'))
const carro3 = new Carro('SUM002', new Date('2024-03-10T00:30:10'))

const sistemaEstacionamento = new Estacionamento()

sistemaEstacionamento.addCarro(carro1)
sistemaEstacionamento.addCarro(carro2)
sistemaEstacionamento.addCarro(carro3)

console.log(sistemaEstacionamento.listCars())

console.log(sistemaEstacionamento.registrarSaida('AO98UU', new Date('2023-10-11T22:12:30')))
console.log(sistemaEstacionamento.registrarSaida('SUM002', new Date('2024-03-10T03:00:11')))


console.log(sistemaEstacionamento.calcularValor('AO98UU'))
console.log(sistemaEstacionamento.calcularValor('SUM002'))
console.log(sistemaEstacionamento.calcularValor('QU89II'))