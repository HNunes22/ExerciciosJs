// CONTAR VOGAIS 

// Função de Contagem

function contagemdeVogaiseConso(str) {

     // Variabeis importantes

    let contagemVogal = 0; // A cada vogal a contagem aumenta
    let contagemConsoante = 0; // A cada consoante a contagem aumenta (opcional)

    let string = str.toLowerCase().replace(/\s+/g, ''); // Deixar a palavra em minusculo e tirar seus espaços

    let splitar = string.split(''); // Separar a palavra em letras 
    
    for(let i = 0; i < splitar.length; i++) { // Repetição dependendo do tamanho da palavra


        if(splitar[i] == 'a' || splitar[i] == 'e' || splitar[i] == 'i' || splitar[i] == 'o' || splitar[i] == 'u') { // Se alguma letra da palavra for uma vogal, vai aumentar a variavel CONTAGEM
            contagemVogal += 1;
        } else { // Se não conte as consoantes (opcional)
            contagemConsoante += 1
        };
    } 



    return console.log(`A palavra ${str} tem: ${contagemVogal} Vogais e ${contagemConsoante} Consoantes`) // Retornar o resultado // Eu fiz personalizado

}



console.log(contagemdeVogaiseConso("Hello"));
console.log(contagemdeVogaiseConso("Javascript"));
console.log(contagemdeVogaiseConso("Elefante"));