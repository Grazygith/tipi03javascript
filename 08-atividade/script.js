
//Exercício 1 – Psicólogo

function avaliarSessao(nomePaciente, quantidadeSessoes){
 console.log("Paciente",nomePaciente);
 if(quantidadeSessoes >= 10){
    return true
 }else{
    return false
 }
}

let resultado1 = avaliarSessao("Maria", 12);
console.log("Pode receber alta", resultado1);

let resultado2 = avaliarSessao("Maria", 5);
console.log("Não pode receber alta", resultado2);

//Exercicio 2 - Bolo de pote

const calcularValorPedido = (quantidadeBolos, valorUnitario) => {
    let total = quantidadeBolos * valorUnitario;

    if (quantidadeBolos >= 10) {
        total = total * 0.9; 
    }

    return total;
};

//exercicio 3- Atelie
function listarMateriais(materiais){
    console.log(materiais.length);
    let novoMaterial = materiais.map(material => material.toUpperCase());
    return novoMaterial;
}
let materiais = ["tinta" , "pinceis", "tecidos"];
let resultado = listarMateriais(materiais);
console.log("Materiais em maiúsculas:", resultado);

//Exercício 5 – Psicólogo JSON - INVALIDO


const cadastroPaciente = `{

"nomeCompleto": "Ana Silva",
  "idade": 28,
  "planoDeSaude": true,
  "queixasPrincipais": ["dor nas costas", "insônia", "estresse"],
  "ultimaSessao": {
   data: new Date().toISOString(),
    "escalaHumor": 7,
    "prescricaoAtividade": true
    
}`;
