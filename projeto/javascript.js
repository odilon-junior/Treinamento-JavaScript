
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
	 event.preventDefault()
	
	var paciente = getPaciente();
	
	var table = document.getElementsByTagName("table");
	
	var estruturaNovoPaciente = "<tr class='paciente'>"+
                          "<td class='info-nome'>"+paciente.nome+"</td>"+
                          "<td class='info-peso'>"+paciente.peso+"</td>"+
                          "<td class='info-altura'>"+paciente.altura+"</td>"+
                          "<td class='info-imc'></td>"+
                       "</tr>";
	table.innerHTML += estruturaNovoPaciente;
	
});

function getPaciente(){
	var nome = document.getElementById("campo-nome").value;
	var peso = document.getElementById("campo-peso").value;
	var altura =document.getElementById("campo-altura").value;
	
	var paciente = {nome : nome , peso: peso, altura : altura};
	console.log(nome)
	
	return paciente;
}



