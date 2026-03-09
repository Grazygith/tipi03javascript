// object literals

const objetoPessoa = {
    nome: "João",
    idade: 30,
};

console.log(objetoPessoa);
console.log(typeof objetoPessoa);
console.log(objetoPessoa.nome);


//removendo uma propriedade de um objeto

delete objetoPessoa.idade;
console.log(objetoPessoa);

// adicionando uma propriedade ao objeto

objetoPessoa.sobrenome = "Santana";
console.log(objetoPessoa);


// metodo Assign

const objeto1 = {
    nome: "Maria",
    idade: 22,
};

const objeto2 = {
    altura: 1.65,
    genero: "Feminino",
};

const objetoDestino = {};

Object.assign(objetoDestino, objeto1, objeto2);
console.log(objetoDestino);


// metodos Keys


const chaves = Object.keys(objetoDestino);
console.log(chaves);

//mutação de atribuição
const hospede = {
    nome: "Alberto",
};

hospede.nome = "Júnior";
console.log(hospede.nome);

// mutação - inserção

hospede.sobrenome = "Lima";
console.log(hospede);


// mutação - operador de adição

const hospedeNovo = {
    nome: "Priscila",
    idade: 42,
};

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade);


// mutação - deletar

delete hospedeNovo.nome;
console.log(hospedeNovo);

// desestruturando objetos 

const usuarioA = {
    primerioNome: "Pablo",
    sobrenome: "Xavier",
    profissao: "Pedreiro",
};
const [primerioNome, sobrenome, profissao] = Object.values(usuarioA);
console.log(primerioNome, sobrenome, profissao);