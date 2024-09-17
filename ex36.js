// ATUALIZAR UM VALOR DE UM OBJ

function atualizarValor(obj, chave, valor) {

    let newObj = {}

    obj.forEach(element => {
        for(let chave in element) {
            if(!newObj[chave]) {
                newObj[chave] = {}
            }
            newObj[chave].push(element[chave])
        }
    });
    return newObj
}
console.log(atualizarValor({ a: 1, b: 2 }, 'b', 3)); // { a: 1, b: 3 }
