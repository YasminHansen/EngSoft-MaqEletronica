/*Escreve o saldo da máquina*/
function WriteBalance(){
	document.getElementById("balance").innerHTML = "Saldo: R$ " + balance;
}

/*Escreve o produto sendo selecionado*/
function WriteInput(){
	document.getElementById("input").innerHTML = input;
	document.getElementById("productName").innerHTML = productName;
	document.getElementById("productPrice").innerHTML = '<i class="fas fa-dollar-sign"></i> ' + productPrice;
}

/*Escreve os produtos e suas informações na máquina*/
function WriteProducts(){
	for(var i = 0; i < product.length; i++){
		document.getElementById(product[i].code).innerHTML = "<p>" + product[i].code + " - " 
		+ product[i].name + "</p><p class='product-value'> Custo: R$ " + product[i].price 
		+ "</p><p class='total-product' id='total-product'>" + product[i].quantity;
	}
}

function WriteMobileProducts(){
	for(var i = 0; i < product.length; i++){
		document.getElementById(product[i].codeMobile).innerHTML = "<p>" + product[i].code + " - " 
		+ product[i].name + "</p><p class='product-value'> Custo: R$ " + product[i].price 
		+ "</p><p class='total-product' id='total-product'>" + product[i].quantity;
	}
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
	WriteMobileProducts();
}