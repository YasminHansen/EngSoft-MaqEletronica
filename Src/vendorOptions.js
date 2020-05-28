function WithdrawMachineMoney(){
	machineMoney.c50 = 20;
	machineMoney.c1 = 10;
	machineMoney.b2 = 0;
	machineMoney.b5 = 0;
	
	alert("Dinheiro removido com sucesso!");
}

function AddMachineMoney(){
	machineMoney.c50 += parseFloat(document.getElementById("inputC50").value) || 0;
	machineMoney.c1 += parseFloat(document.getElementById("inputC1").value) || 0;
	machineMoney.b2 += parseFloat(document.getElementById("inputB2").value) || 0;
	machineMoney.b5 += parseFloat(document.getElementById("inputB5").value) || 0;
	
	alert("Dinheiro adicionado com sucesso!");
}