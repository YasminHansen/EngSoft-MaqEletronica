/*Chamado ao adicionar uma quantidade de dinheiro na máquina*/
function AddMoney(moneyInserted){
	
	if(productCode == "--"){
		alert("Selecione um produto primeiro!");
	}
	else if(walletMoney >= moneyInserted){
		
		if(moneyInserted == 5)
			balanceMoney.b5++;
		else if(moneyInserted == 2)
			balanceMoney.b2++;
		else if(moneyInserted == 1)
			balanceMoney.c1++;
		else if(moneyInserted == 0.5)
			balanceMoney.c50++;
		
		walletMoney -= moneyInserted;
		balance += moneyInserted;
	
		if(moneyInserted == 0){//Receive balance back
			walletMoney += balance;
			balance = 0;
			balanceMoney.b5  = 0;
			balanceMoney.b2  = 0;
			balanceMoney.c1  = 0;
			balanceMoney.c50 = 0;
		}
		WriteBalance();
		WriteWallet();
	}
}

/*Chamado ao confirmar a compra do produto após inserir o dinheiro necessário*/
function ConfirmMoney(){
	var result;
	
	if(balance >= (productPrice - discount)){
		if(balance > (productPrice - discount)){
			if((balance - (productPrice - discount)) > maxChange){
				alert("Troco máximo atingido, por favor retire o dinheiro e use valores menores.");
			}
			else{
				result = CheckChange(balance - (productPrice - discount));
				
				if(result == 1){
					for(var i=0; i < product.length; i++){
						if(product[i].code == productCode){							
							WriteLog("<div><p>" + product[i].name + " <i class='fas fa-dollar-sign'></i>" + (product[i].price - discount) + "</p>" +
							"<p>Saldo <i class='fas fa-dollar-sign'></i>" + balance + "<p>" + 
							"Troco <i class='fas fa-dollar-sign'></i>" + (balance - (product[i].price - discount)) + "</div>");
							document.getElementById("remove-products").classList.add('user-product');
							walletMoney += (balance - (product[i].price - discount));
							
							machineMoney.c50 += balanceMoney.c50;
							machineMoney.c1 += balanceMoney.c1;
							machineMoney.b2 += balanceMoney.b2;
							machineMoney.b5 += balanceMoney.b5;
							
							balance = 0;
							discount = 0;
							product[i].quantity--;
							
							AddMoney(0);
							Cancel();
						}
					}
				}
				else{
					alert("Não há troco disponível para esse valor. Cancele a operação ou insira outro valor.");
					AddMoney(0);/*Devolve dinheiro*/
				}
			}
		}
		else{
			for(var i=0; i < product.length; i++){
				if(product[i].code == productCode){
				
					WriteLog("<div><p>" + product[i].name + " <i class='fas fa-dollar-sign'></i>" + (product[i].price - discount) + "</p>" +
					"<p>Saldo <i class='fas fa-dollar-sign'></i>" + balance + "<p>" + 
					"Troco <i class='fas fa-dollar-sign'></i>0</div>");
					document.getElementById("remove-products").classList.add('user-product');
					machineMoney.c50 += balanceMoney.c50;
					machineMoney.c1 += balanceMoney.c1;
					machineMoney.b2 += balanceMoney.b2;
					machineMoney.b5 += balanceMoney.b5;
				
					balance = 0;
					discount = 0;
					product[i].quantity--;					
					AddMoney(0);					
					Cancel();
				}
			}

		}
	}
	else{
		alert("Dinheiro insuficiente!");
	}
	WriteAll();
}

function CheckChange(changeNeeded){
	
	var change = new BillsAndCoins(0,0,0,0);
	
	while(changeNeeded != 0){
		if(changeNeeded >= 1 && machineMoney.c1 > 0){
			change.c1 += 1;
			machineMoney.c1 -= 1;
			changeNeeded -= 1;
		}
		else if(changeNeeded >= 0.5 && machineMoney.c50 > 0){
			change.c50 += 1;
			machineMoney.c50 -= 1;
			changeNeeded -= 0.5;
		}
		else{
			machineMoney.c1 += change.c1;
			machineMoney.c50 += change.c50;
			return 0; /*Failure*/
		}
	}
	return 1; /*Success*/
}