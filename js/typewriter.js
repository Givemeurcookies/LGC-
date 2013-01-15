// Created by: Jon Brede Skaug
// Date: 4th January 2013
// Comment: Recreated this from a typewriter class I made in AS3
(function($) {
	var animFrame = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			null;
	var defaults = {
		//Defaults
	};
	$.typewriter = function(settings) {
		console.log("Typewriter - Init");
		$.typewriter.init();
		return;
	};
		/* Public Functions */
	$.typewriter.init = function(){
		$.typewriter.write();
	}
	$.typewriter.write = function(letter){
		console.log("Looping!");
		animFrame($.typewriter.write());
	}
})(jQuery);