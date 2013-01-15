// Modified by: Jon Brede Skaug
// Created by: Motyar
// URL: https://github.com/motyar/firefly
(function($) {

	/* Plugin defaults */
	var defaults = {
		images : ['http://dharmmotyar.googlecode.com/svn/trunk/images/spark.png'],
		total : 40
	};

	$.firefly = function(settings) {
		$.firefly.settings = $.extend({}, defaults, settings);
			if($.firefly.preloadImages()){
				for (i = 0; i < $.firefly.settings.total; i++){
					$.firefly.fly($.firefly.create($.firefly.settings.images[$.firefly.random(($.firefly.settings.images).length)]));
				}
			}
		return;
	};

	/* Public Functions */
	$.firefly.create = function(img){
		spark = $('<img>').attr({'src' : img}).hide();
		$(document.body).append(spark);
		return spark.css({
			'position':'absolute',
			'z-index': 1,
			'opacity': Math.random(),
			top: "50%",	//offsets
			left: "50%"		//offsets	
		}).show();
	}

	$.firefly.fly = function(sp) {
		if($("#container").css('display') == 'none') var setopacity = 0; else var setopacity = Math.random(); 
		$(sp).animate({
			// max + min
			'opacity': setopacity,
			top: (($.firefly.random(($("#container").height())+30))+($("#container").offset().top)-50),	//offsets
			left: (($.firefly.random(($("#container").width())+120))+($(window).width()/2-($("#container").width()/2))-75)
		}, (($.firefly.random(10) + 5) * 1000),function(){ $.firefly.fly(sp) } );
	};

	$.firefly.preloadImages = function() {
		var preloads = new Object();
		for (i = 0; i < ($.firefly.settings.images).length; i++){
			preloads[i] = new Image(); preloads[i].src = $.firefly.settings.images[i];
		}
		return true;
	}

	$.firefly.random = function(number) {
		return Math.ceil(Math.random() * number) - 1;
	}
})(jQuery);