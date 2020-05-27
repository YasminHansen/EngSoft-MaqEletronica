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
    document.getElementById("vendor-login").style.display= "none";
    document.getElementById("vendor-options").style.display= "block";
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
    document.getElementById("supplier-login").style.display= "none";
    document.getElementById("supplier-options").style.display = "block";
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