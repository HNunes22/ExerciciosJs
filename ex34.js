// OBTER OS VALORES DE UM OBJ

function valores(obj) {

    let entranhas = Object.entries(obj);

    entranhas.forEach((element) => {
        element.reverse()
    })

    let reverseObj = Object.fromEntries(entranhas)

    let valor = Object.keys(reverseObj)

    return valor
   
}
console.log(valores({ a: 1, b: 2, c: 3, d: 5 })); // [1, 2, 3, 5]
