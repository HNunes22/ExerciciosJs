// MESCLAR DOIS OBJETOS

// Função de unir objetos
function mesclarObjetos(obj1, obj2) {

    // Transformar os objetos em Arrays
    let entranhas = Object.entries(obj1)
    let entranas2 = Object.entries(obj2)

    
    let concatenar = entranhas.concat(entranas2) // Juntar os dois arrays
    let unir = Object.fromEntries(concatenar) // Transformar o Array em Objeto

    return unir // Retornar o Objeto mesclado
}

// Chamar a função
console.log(mesclarObjetos({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }
