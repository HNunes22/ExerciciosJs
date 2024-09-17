// OBTER AS CHAVES DE UM OBJ

function chaves(obj) {
    return Object.keys(obj)
}
console.log(chaves({ a: 1, b: 2, c: 3 })); // ['a', 'b', 'c']
