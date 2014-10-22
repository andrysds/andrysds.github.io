$(function() {
	$(".continue-reading").click(function() {
		$(this).hide();
		$('.hidden-article').slideToggle(1500);
	});
});

$(function() {
	$(".shrink-again").click(function() {
		$('.continue-reading').show();
		$('.hidden-article').slideToggle(1500);
	});
});