// Sequência de Fibonacci //


function fibonacci (termos) {

    // Variáveis de princípio //
    
    let numerosPrincipais = [0,1] 
    let contagem = 2;

    //Loop que depende da quantidade de termos para seu resultado // // EXPLICAÇÃO DO EVENTO: ENQUANTO(while) contagem FOR MENOR(<) que termos, irá acontecer isso...//

    while(contagem < termos) {                                                                      // EXPLICAÇÃO DA SOMA: 1° Array[2 - 1] + Array[2 - 2] = 1 --> 2° Array[3 - 1] + Array[3 - 2] = 3...
        let novoNumero = numerosPrincipais[contagem - 1] + numerosPrincipais[contagem - 2]; // Gerar o novo número da sequência no Array numerosPrincipais// 
        numerosPrincipais.push(novoNumero) // Adicionar o novo numero//
        contagem += 1 // Aumentar o valor da variavel contagem/
    }

    return numerosPrincipais // Retornar a sequência Fibonacci //
  }


console.log(fibonacci(5)); // Chamar a função // // Resultado : 0 - 1 - 1 - 2 - 3 //
console.log(fibonacci(10)); // Chamar a função (2) // // Resultado : 0 - 1 - 1 - 2 - 3 - 5 - 8 - 13 - 21 - 34 //