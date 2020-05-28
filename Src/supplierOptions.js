function RemoveProduct(){
	
	removeCode = document.getElementById("removeCode").value;
	
	var index = removeCode - 1;
	var result = CheckExistingCode(removeCode);
	
	if(result == 1){
		product[index].name = "Vazio";
		product[index].price = 0.00;
		product[index].quantity = 0;
		
		document.getElementById("removeCode").value = "";
		
		alert("Produto removido com sucesso!");
	}
	else if(result == 0){
		alert("Esse espaço já está vazio!");
	}
	else{
		alert("Código inválido!");
	}
	
	WriteAll();
}

function NewProduct(){
	newCode = document.getElementById("newCode").value;
	newName = document.getElementById("newName").value;
	newPrice = parseFloat(document.getElementById("newPrice").value);
	newQuantity = parseFloat(document.getElementById("newQuantity").value);
	
	var index = newCode - 1;
	var result = CheckExistingCode(newCode);
	
	if(result == 0){
		
		if(newName == "" || newPrice == "" || newQuantity == "")
			alert("Por favor preencha todos os itens!")
		else{		
			product[index].name = newName;
			product[index].price = newPrice;
			product[index].quantity = newQuantity;
			
			document.getElementById("newCode").value = "";
			document.getElementById("newName").value = "";
			document.getElementById("newPrice").value = "";
			document.getElementById("newQuantity").value = "";
			
			alert("Produto adicionado com sucesso!");
		}

		WriteAll();
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
	alterPrice = parseFloat(document.getElementById("alterPrice").value);
	alterQuantity = parseFloat(document.getElementById("alterQuantity").value);

	var index = alterCode - 1;
	var result = CheckExistingCode(alterCode);
	
	if(result == 1){
		if(alterName != "")
			product[index].name = alterName;
		
		if(alterPrice != "")
			product[index].price = alterPrice;
		
		if(alterQuantity != "")
			product[index].quantity = alterQuantity;
		
		document.getElementById("alterCode").value = "";
		document.getElementById("alterName").value = "";
		document.getElementById("alterPrice").value = "";
		document.getElementById("alterQuantity").value = "";
		
		alert("Produto alterado com sucesso!");
	}
	else if(result == 0){
		alert("Esse espaço está vazio. Você pode adicionar este produto utilizando a tela anterior.")
	}
	else{
		alert("Código inválido!");
	}
	
	WriteAll();
}

function CheckExistingCode(code){
	var exists = 0;
	
	if(code > 9 || code < 1)
		exists = 2;
	else if(product[code - 1].name != "Vazio")
		exists = 1;
	
	return exists;
}