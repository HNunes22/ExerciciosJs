class Client {
    constructor(client, numeroQuarto,check_in,check_out) {
        this.client = client
        this.numeroQuarto = numeroQuarto
        this.check_in = check_in
        this.check_out = check_out
    }
}

class Hotel {
    constructor() {
        this.hotel = []
    }

    addClient(cliente) {
        this.hotel.push(cliente)
    }

    searchClientName(nomeCliente) {
        let searchClient = this.hotel.filter(cliente => cliente.client.includes(nomeCliente))
        if(searchClient.length === 0) {
            return `O(a) clinte ${nomeCliente} não tem reserva`
        } else {
            return searchClient
        }
    }

    removeReservation(nomeCliente) {
        if(!nomeCliente) {
            return ('Digite o nome do(a) cliente')
        }

        let verifyClient = this.hotel.findIndex(cliente => cliente.client === nomeCliente)
        
        if(verifyClient !== -1) {
            this.hotel.splice(verifyClient,1)
            return `A reserva do(a) cliente ${nomeCliente} foi removido(a) com sucesso!`             
        } else {
            return `O(a) cliente ${nomeCliente} não foi encontrado`
        }
          }

    availabilityReservation(nQrt, data) {
        if(!nQrt || !data) {
            return "ERRO! Verifique se todos os dados foram preenchidos"
        }

        let quarto = this.hotel.find(quarto => quarto.numeroQuarto === nQrt)
        if(quarto) {
            let check_in_Date = new Date(quarto.check_in)
            let check_out_Date = new Date(quarto.check_out)
            let dataEscolhida = new Date(data)
            if(dataEscolhida > check_out_Date) {
                return `O quarto ${nQrt} estará disponivel após o dia ${quarto.check_out}`
            } else if(dataEscolhida >= check_in_Date && dataEscolhida <= check_out_Date) {
                return `O quarto ${nQrt} está reservado entre as datas ${quarto.check_in} e ${quarto.check_out}`
            } else {
                return `O quarto ${nQrt} está disponivel na data ${data}`
            }
        } else {
            return `OOPS! Quarto errado`
        }
    }


}

const quarto1 = new Client('Rebeca Santos', 1, '2024-09-10', '2024-09-15')
const quarto2 = new Client('Hugo Nunes', 102, '2024-03-10', '2024-03-14')
const quarto3 = new Client('Dalva Cavalos', 54, '2019-10-12', '2019-10-25')

const sistemaHotel = new Hotel

sistemaHotel.addClient(quarto1)
sistemaHotel.addClient(quarto2)
sistemaHotel.addClient(quarto3)

//console.log(sistemaHotel.hotel)
console.log(sistemaHotel.removeReservation('Dalva Cavalos'))
console.log(sistemaHotel.hotel)
console.log(sistemaHotel.searchClientName('Rebeca Santos'))
console.log(sistemaHotel.availabilityReservation(102,'2024-03-11'))