// CONTAR PROPRIEDADES

function contarPropriedades(obj) {
    let entranhas = Object.entries(obj)
    return entranhas.length
}
console.log(contarPropriedades({ a: 1, b: 2, c: 3 })); // 3
