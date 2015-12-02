/*
A simple node.js application intended to blink the onboard LED whenever a tweet regarding a specific topic is sent.
*/

// Require
var mraa = require('mraa');



// Setup OUT

console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console
var myOnboardLed = new mraa.Gpio(12); //LED hooked up to digital pin 13 (standard on edison)
myOnboardLed.dir(mraa.DIR_OUT); //set the gpio direction to output
var ledState = true; //Boolean to hold the state of Led
myOnboardLed.write(ledState?1:0);
