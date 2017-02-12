$(function(){
	toggleNavBarHighlight();
});

function toggleNavBarHighlight(){
	$('ul.w3-navbar li a').click(function(e){
		$('ul.w3-navbar li').each(function(){
			if($(this).find('a').hasClass('w3-teal')){
				$('ul.w3-navbar li a').removeClass('w3-teal');
			}
		});
		$(this).addClass('w3-teal');
	});
	// $('ul.w3-navbar li a').mouseover(function(e){
	// 	$('ul.w3-navbar li').each(function(){
	// 		if($(this).find('a').hasClass('w3-teal')){
	// 			$('ul.w3-navbar li a').removeClass('w3-teal');
	// 		}
	// 	});
	// 	$(this).addClass('w3-teal');
	// });
}