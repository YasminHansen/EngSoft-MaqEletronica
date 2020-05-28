///Só tá setado na HOME
///VENDOR:
///     LOGIN
///     OPTION
///     REMOVE

var vendorLogin = 'adminVend';
var vendorPassword = '123';

function closeModal(){
    document.getElementById("area-restrict-home").style.display = "flex";
    document.getElementById("vendor-login").style.display= "none";
    document.getElementById("vendor-options").style.display= "none";
    document.getElementById("vendor-remove").style.display= "none";
    document.getElementById("vendor-add").style.display= "none";
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