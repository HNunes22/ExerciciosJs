class Comanda {
    pedido: string[];
    quantidade: number;
    preco: number[];
    numeroPedido: number;

    constructor(pedido: string[], quantidade: number, preco: number[], numeroPedido: number){
        this.pedido = pedido;
        this.quantidade = quantidade;
        this.preco = preco;
        this.numeroPedido = numeroPedido;
    }
}

class Cozinha {
    cozinha: Comanda[];
    constructor() {
        this.cozinha = [];
    }

    addPedido(pedidos: Comanda) {
         this.cozinha.push(pedidos);
    }


    calcularValor(numberRequest: number) {
        if(!numberRequest) {
            return `Pedido não identificado`
        }

        let numberClient = this.cozinha.find(pedido => pedido.numeroPedido === numberRequest) // Acessar um é FIND para acessar tudo é FILTER
        if(numberClient) {
            const precos = numberClient.preco
            const soma = precos.reduce((acc,curr) => acc + curr,0)
            return `O pedido ${numberRequest} tem a soma de ${soma.toFixed(2)}`
        } else {
            return `Pedido não encontrado`
        }
        

    }
    calcelarPedido(numberRequest: number) {
        if(!numberRequest) {
            return `ERROR!`
        }

        let indexPedido = this.cozinha.findIndex(pedido => pedido.numeroPedido === numberRequest)
        if(indexPedido !== -1) {
            this.cozinha.splice(indexPedido,1)
            return `O pedido ${numberRequest} foi removido`
        } else {
            return `Pedido inexistente!`
        }
    }


    listPedidos() {
        return this.cozinha;
    }
}


const pedido1 = new Comanda(['Agua', 'Refrigerante', 'Macarrão'], 1, [1.99,8,32.99], 1);
const pedido2 = new Comanda(['Cerveja', 'Feijoada', 'Pet Gatou'], 1, [1.99,29.99,19.99], 2);

const sistemaRestaurante = new Cozinha();

sistemaRestaurante.addPedido(pedido1);
sistemaRestaurante.addPedido(pedido2);

console.log(sistemaRestaurante.listPedidos());
console.log(sistemaRestaurante.calcularValor(0))
console.log(sistemaRestaurante.calcularValor(2))
console.log(sistemaRestaurante.calcelarPedido(1))
console.log(sistemaRestaurante.listPedidos())