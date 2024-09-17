
class Alunos {
    constructor(nome,idade,serie,notas) {
        this.nome = nome;
        this.idade = idade;
        this.serie = serie;
        this.notas = notas;
    }
    
    calculateAvarage() {
        if(this.notas.length === 0) {
            return 0
        }

        const s = this.notas.reduce((acu, curr) => acu + curr,0)
        const avarage = s / this.notas.length
        
        if(avarage < 70) {
            return 'REPROVADO:' + ' ' + avarage
        } else {
            return 'APROVADO:' + ' ' + avarage
        }
    }

}

class Escola {
    constructor() {
        this.escola = []
    }

    addStudent(student) {
        return this.escola.push(student)
    }

    searchStudentName(name) {
        return this.escola.filter(estudante => estudante.nome.includes(name))
    }

    listStudents() {
        return this.escola
    }
}

const aluno1 = new Alunos('Hugo', 21, '3°D', [60,60,80,100])
const aluno2 = new Alunos('Jessica', 23, '2°A', [10, 12, 50, 10])
const aluno3 = new Alunos('Josias', 20, '3° B', [60, 80, 50, 80])

const caixaEscolar = new Escola

caixaEscolar.addStudent(aluno1)
caixaEscolar.addStudent(aluno2)
caixaEscolar.addStudent(aluno3)

console.log(caixaEscolar.listStudents())
console.log(caixaEscolar.searchStudentName('Hugo'))
console.log(`O aluno(a) ${aluno1.nome} está com a média ${aluno1.calculateAvarage()}`)
console.log(`O aluno(a) ${aluno2.nome} está com a média ${aluno2.calculateAvarage()}`)
console.log(`O aluno(a) ${aluno3.nome} está com a média ${aluno3.calculateAvarage()}`)