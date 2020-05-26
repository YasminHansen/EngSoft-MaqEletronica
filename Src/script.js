var walletMoney = 15.5;
var balance = 0;
var input = "--";
var productCode = "--";
var productName = "--";
var productPrice = "--";

function BillsAndCoins(c50, c1, b2, b5){
	this.c50 = c50;
	this.c1  = c1;
	this.b2  = b2;
	this.b5  = b5;
}

var machineMoney = new BillsAndCoins(2,1,3,2);
var balanceMoney = new BillsAndCoins(0,0,0,0);

var maxChange = 10;

var codes = [01, 02, 03, 04];
var products = ["Kit-Kat", "Bis Extra", "Stikadinho", "Trento"];
var prices = [5.00, 4.00, 3.50, 2.50];
var quantities = [3, 5, 4, 5]

function RemoveProduct(removedCode){
	
	var index = FindProductIndex(removedCode);
	var valueRemoved = 0;
	
	if(index != "X"){
		if(index == (codes.length - 1)){
			codes.pop();
			products.pop();
			prices.pop();
			quantities.pop();
		}
		else{
			valueRemoved = RemoveCodeByIndex(index);
			codes.pop();
			valueRemoved = RemoveProductByIndex(index);
			products.pop();
			valueRemoved = RemovePriceByIndex(index);
			prices.pop();
			valueRemoved = RemoveQuantityByIndex(index);
			quantities.pop();
		}
	}
	else{
		alert("Não há produtos com esse código!");
	}
	
	WriteProducts();
}

function RemoveCodeByIndex(index){
	
	var oldValue = codes[index];
	var newValue = 0;
	
	if(index == (codes.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemoveCodeByIndex(index + 1);
	}
	
	codes[index] = newValue;
	return oldValue;
}
function RemoveProductByIndex(index){
	
	var oldValue = products[index];
	var newValue = 0;
	
	if(index == (products.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemoveProductByIndex(index + 1);
	}
	
	products[index] = newValue;
	return oldValue;
}
function RemovePriceByIndex(index){
	
	var oldValue = prices[index];
	var newValue = 0;
	
	if(index == (prices.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemovePriceByIndex(index + 1);
	}
	
	prices[index] = newValue;
	return oldValue;
}
function RemoveQuantityByIndex(index){
	
	var oldValue = quantities[index];
	var newValue = 0;
	
	if(index == (quantities.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemoveQuantityByIndex(index + 1);
	}
	
	quantities[index] = newValue;
	return oldValue;
}

function FindProductIndex(code){
	var index;
	
	for(var i=0; i < codes.length; i++){
		if(codes[i] == code){
			index = i;
			return i;
		}
	}
	return "X";
}

function NewProduct(newCode, newName, newPrice, newQuantity){
	
	if(CheckExistingCode(newCode) == 0){
		codes.Push(newCode);
		products.Push(newName);
		prices.Push(newPrice);
		quantities.Push(newQuantity);
	
		WriteProducts();
	}
	else{
		alert("Já existe um produto cadastrado com esse código!");
	}
}

function AlterProduct(originalCode, alterCode, alterName, alterPrice, alterQuantity){
	
	for(var i=0; i < codes.length; i++){
		if(codes[i] == originalCode){
			codes[i] = alterCode;
			products[i] = alterName;
			prices[i] = alterPrice;
			quantities[i] = alterQuantity;
			
			break;
		}
		else if(i == (codes.length - 1)){
			alert("Não há produtos com esse código!");
		}
	}
	
	WriteProducts();
}

function CheckExistingCode(code){
	var exists = 0;
	
	for(var i=0; i < codes.length; i++){
		if(codes[i] == code){
			exists = 1;
			break;
		}
	}
	
	return exists;
}

/*Chamado ao pressionar um número do teclado*/
function PressedNumber(num){
	var tempInput;
	
	if(input == "--"){
		input = num + "-";
		tempInput = "0" + num;
		for(var i=0; i < codes.length; i++){
			if(codes[i] == tempInput){
				productName = products[i];
				productPrice = prices[i];
			}
		}
	}
	else if(input.includes("-")){
		input = input.replace("-", num);
	
		for(var i=0; i < codes.length; i++){
			if(codes[i] == input){
				productName = products[i];
				productPrice = prices[i];
				break;
			}
			else{
				productName = "--";
				productPrice = "--";
			}
		}
	}
	
	WriteInput();
}

/*Chamado ao pressionar o botão de confirmar do teclado*/
function Confirm(){
	
	if(productName != "--"){
		
		if(input.includes("-"))
			productCode = "0" + input.replace("-", "");
		else
			productCode = input;
		
		input = productCode;
		
		for(var i=0; i < codes.length; i++){
			if(codes[i] == productCode){
				if(quantities[i] > 0){
					alert("Produto selecionado, insira o dinheiro!");
				}
				else{
					alert("Produto em falta!");
					Cancel();
				}
				break;
			}
		}
	}
	else{
		alert("Nao ha produtos com esse codigo!")
		Cancel();
	}
	
	WriteAll();
}

/*Chamado ao pressionar o botão de cancelar do teclado*/
function Cancel(){
	input = "--";
	productCode = "--";
	productName = "--";
	productPrice = "--";
	WriteInput();
}

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
	
	if(balance >= productPrice){
		if(balance > productPrice){
			if((balance - productPrice) > maxChange){
				alert("Troco máximo atingido, por favor retire o dinheiro e use valores menores.");
			}
			else{
				result = CheckChange(balance - productPrice);
				
				if(result == 1){
					for(var i=0; i < codes.length; i++){
						if(codes[i] == productCode){
				
							WriteLog("Comprou " + products[i] + " por R$ " + prices[i] + " / O saldo total era de R$ " + balance + " / Devolveu troco de R$ " + (balance-prices[i]));
							
							walletMoney += (balance-prices[i]);
							
							machineMoney.c50 += balanceMoney.c50;
							machineMoney.c1 += balanceMoney.c1;
							machineMoney.b2 += balanceMoney.b2;
							machineMoney.b5 += balanceMoney.b5;
							
							balance = 0;
							quantities[i]--;
							
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
			for(var i=0; i < codes.length; i++){
				if(codes[i] == productCode){
				
					WriteLog("Comprou " + products[i] + " por R$ " + prices[i] + " / O saldo total era de R$ " + balance + " / Devolveu troco de R$ " + (balance-prices[i]));
				
					machineMoney.c50 += balanceMoney.c50;
					machineMoney.c1 += balanceMoney.c1;
					machineMoney.b2 += balanceMoney.b2;
					machineMoney.b5 += balanceMoney.b5;
				
					balance = 0;
					quantities[i]--;
					
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

/*Escreve o saldo da máquina*/
function WriteBalance(){
	document.getElementById("balance").innerHTML = "Saldo: R$ " + balance;
}

/*Escreve o produto sendo selecionado*/
function WriteInput(){
	document.getElementById("input").innerHTML = "Código do Produto: " + input;
	document.getElementById("productName").innerHTML = "Produto Selecionado: " + productName;
	document.getElementById("productPrice").innerHTML = "Preço Produto: " + productPrice;
}

/*Escreve os produtos e suas informações na máquina*/
function WriteProducts(){
	document.getElementById("product0").innerHTML = codes[0] + "- " + products[0] + "........Custo: R$ " + prices[0] + " | " + quantities[0] + " restantes";
	
	document.getElementById("product1").innerHTML = codes[1] + "- " +  products[1] + ".....Custo: R$ " + prices[1] + " | " + quantities[1] + " restantes";
	
	document.getElementById("product2").innerHTML = codes[2] + "- " +  products[2] + "...Custo: R$ " + prices[2] + " | " + quantities[2] + " restantes";
	
	document.getElementById("product3").innerHTML = codes[3] + "- " +  products[3] + "..........Custo: R$ " + prices[3] + " | " + quantities[3] + " restantes";
}

/*Escreve o valor dentro da carteira*/
function WriteWallet(){
	document.getElementById("wallet").innerHTML = "Dinheiro: R$ " + walletMoney;
}

/*Escreve tudo acima*/
function WriteAll(){
	WriteWallet();
	WriteBalance();
	WriteInput();
	WriteProducts();
}

/*Debug Log*/
function WriteLog(string){
	document.getElementById("log").innerHTML = document.getElementById("log").innerHTML.concat(string + "<br \>");
}
function ClearLog(){
	//alert("Troco: " + machineMoney.c50 + "-50 / " + machineMoney.c1 + "-1 / " + machineMoney.b2 + "-2 / " + machineMoney.b5 + "-5");
	document.getElementById("log").innerHTML = "";
}