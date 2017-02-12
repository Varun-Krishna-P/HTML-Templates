$(function(){
	dropdownToggle();
	toggleBars();
	loginModal();
});

/* function that toggles the 
* dropdown inside the nav bar
*/
function dropdownToggle() {

	$('li.w3-dropdown-click').mouseover(function(){
		$('#sub-menu').addClass('w3-show');
	}).mouseout(function(){
		$('#sub-menu').removeClass('w3-show');
	});
}

function toggleBars(){

	$('li.w3-opennav a').click(function(){
		if($("#bars").hasClass('w3-show')){
			$("#bars").removeClass('w3-show');
		}else{
			$('#bars').addClass('w3-show');
		}
		
	});
}

function loginModal(){
	$('.login-modal').click(function(){
		swal($('.login-modal a').data('url'));
		showModal($('.login-modal a').data('url'));
	});
}
function showModal(url){
	console.log(url);
	header = $(url).find('.modal-header');
	body = $(url).find('.modal-body');
	footer = $(url).find('.modal-footer');

	$('.modal-header').load(header);
	$('.modal-body').load(body);
	$('.modal-footer').load(footer);
	$("#modal1").show();

}