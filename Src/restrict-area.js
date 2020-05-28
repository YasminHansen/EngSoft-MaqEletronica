///Só tá setado na HOME
///VENDOR:
///     LOGIN
///     OPTION
///     REMOVE
///ABASTECEDOR
///     LOGIN
///     OPTIONS
///     ADD
///     EDIT
///     REMOVE

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

//FUNÇÕES DO TELEFONE
function goToTelephonePayment(){
    document.getElementById("machine-mobile-products").style.display = "none";
    document.getElementById("machine-mobile-payment").style.display = "block";
}

function showHistoric(){
    document.getElementById("historic").classList.toggle('active');
}