document.getElementById("buscar").addEventListener("click", async () =>{
 const cep = document.getElementById("cep").value;
 const resultadoDiv = document.getElementById("resultado");

 if(cep.length === 8){
try{
const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
const data = await response.json();

if(!data.erro){
 resultadoDiv.innerHTML = `
 <p>Endereço: ${data.logradouro}</p>
 <p>Bairro: ${data.bairro}</p>
 <p>Cidade: ${data.localidade}</p>
 <p>Estados: ${data.uf}</p>
 `;
 
}else{
     resultadoDiv.innerHTML = `<p>Cep não encontrado.</p>`;
}
}
catch (error){
    resultadoDiv.innerHTML = `<p>Erro ao buscar o CEP.</p>`;
    console.error("Erro: ", error);
}
 }else{
    resultadoDiv.innerHTML = `<p> Por favor digite um CEP valido com 8 digitos. </p>`;
 }

});
