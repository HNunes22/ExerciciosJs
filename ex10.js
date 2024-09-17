// TRANSFORMAR OBJ EM UM OBJ DE ARRAYS

// Função de transformação

function transformarArray(obj) {
  let newObj = {}; // Variavel de um objeto vazio

  obj.forEach(objeto => { // Passe por cada elemento do objeto sugerido

    for(let chave in objeto) { // Por cada chave dentro do objeto sugerido // Obs. chave é aquele que mostrará o significado do valor // {NOME: "Ana"} o NOME é a chave

        if(!newObj[chave]) { // Se dentro do NewObj não tiver essa chave, crie uma nova Array
            newObj[chave] = [];
        }

        newObj[chave].push(objeto[chave]); // Adicione os valores que correspondentes a Chave, exp : Nome : Ana (uma string), Idade: 18 (Numérico)
    }
    
  });

  return newObj // Retorne o Novo Objeto
    
}
 // Variavel de sugestão
const estudantesA1 = [
    {nome: "Ana", idade: 18},
    {nome: "Erick", idade: 17},
    {nome: "Aline", idade: 19}
];

console.log(transformarArray(estudantesA1)) //  Chamar função no console
