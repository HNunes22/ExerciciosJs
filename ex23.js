// VERIFICAR SE O NUMERO É PRIMO

// Função de verificação

function isPrime(num) {
    
    
    if(num === 2) {return true} // Se o numero for claramente o 2, retorne TRUE

    if(num <= 1 || num % 2 == 0 > 2) {return false} // Se o numero for menor ou igual a 1 ou ele for par e maior que 2, retornará FALSE


    const raizQD = Math.sqrt(num) // Fazer a raiz quadrada do numero sugerido

    for(let i = 3; i <= raizQD; i += 2) { // Ver se o numero se divide 3x até a raiz quadrada dele, se ele divivir quer dizer que ele não é primo 
        if(num % i === 0) { 
            return false;
        }
    }
    return true // Caso ele não consiga se dividir 3x, ele será primo
}

// Chamar a função
console.log(isPrime(6)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(5)); // true
console.log(isPrime(9)); // false
console.log(isPrime(11)); // true