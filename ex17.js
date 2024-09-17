// SEGUNDO MAIOR NÚMERO DE ARRAY

// Função de verificação

function segundoMaior(arr) {
   let array = arr; // Guardar o Array

   array.sort((a,b) => { // Deixar os numeros em ordem crescente
    a - b
   })

   array.pop() // Remover o ultimo numero

   const penultimateNumber = array.pop() // Remover o punultimo numero e armazenar

   return penultimateNumber // Retornar o penultimo numero
}

 // Chamar função
console.log(segundoMaior([1, 2, 3, 4, 5])); // 4
