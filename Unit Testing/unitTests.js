var currentTest = "Supplier Options"

function main(){
	
	if(currentTest == "Insert Money"){
		console.log("---------------------------");
		console.log("--Testing money insertion--");
		console.log("---------------------------");
		console.log("--Current values:--");
		console.log("	- Wallet: " + walletMoney);
		console.log("	- Machine Balance: " + balanceMoney.total);
		console.log("--Adding  R$ 5 to the machine--");
		AddMoney(5);
		balanceMoney.CalculateTotal();
		console.log("--Current values--");
		console.log("	- Wallet: " + walletMoney);
		console.log("	- Machine Balance: " + balanceMoney.total);
		console.log("--Adding  R$ 10 to the machine--");
		AddMoney(5);
		AddMoney(5);
		balanceMoney.CalculateTotal();
		console.log("--Current values--");
		console.log("	- Wallet: " + walletMoney);
		console.log("	- Machine Balance: " + balanceMoney.total);
		
		console.log("-------------------------------");
		console.log("--Check if machine has change--");
		console.log("-------------------------------");
		console.log("--Current machine values--");
		console.log("	- 50 cent coin: " + (machineMoney.c50 * 0.5));
		console.log("	- 1 real coin: " + machineMoney.c1);
		console.log("	- Coin total: " + ((machineMoney.c50*0.5) + machineMoney.c1));
		console.log("--Checking if machine has R$ 5 of change--");
		var result = CheckChange(5);
		if(result == 1)
			console.log("<<Has Change>>");
		else
			console.log("<<No Change>>");
		console.log("--Current machine values--");
		console.log("	- 50 cent coin: " + (machineMoney.c50*0.5));
		console.log("	- 1 real coin: " + machineMoney.c1);
		console.log("	- Coin total: " + ((machineMoney.c50*0.5) + machineMoney.c1));
		console.log("--Checking if machine has R$ 16 of change--");
		var result = CheckChange(16);
		if(result == 1)
			console.log("<<Has Change>>");
		else
			console.log("<<No Change>>");
		console.log("--Current machine values--");
		console.log("	- 50 cent coin: " + machineMoney.c50);
		console.log("	- 1 real coin: " + machineMoney.c1);
		console.log("	- Coin total: " + ((machineMoney.c50*0.5) + machineMoney.c1));
	}
	else if(currentTest == "Product Choice"){
		console.log("------------------");
		console.log("--Number Pressed--");
		console.log("------------------");
		console.log("--Current product info--");
		console.log("	- Product Code: " + input);
		console.log("	- Product Name: " + productName);
		console.log("	- Product Price: " + productPrice);
		console.log("--Simulating pressing num 1--");
		PressedNumber(1);
		console.log("--Current product info--");
		console.log("	- Product Code: " + input);
		console.log("	- Product Name: " + productName);
		console.log("	- Product Price: " + productPrice);
		console.log("--Simulating pressing num 0--");
		PressedNumber(0);
		console.log("--Current product info--");
		console.log("	- Product Code: " + input);
		console.log("	- Product Name: " + productName);
		console.log("	- Product Price: " + productPrice);
		console.log("--Simulating cancel--");
		Cancel();
		console.log("--Current product info--");
		console.log("	- Product Code: " + input);
		console.log("	- Product Name: " + productName);
		console.log("	- Product Price: " + productPrice);
		console.log("--Simulating pressing num 0--");
		PressedNumber(0);
		console.log("--Current product info--");
		console.log("	- Product Code: " + input);
		console.log("	- Product Name: " + productName);
		console.log("	- Product Price: " + productPrice);
		console.log("--Simulating pressing num 3--");
		PressedNumber(3);
		console.log("--Current product info--");
		console.log("	- Product Code: " + input);
		console.log("	- Product Name: " + productName);
		console.log("	- Product Price: " + productPrice);
	}
	else if(currentTest == "Mobile Buy"){
		console.log("------------------------------------");
		console.log("--Adding products to cart (Mobile)--");
		console.log("------------------------------------");
		console.log("--Current cart info--");
		console.log("	- Cart Price: " + cartPrice);
		console.log("--Adding Stikadinho (Price: 3.5)--");
		AddToCart(3);
		console.log("--Current cart info--");
		console.log("	- Cart Price: " + cartPrice);
		console.log("--Adding Kit-Kat (Price: 5)--");
		AddToCart(1);
		console.log("--Current cart info--");
		console.log("	- Cart Price: " + cartPrice);
		console.log("--Confirming Cart--");
		ConfirmCart();
		console.log("--Current cart info--");
		console.log("	- Cart Price: " + cartPrice);
	}
	else if(currentTest == "Vendor Options"){
		console.log("----------------------------------");
		console.log("--Withdrawing money from machine--");
		console.log("----------------------------------");
		machineMoney.CalculateTotal();
		console.log("--Current machine values--");
		console.log("	- 50 cent coin: " + (machineMoney.c50 * 0.5));
		console.log("	- 1 real coin: " + machineMoney.c1);
		console.log("	- 2 real bill: " + (machineMoney.b2 * 2));
		console.log("	- 5 real bill: " + (machineMoney.b5 * 5));
		console.log("	- Money total: " + machineMoney.total);
		console.log("--Withdrawing money--");
		console.log("--R$ 20 will be left (10 from 50 cent coins and 10 from 1 real coins)--");
		WithdrawMachineMoney();
		machineMoney.CalculateTotal();
		console.log("--Current machine values--");
		console.log("	- 50 cent coin: " + (machineMoney.c50 * 0.5));
		console.log("	- 1 real coin: " + machineMoney.c1);
		console.log("	- 2 real bill: " + (machineMoney.b2 * 2));
		console.log("	- 5 real bill: " + (machineMoney.b5 * 5));
		console.log("	- Money total: " + machineMoney.total);
	}
	else if(currentTest == "Supplier Options"){
		console.log("-----------------------------");
		console.log("--Removing existing product--");
		console.log("-----------------------------");
		console.log("--Current product info--");
		console.log("	- Product Code: " + product[1].code);
		console.log("	- Product Name: " + product[1].name);
		console.log("	- Product Price: " + product[1].price);
		console.log("	- Product Quantity: " + product[1].quantity);
		console.log("--Removing Product--");
		RemoveProduct(2);
		console.log("--Current product info--");
		console.log("	- Product Code: " + product[1].code);
		console.log("	- Product Name: " + product[1].name);
		console.log("	- Product Price: " + product[1].price);
		console.log("	- Product Quantity: " + product[1].quantity);
		
		
		console.log("-----------------------");
		console.log("--Include new product--");
		console.log("-----------------------");
		console.log("--Current product info--");
		console.log("	- Product Code: " + product[1].code);
		console.log("	- Product Name: " + product[1].name);
		console.log("	- Product Price: " + product[1].price);
		console.log("	- Product Quantity: " + product[1].quantity);
		console.log("--Including Product--");
		NewProduct(2, 'New Name', 'New Price', 'New Quantity');
		console.log("--Current product info--");
		console.log("	- Product Code: " + product[1].code);
		console.log("	- Product Name: " + product[1].name);
		console.log("	- Product Price: " + product[1].price);
		console.log("	- Product Quantity: " + product[1].quantity);
		
		
		console.log("----------------------");
		console.log("--Alter product info--");
		console.log("----------------------");
		console.log("--Current product info--");
		console.log("	- Product Code: " + product[1].code);
		console.log("	- Product Name: " + product[1].name);
		console.log("	- Product Price: " + product[1].price);
		console.log("	- Product Quantity: " + product[1].quantity);
		console.log("--Altering product info--");
		AlterProduct(2, 'Altered Name', 'New Price', 'Altered Quantity');
		console.log("--Current product info--");
		console.log("	- Product Code: " + product[1].code);
		console.log("	- Product Name: " + product[1].name);
		console.log("	- Product Price: " + product[1].price);
		console.log("	- Product Quantity: " + product[1].quantity);
	}
}