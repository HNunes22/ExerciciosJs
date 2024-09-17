                    // SISTEMA DE GERENCIAMENTO DE TRANSPORTES

class Carga {
    constructor(nome_carga, origem, destino, status_carga){
        this.nome_carga = nome_carga
        this.origem = origem
        this.destino = destino
        this.status_carga = status_carga
    }
}

class Transporte {
    constructor(){
        this.transporte = []
    }

    registrar_carga(carga) {
        this.transporte.push(carga)
    }

    atualizar_status(carga, novo_status) {
        if(!carga) {
            return 'CARGA NÃO INFORMADA'
        }

        if(novo_status != 'A caminho' && novo_status != 'Entregue' && novo_status != 'Preparando') {
            return 'USE UMA ATUALIZAÇÃO VALIDA: A CAMINHO, ENTREGUE OU PREPARANDO'
        }

        const localizar_cargas = this.transporte.find(cargas => cargas.nome_carga === carga)
        if(localizar_cargas) {
            if(localizar_cargas.status_carga === novo_status) {
                return `A carga de ${carga} já está com o status: ${novo_status}`
            } else {
                localizar_cargas.status_carga = novo_status
                return `Status da carga de ${carga} foi atualizada para ${novo_status}`
            }
        } else {
            return `A carga de ${carga} não está registrada em nossa sistema`
        }
    }

    listar_transportes_condicao(condição) {
        if(!condição) {
            return "CONDIÇÃO INVALIDA"
        }

        if(condição !== 'A caminho' && condição !== 'Preparando' && condição !== 'Entregue') {
            return "RETORNE UMA CONDIÇÃO VALIDA: A CAMINHO, ENTREGUE OU PREPARANDO"
        }

        const cargas_codicao = this.transporte.filter(cargas => cargas.status_carga.includes(condição))
        if(cargas_codicao.length > 0) {
            return cargas_codicao
        } else {
            return `Nenhuma carga atende a está condição no momento`
        }
        
    }

    listar_transportes() {
        return this.transporte
    }
}

const carga1 = new Carga('Carro', 'CAOA - Anápolis', 'Caoa Cherry Morumbi - São Paulo', 'A caminho')
const carga2 = new Carga('Café', 'Rancheiro - Anápolis', 'Carrefour Goiânia - Goiás', 'A caminho')
const carga3 = new Carga('Soja', 'Fazenda Nunes - Curitiba', 'Mercadão Municipal - São Paulo', 'Entregue')
const carga4 = new Carga('Vinho', 'Vinho José Mario - Gramado', 'Fazenda Nunes - Curitiba', 'Preparando')
const carga5 = new Carga('Salgadinho', 'Salgados, LtDA. - Ribeirão Preto', 'Shopping Morumbi - São Paulo ', 'Preparando')

const sistema_Carga = new Transporte

sistema_Carga.registrar_carga(carga1)
sistema_Carga.registrar_carga(carga2)
sistema_Carga.registrar_carga(carga3)
sistema_Carga.registrar_carga(carga4)
sistema_Carga.registrar_carga(carga5)


console.log(sistema_Carga.atualizar_status('Soja', 'Preparando'))

console.log(sistema_Carga.listar_transportes())

console.log(sistema_Carga.listar_transportes_condicao('Preparando'))