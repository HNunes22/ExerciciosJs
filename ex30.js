// FILTRAR PROPRIEDADES DE UM OBJ

function filtrarPropriedades(obj) {
    let entranhas = Object.entries(obj);
    return entranhas
}
console.log(filtrarPropriedades({ a: 1, b: 2, c: 3 }, x => x > 1)); // { b: 2, c: 3 }
