var walletMoney = 15.5;
var money = 0;
var input = "--";
var productCode = "--";
var productName = "--";
var productPrice = "--";

var codes = [01, 02, 03, 04];
var products = ["Kit-Kat", "Bis Extra", "Stikadinho", "Trento"];
var prices = [5.00, 4.00, 3.50, 2.50];
var quantities = [3, 5, 4, 5]

function WriteBalance(){
	document.getElementById("balance").innerHTML = "Saldo: R$ " + money;
}

function AddMoney(moneyInserted){
	
	if(productCode == "--"){
		alert("Selecione um produto primeiro!");
	}
	else if(walletMoney >= moneyInserted){
		walletMoney -= moneyInserted;
		money += moneyInserted;
	
		if(moneyInserted == 0){//Receive money back
			walletMoney += money;
			money = 0;
		}
		WriteBalance();
		WriteWallet();
	}
}

function ConfirmMoney(){
	if(money >= productPrice){
		for(var i=0; i < codes.length; i++){
			
			if(codes[i] == productCode){
				
				WriteLog("Comprou " + products[i] + " por R$ " + prices[i] + " / O saldo total era de R$ " + money + " / Devolveu troco de R$ " + (money-prices[i]));
				
				money -= prices[i];
				walletMoney += money;
				money = 0;
				quantities[i]--;
				
				input = "--";
				productCode = "--";
				productName = "--";
				productPrice = "--";
			}
		}
	}
	else{
		alert("Dinheiro insuficiente!");
	}
	WriteAll();
}

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
					input = "--";
					productCode = "--";
					productName = "--";
					productPrice = "--";
				}
				break;
			}
		}
	}
	else{
		alert("Nao ha produtos com esse codigo!")
		input = "--";
		productCode = "--";
		productName = "--";
		productPrice = "--";
	}
	
	WriteAll();
}

function Cancel(){
	input = "--";
	productCode = "--";
	productName = "--";
	productPrice = "--";
	WriteInput();
}

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

function WriteInput(){
	document.getElementById("input").innerHTML = "Código do Produto: " + input;
	document.getElementById("productName").innerHTML = "Produto Selecionado: " + productName;
	document.getElementById("productPrice").innerHTML = "Preço Produto: " + productPrice;
}

function WriteProducts(){
	document.getElementById("product0").innerHTML = codes[0] + "- " + products[0] + "........Custo: R$ " + prices[0] + " | " + quantities[0] + " restantes";
	
	document.getElementById("product1").innerHTML = codes[1] + "- " +  products[1] + ".....Custo: R$ " + prices[1] + " | " + quantities[1] + " restantes";
	
	document.getElementById("product2").innerHTML = codes[2] + "- " +  products[2] + "...Custo: R$ " + prices[2] + " | " + quantities[2] + " restantes";
	
	document.getElementById("product3").innerHTML = codes[3] + "- " +  products[3] + "..........Custo: R$ " + prices[3] + " | " + quantities[3] + " restantes";
}

function WriteWallet(){
	document.getElementById("wallet").innerHTML = "Dinheiro: R$ " + walletMoney;
}

function WriteAll(){
	WriteWallet();
	WriteBalance();
	WriteInput();
	WriteProducts();
}

function WriteLog(string){
	document.getElementById("log").innerHTML = document.getElementById("log").innerHTML.concat(string + "<br \>");
}

function ClearLog(){
	document.getElementById("log").innerHTML = "";
}