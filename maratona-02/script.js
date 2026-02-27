


 
/* 03-Um atelie de costura oferece 10% se
O valor do serviço for maior ou igual a R$ 500 
E
O cliente for antigo
*/ 

let valorServico = 650;
let clienteAntigo = true;

if(valorServico>= 500 && clienteAntigo === true){
    console.log("Cliente tem direito a 10% de desconto");
} else{
    console.log("Cliente não tem direito ao desconto");
}

/*04-Um psicologo atente apenas se:
O horario estiver disponivel
E
O paciente estiver cadastrado

Considere:
Horario disponivel true
Paciente cadastrado false

Verifique se a consulta pode ser agendada

*/


let horarioDisponivel = true;
let pacienteCadastrado = false;

if(horarioDisponivel &&  pacienteCadastrado){
    console.log("Consulta pode ser agendada");
} else{
    console.log("Consulta não pode ser agendada");
}


