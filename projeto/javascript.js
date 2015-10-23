
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
	 
	event.preventDefault();
	
	var paciente = getPaciente();
		
	var table = document.getElementsByTagName("table")[0];
	
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
	var altura = document.getElementById("campo-altura").value;
	
	var paciente = {nome : nome , peso: peso, altura : altura};
	
	return paciente;
}

var botaoCalcular = document.getElementById("calcula-imcs");
botaoCalcular.addEventListener("click", calcularIMCDeTodos)

function calcularIMCDeTodos(event){
	
	event.preventDefault();
	
	var pacientes = document.getElementsByClassName("paciente");
	
	for(var i=0; i <= pacientes.length-1; i++){
		var pacienteAtual = pacientes[i];
		var peso = pacienteAtual.getElementsByClassName("info-peso")[0].textContent;
		var altura = pacienteAtual.getElementsByClassName("info-altura")[0].textContent;
		var imc = pacienteAtual.getElementsByClassName("info-imc")[0];
		
		var imcDoPaciente = peso / (altura * altura);
		console.log(imcDoPaciente);
		
		imc.textContent = imcDoPaciente;
	}
		
}



