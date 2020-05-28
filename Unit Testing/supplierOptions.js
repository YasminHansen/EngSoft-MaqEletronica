function RemoveProduct(removedCode){
	
	removeCode = removedCode;
	
	var index = removeCode - 1;
	var result = CheckExistingCode(removeCode);
	
	if(result == 1){
		product[index].name = "Vazio";
		product[index].price = 0.00;
		product[index].quantity = 0;
		
		//document.getElementById("removeCode").value = "";
		
		console.log("Produto removido com sucesso!");
	}
	else if(result == 0){
		console.log("Esse espaço já está vazio!");
	}
	else{
		console.log("Código inválido!");
	}
	
	//WriteAll();
}

function NewProduct(nCode, nName, nPrice, nQty){
	newCode = nCode;
	newName = nName;
	newPrice = nPrice;
	newQuantity = nQty;
	
	var index = newCode - 1;
	var result = CheckExistingCode(newCode);
	
	if(result == 0){
		
		if(newName == "" || newPrice == "" || newQuantity == "")
			console.log("Por favor preencha todos os itens!")
		else{		
			product[index].name = newName;
			product[index].price = newPrice;
			product[index].quantity = newQuantity;
			
			//document.getElementById("newCode").value = "";
			//document.getElementById("newName").value = "";
			//document.getElementById("newPrice").value = "";
			//document.getElementById("newQuantity").value = "";
			
			console.log("Produto adicionado com sucesso!");
		}

		//WriteAll();
	}
	else if(result == 1){
		console.log("Já existe um produto cadastrado com esse código!");
	}
	else{
		console.log("Código inválido!");
	}
}

function AlterProduct(aCode, aName, aPrice, aQty){

	alterCode = aCode || 0;
	alterName = aName;
	alterPrice = aPrice;
	alterQuantity = aQty;

	var index = alterCode - 1;
	var result = CheckExistingCode(alterCode);
	
	if(result == 1){
		if(alterName != "")
			product[index].name = alterName;
		
		if(alterPrice != "")
			product[index].price = alterPrice;
		
		if(alterQuantity != "")
			product[index].quantity = alterQuantity;
		
		//document.getElementById("alterCode").value = 0;
		//document.getElementById("alterName").value = 0;
		//document.getElementById("alterPrice").value = 0;
		//document.getElementById("alterQuantity").value = 0;
		
		console.log("Produto alterado com sucesso!");
	}
	else if(result == 0){
		console.log("Esse espaço está vazio. Você pode adicionar este produto utilizando a tela anterior.")
	}
	else{
		console.log("Código inválido!");
	}
	
	//WriteAll();
}

function CheckExistingCode(code){
	var exists = 0;
	
	if(code > 9 || code < 1)
		exists = 2;
	else if(product[code - 1].name != "Vazio")
		exists = 1;
	
	return exists;
}