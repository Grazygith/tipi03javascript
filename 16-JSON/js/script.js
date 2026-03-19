// Objeto javascript

const pessoa = {
    nome: "Maria",
    idade:30,
    profissao: "Desenvolvedora"
};

// Tranformando em JSON

const stringJSON = JSON.stringify(pessoa);
console.log(stringJSON);

// Convertendo de volta para objeto
const pessoa2 = JSON.parse(stringJSON);
console.log(pessoa2);

//JSON
const meuJson = `{
"nome": "Junior",
"idade": 21,
"skills": ["HTML", "CSS","Javascript"]
}`;

console.log(meuJson);
console.log(typeof meuJson);



// String JSON para Objeto
const meuObjeto = JSON.parse(meuObjeto);
console.log(meuObjeto);
console.log(meuObjeto.nome);
console.log(typeof meuObjeto);

// Objeto para string JSON
const jsonString = JSON.stringify(meuJson);
console.log(jsonString);
console.log(typeof jsonString);

//Erro de sintaxe

const invalidoJSON = `{
"nome": Junior,
"idade": 21
}`;

const meuObjetoInvalido = JSON.parse(invalidoJSON);




