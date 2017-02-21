//Function constructors
function Circle (radius) {
	this.radius = radius;
	
	this.diameterFn = function (){
		return 2*this.radius;
	};

	this.areaFn = function (){
		return Math.PI * Math.pow(this.radius,2);
	};

	this.diameter = this.diameterFn();
	this.area = this.areaFn();

	this.displayInfo = function (){
		alert("The Radius = " + this.radius + " units. It's Area is = " + this.area + " unit^2");
		return this;
	};

	this.displayDiameter = function (){
		alert("The Diameter = " + this.diameter + " units");
		return this;
	};
	
}

function test(){
	console.log(this);

	return this;    
};

a = test();

console.log(a);

var myCircle = new Circle(10);
console.log(myCircle);


console.log(myCircle);

myCircle.displayInfo().displayDiameter();