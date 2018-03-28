function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

var samsungGalaxyS6 = new Phone("Samsung", 1500, "black");
var iPhone6S = new Phone("Apple", 2250, "white");
var onePlusOne = new Phone("OnePlus", 650, "silver");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();