var vendorLogin = 'admin';
var vendorPassword = '123';

var supplierLogin = 'admin';
var supplierPassword = '123';

function closeModal(){
    document.getElementById("area-restrict-home").style.display = "flex";
    document.getElementById("vendor-login").style.display= "none";
    document.getElementById("vendor-options").style.display= "none";
    document.getElementById("vendor-remove").style.display= "none";
    document.getElementById("vendor-add").style.display= "none";
    document.getElementById("supplier-login").style.display= "none";
    document.getElementById("supplier-options").style.display = "none";
    document.getElementById("supplier-insert").style.display = "none";
    document.getElementById("supplier-edit").style.display = "none";
    document.getElementById("supplier-remove").style.display = "none";
}

//Funções das modais relacionadas ao VENDEDOR
function goToVendorLogin(){
    document.getElementById("vendor-login").style.display= "block";
    document.getElementById("area-restrict-home").style.display = "none";
}

function goToVendorOptions(){
	var login = document.getElementById("vendorLogin").value;
	var pass = document.getElementById("vendorPassword").value;
	
	if(login == vendorLogin && pass == vendorPassword){
		document.getElementById("vendor-login").style.display= "none";
		document.getElementById("vendor-options").style.display= "block";
		WriteAll();
		
		document.getElementById("vendorLogin").value = "";
		document.getElementById("vendorPassword").value = "";
	}
	else{
		alert("Usuário ou senha incorretos!");
	}
}

function goToVendorRemove(){
    document.getElementById("vendor-options").style.display= "none";
    document.getElementById("vendor-remove").style.display= "block";
}

function goToVendorAdd(){
    document.getElementById("vendor-options").style.display= "none";
    document.getElementById("vendor-add").style.display= "block";
}

//Funções das modais relacionadas ao ABASTECEDOR
function goToSupplierLogin(){
    document.getElementById("supplier-login").style.display= "block";
    document.getElementById("area-restrict-home").style.display = "none";
}

function goToSupplierOptions(){
	var login = document.getElementById("supplierLogin").value;
	var pass = document.getElementById("supplierPassword").value;
	
	if(login == supplierLogin && pass == supplierPassword){
		document.getElementById("supplier-login").style.display= "none";
		document.getElementById("supplier-options").style.display = "block";
		WriteAll();
		
		document.getElementById("supplierLogin").value = "";
		document.getElementById("supplierPassword").value = "";
	}
	else{
		alert("Usuário ou senha incorretos!");
	}
}

function goToSupplierInsert(){
    document.getElementById("supplier-options").style.display = "none";
    document.getElementById("supplier-insert").style.display = "block";
}

function goToSupplierEdit(){
    document.getElementById("supplier-options").style.display = "none";
    document.getElementById("supplier-edit").style.display = "block";
}

function goToSupplierRemove(){
    document.getElementById("supplier-options").style.display = "none";
    document.getElementById("supplier-remove").style.display = "block";
}

//FUNÇÕES DO HISTÓRICO
function removeUserProduct(){
    document.getElementById("remove-products").classList.remove('user-product');
}

//FUNÇÕES DO CUPOM
function activeKeyboardCoupon(){
    document.getElementById("keyboard-buttons").style.display = "none";
    document.getElementById("coupon-buttons").style.display = "block";

    document.getElementById("cancel-button").classList.add("cancel-button-style");
    document.getElementById("confirm-button").classList.add("confirm-button-style"); 

    var kbButton = document.getElementsByClassName("kb-button");
    for (var i = 0; i < kbButton.length; i++) {
        kbButton[i].classList.add("kb-button-style");
    }
}

function confirmCoupon(){
    document.getElementById("cancel-button").classList.remove("cancel-button-style");
    document.getElementById("confirm-button").classList.remove("confirm-button-style"); 
	
	document.getElementById("keyboard-buttons").style.display = "block";
	document.getElementById("coupon-buttons").style.display = "none";

    var kbButton = document.getElementsByClassName("kb-button");
    for (var i = 0; i < kbButton.length; i++) {
        kbButton[i].classList.remove("kb-button-style");
    }
	
	ConfirmCoupon();
}

function cancelCoupon(){
    document.getElementById("cancel-button").classList.remove("cancel-button-style");
    document.getElementById("confirm-button").classList.remove("confirm-button-style"); 
	
	document.getElementById("keyboard-buttons").style.display = "block";
	document.getElementById("coupon-buttons").style.display = "none";

    var kbButton = document.getElementsByClassName("kb-button");
    for (var i = 0; i < kbButton.length; i++) {
        kbButton[i].classList.remove("kb-button-style");
    } 
	
	CancelCoupon();
}