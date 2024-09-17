// LETRA PALIDROMA

// Função de verificação
function isPalindromo(num) {
    const array = num; // Guardar o numero
    const string = array.toString(); // Transformar o numero em String
    const split = string.split(''); // Deixar o numeros em partes
    const reverse = split.toReversed(); // Deixar ele de tras para frente
    const join = reverse.join(''); // Voltar a juntar ele
    return join == num; // Retorne se o Numero (inverso) for igual a o Numero normal
}

// Chamar a função
console.log(isPalindromo(121)); // true 
console.log(isPalindromo(590)); // false
console.log(isPalindromo(913)); // false
console.log(isPalindromo(515)); // True