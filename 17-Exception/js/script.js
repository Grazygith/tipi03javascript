
//Try e catch
try {
    result
} catch (exception) {
    console.error("ocorreu um erro:" + exception.message);
}

finally {
    console.log("O bloco finally sempre é executado");
}

// Após definir result

try{
    let result = 1 + 1
    console.log(result)
}catch(exception){
    console.error("ocorreu um erro" + exception.message);
}

finally{
    console.log("O bloco finally sempre é executado");
}



// assertions- lança mensagem de erro quando a condição é falsas

let y  =  5;
console.assert( y === 15, "y não é igual a 15");



// Exception -  sempre no final do codigo
let x = 5;
if (x != 10) {
        throw new Error("O valor de x não pode ser diferente de 10");
}
