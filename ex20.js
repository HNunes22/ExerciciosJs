// CONTAGEM DE OCORRENCIAS DE PALAVRAS EM SUMA STRING

// Função de contagem 

function contarOcorrencias(str) {
    
    let string = str.toUpperCase(); // Deixar a string em caixa alta

    let newObj = {}; // Guardar as palavras

    let splitString = string.split(' ') // Dividir as palavras da string

    for(let i = 0; i < splitString.length; i++) {

            let guardarPalavra = splitString[i] // Guarda a palavra da vez

        if(newObj[guardarPalavra]) { // Se a palavra que esta dentro do novo objeto já existir coloque + 1 na contagem
            newObj[guardarPalavra]++
        } else { // Caso não exista iniciei uma nova contagem com a nova palavra
            newObj[guardarPalavra] = 1
        }
    }

    return newObj // Retorne o objeto com as palavras contadas

}

// Chamar função
console.log(contarOcorrencias("hello world hello hello hello world hugo nunes hello")); // { hello: 2, world: 1 }
