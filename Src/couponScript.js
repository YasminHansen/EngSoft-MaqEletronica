/*Chamado ao pressionar um número do teclado (Modo Cupom)*/
function PressedNumberCoupon(num){
	
	if(couponCode == "---"){
		couponCode = num + "--";
	}
	else if(couponCode.includes("--")){
		couponCode = couponCode.replace("-", num);
	}
	else if(couponCode.includes("-")){
		couponCode = couponCode.replace("-", num);
	}
	
	WriteCoupon();
}

/*Chamado ao pressionar o botão de confirmar do teclado (Modo Cupom)*/
function ConfirmCoupon(){
	
	var couponFound = 0;
	
	if(productName != "---"){
		
		for(var i=0; i < coupons.length; i++){
			if(coupons[i].code == couponCode && coupons[i].quantity > 0){
				alert("Desconto aplicado: " + coupons[i].message);
				discount = coupons[i].discount;
				couponFound = 1;
				coupons[i].quantity--;
				break;
			}
			else if(coupons[i].code == couponCode){
				alert("Esse código de cupom está esgotado!");
				couponFound = 1;
				break;
			}
		}
		if(couponFound == 0){
			alert("Nennhum cupon encontrado com esse código!");
		}
	}
	CancelCoupon();
	WriteAll();
}

/*Chamado ao pressionar o botão de cancelar do teclado (Modo Cupom)*/
function CancelCoupon(){
	couponCode = "---";
	WriteCoupon();
}