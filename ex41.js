let aluno = [
    {
        nome: 'Hugo',
        idade: 21,
        estado: 'São Paulo',
        curso: 'T.I',
        ativo: true,
        id: [],
        nota: []
    },
    {
        nome: 'Jesica',
        idade: 26,
        estado: 'Santa Catarina',
        curso: 'Medicina',
        ativo: true,
        id: [],
        nota: []
    },
    {
        nome: 'Jucelina',
        idade: 32,
        estado: 'Bahia',
        curso: 'Psicologia',
        ativo: false,
        id: [],
        nota: []
    },
    {
        nome: 'Kleber',
        idade: 19,
        estado: 'Alagoas',
        curso: 'T.I',
        ativo: false,
        id: [],
        nota: []
    },
    {
        nome: 'Bianca',
        idade: 22,
        estado: 'Rio de Janeiro',
        curso: 'Farmacia',
        ativo: true,
        id: [],
        nota: []
    }
]

// ----------------------------------------------- //

function idGerator(number) {
    aluno.forEach(aluno => {
         for(let i = 0; i < 7; i++) {
        const identificador = Math.floor(Math.random() * number)
        aluno.id.push(identificador)
    }
    });
   
}

idGerator(9)
// ----------------------------------------------- //
function notas(number) {
  aluno.forEach(aluno => {
    for(let i = 0; i < 4; i++){
        const notas = Math.floor(Math.random() * number)
        aluno.nota.push(notas)
    }
});  
}

notas(35)

// ----------------------------------------------- //

for(let i = 0; i < aluno.length; i++) {
    const onCourse = aluno[i].ativo;
    const student = aluno[i].nome;
    const course = aluno[i].curso
    const idStudent = aluno[i].id.join('')
    if (onCourse){
            const somarNotas = aluno[i].nota.reduce((acu, value) => acu + value, 0)
            if (somarNotas > 70) {
                console.log(`${student} (${idStudent}) está com o conceito EXCELENTE no curso: ${course}`)
            } else if(somarNotas >= 50 && somarNotas <= 70) {
                console.log(`${student} (${idStudent}) está com o conceito REGULAR no curso: ${course}`)
            } else {
                console.log(`${student} (${idStudent}) está com o conceito INSATISFATÓRIO no curso: ${course}`)
            }
             
    } else {
        console.log(`Desculpa, mas o aluno(a) ${student} não está matriculado(a) ou trancou o curso`)
    }
}