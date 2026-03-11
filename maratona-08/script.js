/* Cadastro de cliente – Empresa de bolo de pote
Crie um objeto chamado cliente contendo as propriedades:
• nome
• telefone
• pedidoFavorito
Depois:
• Mostre o nome do cliente no console.
• Adicione uma nova propriedade chamada cidade.
• Remova a propriedade telefone.
• Mostre o objeto final no console */

// Criando um obijeo chamado cliente com as propriedades

const objetoCliente = {
    nome: "Carlos",
    telefone: 11955482322,
    pedidoFavorito: "Bolo de chocolate",
};

// Mostrando apenas o nome do cliente
console.log(objetoCliente.nome);

//Adicionando uma nova propriedade chamada cidade
objetoCliente.cidade = "Bragança Paulista";
console.log(objetoCliente.cidade);

// Removendo uma propriedade chamada telefone
delete objetoCliente.telefone;

// Mostrando o obijeto final no console
console.log(objetoCliente);

/* Cadastro de produto – Confeitaria
Crie dois objetos:
• bolo com as propriedades sabor e preco.
• ingredientes com as propriedades massa e recheio.
Depois:
• Crie um objeto chamado produtoFinal.
• Use Object.assign() para juntar as propriedades dos dois objetos no produtoFinal.
• Mostre o objeto no console. */

const objetobolo = {
    sabor: "Red Velvet",
    preco: 12.99,
};

const objetoingredientes = {
    massa: "Veludo Vermelho",
    recheio: "Morango",
};

const objetoprodutoFinal = {};

Object.assign(objetoprodutoFinal, objetobolo, objetoingredientes);
console.log(objetoprodutoFinal);

/* Serviço do ateliê de costura
Crie um objeto chamado servico com as propriedades:
• tipo
• preco
Depois:
• Altere o valor do preco.
• Adicione uma propriedade chamada prazoEntrega.
• Mostre o objeto atualizado no console. */

//Objeto serviços com as propriedades: tipo, preço.
const objetoServico = {
    tipo: "Barra de calça",
    preco: 20.00,
};


// Alterando o valor de preço
objetoServico.preco += 5,

    //Adicionando uma nova propriedade
    objetoServico.prazodeentrega = "1 dia";

// mostrando o objeto atualizado
console.log(objetoServico);

/* Ficha de paciente – Psicólogo
Crie um objeto chamado paciente com as propriedades:
• nome
• idade
• problema
Depois:
• Use Object.keys() para mostrar todas as propriedades do objeto.
• Mostre o resultado no console.
*/


// Objeto chamado paciente
const pacientes = {
    nome: "Pedro",
    idade: 42,
    problema: "Ansiedade",
};

// mostrando no console apenas as propriedades
const propriedades = Object.keys(pacientes);
console.log(propriedades);



/*  Cadastro de costureira – Ateliê de costura
 Crie um objeto chamado costureira com as propriedades:
 • nome
• experiencia
 • especialidade
 Depois:
 • Aumente o valor de experiencia em 1 usando operador de adição (+=).
• Mostre o objeto atualizado no console.
 Informações do terapeuta – Clínica de psicologia */


 // Objeto chamado costureira
 const costureira = {
    nome: "Eliete",
    experiencia: 15,
    expeciencia: "Barra de calça",
 };

 //Aumentou o valor da experiencia e mostrou no console
 costureira.experiencia += 1;
 console.log(costureira);


/*Crie um objeto chamado terapeuta com as propriedades:
 • nome
 • especialidade
 • cidade
 Depois:
• Use Object.values() para desestruturar os valores do objeto em três variáveis.
/* • Mostre os valores no console. */

const terapeuta = {
    nome: "Romulo ",
    Especialidade: "Ansiedade, Autoestima,  conflitos emocionais ",
    cidade: "São Paulo ",
}

const [nome, especialidade, cidade]= Object.values(terapeuta);
console.log(nome, especialidade, cidade);
