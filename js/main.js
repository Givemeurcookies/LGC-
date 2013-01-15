$(document).ready(function() {
	var textcont = false;
	var cont1 = $("#container, #logo, #footer, #textcontainer");
	$("#about").click(function(){
		$("#container, #logo, #footer, #textcontainer").animate({
			top: "125px"
		}, 1500);
		$("#textcontainer").fadeIn(500);
		textcont = true;
	});
	$("#loginbtn").click(function(){
		$("#container, #logo, #footer").animate({
			left: "150px",
			opacity: 0
		}, 1500 ).fadeOut(10);
		if (textcont == true) $("#textcontainer").delay(100).animate({left: "150px",opacity:0}, 1400).fadeOut(10);
		$("#login").fadeIn(10).animate({
			right:'50%',
			margin: '-67.5px -125px 0 0',
			opacity:1
		}, 1500 );
	});
	$("#back").click(function(){
		$("#container, #logo, #footer").fadeIn(10).animate({
			left: "50%",
			opacity:1
		}, 1500);
		if (textcont == true) $("#textcontainer").delay(100).fadeIn(10).animate({left: "50%",opacity:1}, 1400);
		$("#login").animate({
			right:'0%',
			margin: '-67.5px 0 0 0',
			opacity:0
		}, 1500);
	});
	$("#loginform").submit(function() {
		alert('Handler for .submit() called.');
		return false;
	});
	$.firefly({images : ['img/firefly1.png'],total : 20});
	//var typewriter = new typeWriter("#someid");
	//typewriter.write("Message1");
});