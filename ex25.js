// Calcular o MMC


function mdc(a, b) {
   while(b !== 0) {
    let temporario = b
    b = a % b;
    a = temporario
   }
   return a
}

function calcularMMC(a, b) {
    return Math.abs(a * b) / mdc(a, b);
}
console.log(calcularMMC(4, 5)); // 20
