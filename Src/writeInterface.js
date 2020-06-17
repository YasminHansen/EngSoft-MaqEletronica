/*Escreve o saldo da máquina*/
function WriteBalance(){
	document.getElementById("balance").innerHTML = "Saldo: R$ " + balance;
}

/*Escreve o produto sendo selecionado*/
function WriteInput(){
	document.getElementById("input").innerHTML = input;
	document.getElementById("productName").innerHTML = productName;
	document.getElementById("productPrice").innerHTML = '<i class="fas fa-dollar-sign"></i> ' + productPrice;
	WriteDiscount();
}

/*Escreve os produtos e suas informações na máquina*/
function WriteProducts(){
	for(var i = 0; i < product.length; i++){
		document.getElementById(product[i].code).innerHTML = "<p class='product-name'>" + product[i].name + "</p>"  +
		 "<img src='../assets/2915889.png' alt='icon' class='product-image'/>" 
		 + "<p class='product-value'> <i class='fas fa-dollar-sign'></i> " + product[i].price 
		 + "</p><p class='total-product' id='total-product'>" + product[i].quantity +
		 "<p class='product-code'>" + product[i].code + "</p>";
	}
}

/*Escreve o valor dentro da carteira*/
function WriteWallet(){
	document.getElementById("wallet").innerHTML = "Dinheiro: R$ " + walletMoney;
}

function WriteMobileProducts(){
	for(var i = 0; i < product.length; i++){
		document.getElementById(product[i].codeMobile).innerHTML = "<p class='product-name'>" 
		+ product[i].name + "</p>" + "<img src='../assets/2915889.png' alt='icon' class='product-image'/>" + "<p class='product-value'> <i class='fas fa-dollar-sign'></i> " + product[i].price 
		+ "</p><p class='total-product' id='total-product'>" + product[i].quantity + "<p class='product-code'>" + product[i].code + "</p>";
	}
}

function WriteCart(){
	document.getElementById("cartValue").innerHTML = "R$ " + cartPrice;
}

function WriteMachineMoney(){
	machineMoney.CalculateTotal();
	document.getElementById("showC50").innerHTML = "R$ " + (machineMoney.c50 * 0.5);
	document.getElementById("showC1").innerHTML = "R$ " + machineMoney.c1;
	document.getElementById("showB2").innerHTML = "R$ " + (machineMoney.b2 * 2);
	document.getElementById("showB5").innerHTML = "R$ " + (machineMoney.b5 * 5);
	document.getElementById("showMobile").innerHTML = "R$ " + machineMoney.mobile;
	document.getElementById("showTotal").innerHTML = "R$ " + machineMoney.total;
}

function WriteCoupon(){
	document.getElementById("coupon-code").innerHTML = couponCode;
}

function WriteDiscount(){
	if(discount > 0 && !document.getElementById("productPrice").innerHTML.includes("Desconto")){
		document.getElementById("productPrice").innerHTML += "<br>Desconto R$" + discount;
	}
}

/*Escreve tudo acima*/
function WriteAll(){
	WriteWallet();
	WriteBalance();
	WriteInput();
	WriteProducts();
	WriteMobileProducts();
	WriteMachineMoney();
	WriteCart();
	WriteCoupon();
	WriteDiscount();
}

