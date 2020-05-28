function AddToCart(productCode){
	
	for(var i=0; i < product.length; i++){
		if(product[i].code == productCode){	
			if(product[i].quantity > 0){
				WriteLog("Adicionou " + product[i].name + " ao carrinho. Valor: R$ " + product[i].price);			
				cartPrice += product[i].price;					
				
				product[i].quantity--;
			}				
			else
				alert("Este produto está em falta!");
		}
	}
	
	WriteAll();
}

function ConfirmCart(){
	
	if(cartPrice != 0){
		WriteLog("Comprou itens do carrinho pelo valor de R$ " + cartPrice);		
	
		machineMoney.mobile += cartPrice;
	
		cartPrice = 0;
	}
	else
		alert("O carrinho está vazio!");
	
	WriteAll();
}