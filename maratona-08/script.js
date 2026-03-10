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
    nome:"Carlos",
    telefone: 11955482322,
    pedidoFavorito:"Bolo de chocolate",
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
    sabor:"Red Velvet",
    preco: 12.99,
};

const objetoingredientes = {
    massa:"Veludo Vermelho",
    recheio: "Morango" ,
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