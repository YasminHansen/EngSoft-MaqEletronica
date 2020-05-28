var walletMoney = 15.5;
var balance = 0;
var input = "--";
var productCode = "--";
var productName = "--";
var productPrice = "--";

//passa pra products as infos do data.js
var product = data;

function BillsAndCoins(c50, c1, b2, b5){
	this.c50 = c50;
	this.c1  = c1;
	this.b2  = b2;
	this.b5  = b5;
}

var machineMoney = new BillsAndCoins(20,10,3,2);
var balanceMoney = new BillsAndCoins(0,0,0,0);

var maxChange = 10;

var codes = [01, 02, 03, 04];
var products = ["Kit-Kat", "Bis Extra", "Stikadinho", "Trento"];
var prices = [5.00, 4.00, 3.50, 2.50];
var quantities = [3, 5, 4, 5]


function RemoveProduct(){
	
	removeCode = document.getElementById("removeCode").value;
	
	var index = removeCode - 1;
	var result = CheckExistingCode(removeCode);
	
	if(result == 1){
		product[index].name = "Vazio";
		product[index].price = 0.00;
		product[index].quantity = 0;
	}
	else if(result == 0){
		alert("Esse espaço já está vazio!")
	}
	else{
		alert("Código inválido!");
	}
	
	WriteProducts();
}

function NewProduct(){
	newCode = document.getElementById("newCode").value;
	newName = document.getElementById("newName").value;
	newPrice = document.getElementById("newPrice").value;
	newQuantity = document.getElementById("newQuantity").value;
	
	var index = newCode - 1;
	var result = CheckExistingCode(newCode);
	
	if(result == 0){
		
		if(newName == "" || newPrice == "" || newQuantity == "")
			alert("Por favor preencha todos os itens!")
		else{		
			product[index].name = newName;
			product[index].price = newPrice;
			product[index].quantity = newQuantity;
		}

		WriteProducts();
	}
	else if(result == 1){
		alert("Já existe um produto cadastrado com esse código!");
	}
	else{
		alert("Código inválido!");
	}
}

function AlterProduct(){

	alterCode = document.getElementById("alterCode").value || 0;
	alterName = document.getElementById("alterName").value;
	alterPrice = document.getElementById("alterPrice").value;
	alterQuantity = document.getElementById("alterQuantity").value;

	var index = alterCode - 1;
	var result = CheckExistingCode(alterCode);
	
	if(result == 1){
		if(alterName != "")
			product[index].name = alterName;
		
		if(alterPrice != "")
			product[index].price = alterPrice;
		
		if(alterQuantity != "")
			product[index].quantity = alterQuantity;
	}
	else if(result == 0){
		alert("Esse espaço está vazio. Você pode adicionar este produto utilizando a tela anterior.")
	}
	else{
		alert("Código inválido!");
	}
	
	WriteProducts();
}

function CheckExistingCode(code){
	var exists = 0;
	
	if(code > 9 || code < 1)
		exists = 2;
	else if(product[code - 1].name != "Vazio")
		exists = 1;
	
	return exists;
}


// function totalProduct(){
// 	if(document.getElementById("total-product").style.display === "block")
// 		document.getElementById("total-product").style.display = "none";
// 	else
// 		document.getElementById("total-product").style.display = "block";
// }

