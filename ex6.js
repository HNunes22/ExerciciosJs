// SOMAR DÍGITOS // 

// Função de somar dígitos, de apenas 3 digitos //

function somarDigitos(digito) {

    // Fazer a soma do número informado //

    let number = digito; // Guarda o número //
    let convert = number.toString(); // Transformar - lo em string //


    let array = convert; // Transfroma - lo em Array //
    let separator = array.split(""); // Deixar o array em partes //

    // Situacional (opc) //

    if (array.length < 3) {
        let s = parseInt(separator[0])
        let s2 = parseInt (separator[1])
        console.log(s + s2)

    } else if (separator.length >= 3)  {

     // Usando o indice de cada número, transforma-los em valor númerico novamente //

        let n = parseInt(separator[0]) 
        let n2 = parseInt(separator[1])
        let n3 = parseInt(separator[2])

        console.log(n + (n2 + n3)) // Somar as variaveis que guardam os números //
    }

 
}

somarDigitos(44); // Chamar a função //