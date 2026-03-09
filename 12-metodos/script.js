// metodo string: trim
 const textoEspaco =  "Essa é uma string com espaços em branco ";

 const textoSemEspacos = textoEspaco.trim();

 console.log(textoSemEspacos);


 // metodo padStart

 const numero = "1234";

 // preencher com zeros até atingir 8 caracteres

 const numeroFormatado = numero.padStart(8, "0");
 console.log(numeroFormatado);

 const codigo = "ABC";
  const codigoPreenchido =  codigo.padStart(5, "-");
  console.log(codigoPreenchido);


  // preenchedno no final

  const codigoFinal = codigo.padEnd(5, "-");
  console.log(codigoFinal);


  // Metodo split - dividir uma string

  const textoT = "Essa é uma string para testar split";

  // Divide s string em um array de palavras, usando espeaços como separadores

  const palavras  =  textoT.split(" ");
  console.log(palavras);

  // Dvide a string em um array de 3 elementos, usando espaços como separadores

  const partes =  textoT.split(" ", 3);
  console.log(partes);

  // Divide a string em um array de numeros, usando virgulas como separadores

  const numeros  = "1,2,3,4,5".split(",");
  console.log(numeros);


// metodo join

const numerosJoin =  [1, 2, 3, 4, 5];

 // Junta os numeros co virgula como separador 

const listaNumeros = numerosJoin.join();
console.log(listaNumeros);

// junta os numeros com traços como separador 

const listaNumerosTracos =  numerosJoin.join("-");
console.log(listaNumerosTracos);

// junta os elementos de um array de strings 

const frutas  =  ["Maçã", "Banana", "Laranja"];
const textoFrutas  =  frutas.join(" e ");
console.log(textoFrutas);

// metodo repeat

const testandoRepeat = "Olá";

// Repetindo a string 3 vezes

const textoRepetido =  testandoRepeat.repeat(3);
console.log(textoRepetido);



