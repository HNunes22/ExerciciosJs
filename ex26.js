// Converter um Número Binário para Decimal

function binarioParaDecimal(bin) {
    let decimal = 0;
    let potencial = 0;

    for(let i = bin.length - 1; i >= 0; i--) {
        if (bin[i] === '1') {
            decimal += Math.pow(2, potencial)
        }
        potencial++;
    }

    return decimal
}
console.log(binarioParaDecimal("1101")); // 13
console.log(binarioParaDecimal("110110011100011")) // 27875
