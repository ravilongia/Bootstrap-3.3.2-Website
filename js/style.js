/*-------------------------------------
-------------My Custom JS--------------
----------Author: Ravi Longia----------
--------Updated: February 2015---------
-------------------------------------*/

$(function(){

	$('#alertMe').click(function(e){

		e.preventDefault();
		$('#successAlert').slideDown();

	});

	$('a.pop').click(function(e){
		e.preventDefault();
	});

		$('a.pop').popover();
		$('[rel="tooltip"]').tooltip();
});
