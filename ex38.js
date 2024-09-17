function verifyNumber(number) {
    if (number < 0) {
        console.log(`Numero negativo: ${number}`); 
    } else if (number == 0) {
        console.log('É um zero');
    } else {
        console.log(`Numero positivo: ${number}`);
    }
}
verifyNumber(100);

function oddEven(number) {
    if(number % 2 == 0 ) {
        console.log(`O numero ${number} é par`);
    } else {
        console.log(`O numero ${number} é ímpar`);
    }
}

oddEven(11);