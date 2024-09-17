// VERIFICAR PALÍDROMO //

// Função de verificação de palídromo//

function palidromo(palavra) {

    // Variáveis da String //

    let string = palavra; // Transformar a string em uma array // 

    let separado = string.split(''); // Deixar a string em partes, exp: ["h", "u", "g", "o"] //

    let reverse = separado.toReversed(); // Deixar a string invertida, exp: ["o", "g", "u", "h"] //

    let removeArray = reverse.join(''); // Transformar o array em string novamente //
/*
    if(removeArray == palavra) { // Verificar se a palavra é um palídromo // // EXPLICAÇÃO: SE(if) A PALAVRA INVERTIDA for igual (==) a PALAVRA NORMAL será afirmada, SE NÃO (else) ela sera negada //
        console.log(`A palavra ${palavra} é palídroma`)
    } else {
        console.log(`A palavra ${palavra} não é palídroma`)
    }*/
   return removeArray == palavra
}


// Chamar a função //


console.log(palidromo('ovo'));
console.log(palidromo('livro'));
console.log(palidromo('arara'));
console.log(palidromo('dado'));