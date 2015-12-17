$(document).ready( function(){
	$(".menu a").on("hover", function(){
		$(this).addClass("colorchange");	
	});
	
	$(".menu a").on("mouseleave", function(){
		$(this).removeClass("colorchange");
	});
	
	$("menu a").on("click", function(){
		$(this).addClass("active");
	});
});

