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
	
	var oldValue = product[index].code;
	var newValue = 0;
	
	if(index == (product.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemoveCodeByIndex(index + 1);
	}
	
	product[index].code = newValue;
	return oldValue;
}

function RemoveProductByIndex(index){
	
	var oldValue = product[index].name;
	var newValue = 0;
	
	if(index == (product.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemoveProductByIndex(index + 1);
	}
	
	product[index].name = newValue;
	return oldValue;
}

function RemovePriceByIndex(index){
	
	var oldValue = product[index].price;
	var newValue = 0;
	
	if(index == (product.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemovePriceByIndex(index + 1);
	}
	
	product[index].price = newValue;
	return oldValue;
}

function RemoveQuantityByIndex(index){
	
	var oldValue = product[index].quantity;
	var newValue = 0;
	
	if(index == (product.length - 1)){
		return oldValue;
	}
	else{
		newValue = RemoveQuantityByIndex(index + 1);
	}
	
	product[index].quantity = newValue;
	return oldValue;
}

function FindProductIndex(code){
	var index;
	
	for(var i=0; i < product.length; i++){
		if(product[i].code == code){
			index = i;
			return i;
		}
	}
	return "X";
}

function NewProduct(newCode, newName, newPrice, newQuantity){
	//não sei se vai funcionar. Não sei se product[newCode].code.Push(newCode) tá certo
	if(CheckExistingCode(newCode) == 0){
		product[newCode].code.Push(newCode);
		product[newCode].name.Push(newName);
		product[newCode].price.Push(newPrice);
		product[newCode].quantity.Push(newQuantity);
	
		WriteProducts();
	}
	else{
		alert("Já existe um produto cadastrado com esse código!");
	}
}

function AlterProduct(originalCode, alterCode, alterName, alterPrice, alterQuantity){
	
	for(var i=0; i < product.length; i++){
		if(product[i].code == originalCode){
			product[i].code = alterCode;
			product[i].name = alterName;
			product[i].price = alterPrice;
			product[i].quantity = alterQuantity;
			
			break;
		}
		else if(i == (product.length - 1)){
			alert("Não há produtos com esse código!");
		}
	}
	
	WriteProducts();
}

function CheckExistingCode(code){
	var exists = 0;
	
	for(var i=0; i < product.length; i++){
		if(product[i].code == code){
			exists = 1;
			break;
		}
	}
	
	return exists;
}


// function totalProduct(){
// 	if(document.getElementById("total-product").style.display === "block")
// 		document.getElementById("total-product").style.display = "none";
// 	else
// 		document.getElementById("total-product").style.display = "block";
// }

