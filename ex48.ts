                                // SISTEMA DE AGENDAMENTO MÉDICO

class Paciente {
    nome_paciente: string
    data_paciente: Date
    medico_responsavel: string
    especialidade: string 
    constructor(nome_paciente: string,data_paciente: Date, medico_responsavel: string, especialidade: string ){
        this.nome_paciente = nome_paciente
        this.data_paciente = data_paciente
        this.medico_responsavel = medico_responsavel
        this.especialidade = especialidade
    }
} 

class Consulta {
    dados_paciente: Paciente[]
    constructor() {
        this.dados_paciente = []
    }

    addPaciente(paciente: Paciente) {
        this.dados_paciente.push(paciente)
    }


    verificarDisponibilidade(medico: string, data: Date) {
        if(!data && !medico) {
            return `ERROR! DATA OU MEDICO INDEFINIDO`
        }

        const localizar_agenda = this.dados_paciente.filter(doutor => doutor.medico_responsavel === medico)
        const localizar_data = localizar_agenda.find(consulta => consulta.data_paciente.getTime() === data.getTime())
        
        if(localizar_data) {
            return `O medico ${medico} terá consultas neste dia`
        } else {
            return `O ${medico} não tem consultas para este dia` 
        }  

        }
    


    agendaMedica(medico: string) {
        if(!medico) {
            return "DADOS INSUFICIENTES"
        }

        const doutor_especifico = this.dados_paciente.filter(doutor => doutor.medico_responsavel === medico)

        if(doutor_especifico.length > 0) {
            return doutor_especifico
        } else {
            return `O ${medico} não está registrado ou não tem consultas`
        }
    }



    cancelarConsulta(paciente:string) {
        if(!paciente) {
            return "DADOS INSUFICIENTES"
        }

        let dados_pacient = this.dados_paciente.findIndex(pacient => pacient.nome_paciente === paciente)
        const pacienteCancelar: any = this.dados_paciente.find(pacient => pacient.nome_paciente === paciente)
        

        if(dados_pacient !== -1) {
            let dataConsulta = pacienteCancelar.data_paciente.getDate()
            this.dados_paciente.splice(dados_pacient, 1)
            return `Consulta do paciente ${paciente} no dia ${dataConsulta} foi cancelado`
        } else {
            return `Paciente ${paciente} não encontrado`
        }
    }


    listPacients() {
        return this.dados_paciente
    }
        
}

let paciente1 = new Paciente('Roberto Andrade', new Date('2024-01-19T08:30:00'), 'Dr. Messias Josias', 'Dentista')
let paciente2 = new Paciente('Hugo Nunes', new Date('2024-03-10T13:00:00'), 'Dr. Edinaldo Pereira', 'Oftalmologista')
let paciente3 = new Paciente('Larissa Cega Beatriz', new Date('2024-03-12T14:00:00'), 'Dr. Edinaldo Pereira', 'Oftalmologista')


let sistemaMedico = new Consulta()

sistemaMedico.addPaciente(paciente1)
sistemaMedico.addPaciente(paciente2)
sistemaMedico.addPaciente(paciente3)

console.log(sistemaMedico.listPacients())
console.log(sistemaMedico.cancelarConsulta('Roberto Andrade'))
console.log(sistemaMedico.agendaMedica('Dr. Edinaldo Pereira'))
console.log(sistemaMedico.agendaMedica('Dr. Messias Josias'))
console.log(sistemaMedico.verificarDisponibilidade('Dr. Edinaldo Pereira',new Date('2024-05-06')))