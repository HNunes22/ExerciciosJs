// INVERTER VALORES DE UMA CHAVE

// Função de inversão 
function inverterObjeto(obj) {
    let entranhas = Object.entries(obj); // Trnasformar o Objeto em Array
    
    entranhas.forEach((element) => { // Passa por cada Array criado, e inverte-lo
        element.reverse()
    })

    let conclusao = Object.fromEntries(entranhas) // Transformar o Array em Objeto novamente
    return  conclusao  // Retornar a conclusão
}

// Chamar função
console.log(inverterObjeto({ a: 1, b: 2, c: 3 })); // { 1: 'a', 2: 'b', 3: 'c' }

