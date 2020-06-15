var walletMoney = 500;
var balance = 0;
var input = "--";
var productCode = "";
var productName = "--";
var productPrice = "--";
var couponCode = "---";
var discount = 0;

//passa pra products as infos do data.js
var product = data;
var coupons = couponsData;

function BillsAndCoins(c50, c1, b2, b5){
	this.c50 = c50;
	this.c1  = c1;
	this.b2  = b2;
	this.b5  = b5;
	this.mobile = 0;
	this.total = 0;
	
	this.CalculateTotal = function(){
		this.total = (this.c50*0.5)+ this.c1 + (this.b2*2) + (this.b5*5) + this.mobile;
	}
}

var machineMoney = new BillsAndCoins(20,10,3,2);
var balanceMoney = new BillsAndCoins(0,0,0,0);

var maxChange = 10;

var min50coins = 20;
var min1coins = 10;

var cartPrice = 0;