/*Chamado ao pressionar um número do teclado*/
function PressedNumber(num){
	var tempInput;
	
	if(input == "--"){
		input = num + "-";
		tempInput = "0" + num;
		for(var i=0; i < product.length; i++){
			if(product[i].code == tempInput){
				productName = product[i].name;
				productPrice = product[i].price;
			}
		}
	}
	else if(input.includes("-")){
		input = input.replace("-", num);
	
		for(var i=0; i < product.length; i++){
			if(product[i].code == input){
				productName = product[i].name;
				productPrice = product[i].price;				
				break;
			}
			else{
				productName = "--";
				productPrice = "--";
			}
		}
	}
	
	//WriteInput();
}

/*Chamado ao pressionar o botão de confirmar do teclado*/
function Confirm(){
	
	if(productName != "--"){
		
		if(input.includes("-"))
			productCode = "0" + input.replace("-", "");
		else
			productCode = input;
		
		input = productCode;
		
		for(var i=0; i < product.length; i++){
			if(product[i].code == productCode){

				if(product[i].quantity > 0){
					alert("Produto selecionado, insira o dinheiro!");
				}
				else if(product[i].quantity <= 0 && product[i].name != "Vazio"){
					alert("Produto em falta!");
					Cancel();
				}
				else{
					alert("Não há produtos com esse código!");
					Cancel();
				}
				break;
			}
		}
	}
	
	WriteAll();
}

/*Chamado ao pressionar o botão de cancelar do teclado*/
function Cancel(){
	input = "--";
	productCode = "--";
	productName = "--";
	productPrice = "--";
	//WriteInput();
}