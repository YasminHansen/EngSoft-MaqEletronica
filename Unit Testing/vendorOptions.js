function WithdrawMachineMoney(){
	
	if(machineMoney.c50 >= min50coins)
		machineMoney.c50 = min50coins;
	
	if(machineMoney.c1 >= min1coins)
		machineMoney.c1 = min1coins;
	
	machineMoney.b2 = 0;
	machineMoney.b5 = 0;
	machineMoney.mobile = 0;
	
	
	//WriteMachineMoney();
	
	console.log("Dinheiro removido com sucesso!");
}

function AddMachineMoney(){
	machineMoney.c50 += parseFloat(document.getElementById("inputC50").value) || 0;
	machineMoney.c1 += parseFloat(document.getElementById("inputC1").value) || 0;
	machineMoney.b2 += parseFloat(document.getElementById("inputB2").value) || 0;
	machineMoney.b5 += parseFloat(document.getElementById("inputB5").value) || 0;
	
	document.getElementById("inputC50").value = "";
	document.getElementById("inputC1").value = "";
	document.getElementById("inputB2").value = "";
	document.getElementById("inputB5").value = "";
	
	alert("Dinheiro adicionado com sucesso!");
}