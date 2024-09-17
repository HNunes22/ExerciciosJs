// VERIFICAR SE UM OBJ É VAZIO
    // Chamar a função
function isEmpty(obj) {

     let chave = Object.keys(obj); // Pegar o valor do objeto, caso ele esteja vazio irá retornar um Array vazio ([]) que é igual a 0

     if(chave == 0) { // Se o objeto for vazio retorne VERDADEIRO, se não FALSO
        return true
     } else {
        return false
     }
}
console.log(isEmpty({})); // true
