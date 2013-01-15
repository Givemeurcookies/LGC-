//Created by: Jon Brede Skaug
//Date: 4th January 2013
//Comment: Recreated this from a typewriter class I made in AS3
function typeWriter(id) {

	// Constructor
	console.log("typeWriter has been assigned to "+id);
	recursiveAnim();

	// Public variables
	// None

	// Private variables
    var typeQue = [];
    var stringi;
    var animFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		null;

    // Public functions
    this.write = function(msg) {
    	typeQue.push(msg);
    }
    
    this.changeSpeed = function(){
    	
    }
    // Private functions
    var tick = function() {
    	if (typeQue[0]) {
       		if(stringi<=stringLength) {
       			Main.terminal.appendText(msgQue[0].charAt(stringi));
				stringi++;
       		} else {
       			typeQue.splice(0,1);
				stringi = 0;
       		}
		}
    };
    var recursiveAnim = function() {
       	tick();
       	animFrame( recursiveAnim );
    };
}