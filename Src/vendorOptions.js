function WithdrawMachineMoney(){
	
	if(machineMoney.c50 >= min50coins)
		machineMoney.c50 = min50coins;
	
	if(machineMoney.c1 >= min1coins)
		machineMoney.c1 = min1coins;
	
	machineMoney.b2 = 0;
	machineMoney.b5 = 0;
	machineMoney.mobile = 0;
	
	
	WriteMachineMoney();
	
	alert("Dinheiro removido com sucesso!");
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

function NewCoupon(){
	newCode = document.getElementById("newCouponCode").value;
	newValue = document.getElementById("newCouponValue").value;
	newMsg = document.getElementById("newCouponMessage").value;
	newQty = document.getElementById("newCouponQuantity").value;
	
	var index = -1;
	
	for(var i=0; i < coupons.length; i++){
		if(coupons[i].code == 'XXX'){
			index = i;
			break;
		}
		else if(coupons[i].code == newCode){
			alert("Esse código já existe, utilize outro código.");
			break;
		}
		else if(i == (coupons.length - 1)){
			alert("O número máximo de cupons foi atingido!");
		}
	}
	
	if(index != -1){
		
		if(newCode == "" || newValue == "" || newMsg == "" || newQty == "")
			alert("Por favor preencha todos os itens!");
		else if(newCode.length != 3)
			alert("Por favor utilize um código com 3 dígitos.");
		else if(newValue > 3)
			alert("O desconto é alto demais!");
		else if(newValue <= 0)
			alert("Desconto inválido");
		else if(newValue % 0.5 != 0)
			alert("Por favor escolha um desconto válido para troco de 50 centavos e 1 real");
		else{		
			coupons[index].code = newCode;
			coupons[index].discount = newValue;
			coupons[index].message = newMsg;
			coupons[index].quantity = newQty;
			
			document.getElementById("newCouponCode").value = "";
			document.getElementById("newCouponValue").value = "";
			document.getElementById("newCouponMessage").value = "";
			document.getElementById("newCouponQuantity").value = "";
			
			alert("Cupom adicionado com sucesso!");
			
			couponsData = coupons;
		}

		WriteAll();
	}
}