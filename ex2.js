// INVERTER STRING //

// Variavel de função//

function inverterString (str)  {

    const string = str; // Recebe a string do argumento //
    const arraySeparado = string.split(""); // Transforma a string em array com as letras separadas //
    const arrayInvertido = arraySeparado.toReversed(); // Inverte a posição das letras dentro do Array //
    console.log(arrayInvertido.join('')); // Converte o array em uma string //

}


inverterString("Ola Nunes") // Chama a função //

