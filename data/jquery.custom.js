$(function(){

	$(window).load(function() {
	  $('.flexslider').flexslider({
		animation: "slide"
	  });
	});

});

$('#section-3 ul').appear(function() {
	$("#section-3 li").addClass("animate fadeInLeft");
	return false;
});

$('#introduction').appear(function() {
	$("#section-1 #header-fold").addClass("animate fadeInUp");
	return false;
});

$('#section-1 hgroup').appear(function() {
	$("#section-1 hgroup").addClass("animate fadeInDown");
	return false;
});

$('#section-1 .span4').appear(function() {
	$("#section-1 .span4").addClass("animate fadeInLeft");
	return false;
});

$('#section-1 .span4').appear(function() {
	$("#section-1 .span4 .icon").addClass("animate fadeIn");
	return false;
});

$('#section-2 hgroup').appear(function() {
	$("#section-2 hgroup").addClass("animate fadeInDown");
	return false;
});

$('#section-4 hgroup').appear(function() {
	$("#section-4 hgroup").addClass("animate fadeInDown");
	return false;
});

$('#section-2 .diagram').appear(function() {
	$("#section-2 .diagram").addClass("animate fadeInUp");
	return false;
});

$('#section-6 blockquote p').appear(function() {
	$("#section-6 blockquote p").addClass("animate fadeInDown");
	return false;
});

$('#section-7 .span12').appear(function() {
	$("#section-7 .span12").addClass("animate fadeInUp");
	return false;
});

$(".btn[rel]").click(function() {
     $('html, body').animate({
         scrollTop: $("#"+ $(this).attr('rel')).offset().top
     }, 600);
 });

$(function() { 
	if(window.location.hash == "#wpcf7-f166-p139-o1")
 	$('#request-modal').modal('show');
});
