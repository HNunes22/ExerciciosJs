                                                 // FACULDADE NUNES //

// Variaveis de dados

const nome = 'Hugo'; // Nome
const idade = 21; // Idade
const estudante = true; // Estudante da faculdade
const resultMateria = []; // Matéria do estudante
const resultadoID = []; // Identificador do estudante
const resultadoMedia = [];
// Criar o identificador do estudante

function gerarID(int) {
    for(let i = 0; i < 8; i++) {
        let identificador = Math.floor(Math.random() * int);
        resultadoID.push(identificador)
    }
}

gerarID(8) // Tamanho do identificador
const arrayID = resultadoID.join('')


function mediaAluno(n,n1,n2,n3) {
    const calcularNotas = n + n1 + n2 + n3;
    const calcularMedia = parseInt(calcularNotas / 4)
    if (calcularMedia < 50) {
        resultadoMedia.push('INSATISFATÓRIO')
    } else if (calcularMedia >= 50 && calcularMedia <= 70) {
        resultadoMedia.push('REGULAR')
    } else {
        resultadoMedia.push('EXCELENTE')
    }
}

mediaAluno(52,70,78,71)


// Verificar qual curso o estudante está fazendo

function verificarMateria(idMateria) {
    if(idMateria == 1) {
        resultMateria.push('Adm');
    } else if (idMateria == 2) {
        resultMateria.push('Engenharia Civil');
    } else if (idMateria == 3) {
        resultMateria.push('T.I');
    } else if (idMateria == 4) {
        resultMateria.push('Medicina');
    } else {
        resultMateria.push('Letras');
    }
}

verificarMateria(3) // 1 - Adm / 2 - Engenheiro C. / 3 - T.I / 4 - Medicina / 5 - Letras  //


// Se o aluno está na faculdade irá exibir os dados dele

function resultadoAluno() {
    if(estudante == true) {
        console.log(`O aluno ${nome} (${arrayID}) com ${idade} anos está cursando ${resultMateria[0]}`);
        console.log(`A nota de conceito do aluno é ${resultadoMedia[0]}`)
    } else {
        console.log(`${nome} não é aluno`);
    }
}

resultadoAluno();