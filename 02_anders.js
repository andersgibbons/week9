var pin = process.argv[2];
console.log(pin);
var wpi = require('wiring-pi');
var pin = 18;
//console.log("wpi",wpi);
wpi.setup('gpio');
wpi.pinMode(pin*1,wpi.OUTPUT);
var value = 1;
function toggleBulb(){
	wpi.digitalWrite(pin*1,value);
	console.log("pin",pin,"value",value)
	value = +!value;
}

setInterval(toggleBulb,500);