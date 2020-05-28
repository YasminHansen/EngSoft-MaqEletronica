/*Debug Log*/
function WriteLog(string){
	document.getElementById("log").innerHTML = document.getElementById("log").innerHTML.concat(string + "<br \>");
}

function ClearLog(){
	//alert("Troco: " + machineMoney.c50 + "-50 / " + machineMoney.c1 + "-1 / " + machineMoney.b2 + "-2 / " + machineMoney.b5 + "-5");
	document.getElementById("log").innerHTML = "";
}