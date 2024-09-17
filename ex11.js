// TRANSFORMAR UM OBJETO EM UM OBJ DE ARRAYS


 // Função de transformação

function transformarOBJ (objeto) {
    let newObj = {};

    objeto.forEach(obj => {

        for(let chave in obj) {

            if(!newObj[chave]) {
                newObj[chave] = []; 
            };

            newObj[chave].push(obj[chave]);
        };
        
    });

    return newObj
};

const DadosdeAlunos = [
    {nome: "Savarina", idade: 22, cidade: "Guarulhos", estado: 'São Paulo', genero: "F"},
    {nome: "Jeferson", idade: 29, cidade: "Goiania", estado: "Goías", genero: "M"},
    {nome: "Daniele", idade: 32, cidade: "Salvador", estado: "Bahia", genero: "F"},
    {nome: "Veronica", idade: 18, cidade: "Manaus", estado: "Amazonas", genero: "F"},
    {nome: "Armando", idade: 76, cidade: "Teresina", estado: 'Piaui', genero: "M"}
];

console.log(transformarOBJ(DadosdeAlunos))