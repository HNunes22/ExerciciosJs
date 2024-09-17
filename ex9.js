// CONTAR OCORRÊNCIAS DE CARACTERES

// Função de contagem

function contarOcorrencia(palavra) {

    const converterUpper = palavra.toUpperCase() // Transformar a palavra toda em maiuscula

    let obj = {} // Obejeto vazio que vai armazenar as carcateres contadas
    
    for(let i = 0; i < converterUpper.length; i++) { // Se i for menor que o tamanho da palavra, continue...

        let caracteres = converterUpper[i] // Aqui vai guardar a letra da vez. EXEMPLO: Banana[4] - a quarta letra da banana (A)

        if (obj[caracteres]) { // Se a letra que esta no objeto for igual a atual, aumente a contagem numerica

            obj[caracteres]++

        } else { // Se não adcione ela como uma nova letra começando com 1

            obj[caracteres] = 1

        }
    }

    return obj // Retornar o objeto com os caracteres
}

console.log(contarOcorrencia("Paralelepipedo")) // Chamar a função // Respostas: {P: 3, A: 2, R: 1, L: 2, E: 3, I: 1, D: 1, O: 1}
console.log(contarOcorrencia("pneumoultramicroscopicossilicovulcanoconiotico"))