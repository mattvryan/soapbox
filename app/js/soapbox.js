/*
 * soapbox.js
 */

/* jslint					browser : true,		continue : true,
	devel : true,		indent : 2,				maxerr : 50,
	newcap : true,	nomen : true,			plusplus : true,
	regexp : true,	sloppy : true,		vars : false,
	white : true
*/
/* global $, soapbox */

function createToolbar() {
	$('#sb_menu').hide();
	$('#sb_menu_button').click( function() {
		$('#sb_search').fadeOut();
		$('#sb_login').fadeOut();
		$('#sb_logout').fadeOut();
		if ($('#sb_menu:visible').length) {
			$('#sb_menu').fadeOut();
		} else {
			$('#sb_menu').slideDown();
		}
	});
	$('#sb_search').hide();
	$('#sb_search_button').click( function() {
		$('#sb_menu').fadeOut();
		$('#sb_login').fadeOut();
		$('#sb_logout').fadeOut();
		if ($('#sb_search:visible').length) {
			$('#sb_search').fadeOut();
		} else {
			$('#sb_search').slideDown();
			$('#sb_search_input').focus();
		}
	});
	$('#sb_login').hide();
	$('#sb_login_button').click( function() {
		$('#sb_menu').fadeOut();
		$('#sb_search').fadeOut();
		$('#sb_logout').fadeOut();
		if ($('#sb_login:visible').length) {
			$('#sb_login').fadeOut();
		} else {
			$('#sb_login').slideDown();
			$('#sb_login_username_input').focus();
		}
	});
	$('#sb_logout_button').hide().click( function() {
		$('#sb_menu').fadeOut();
		$('#sb_search').fadeOut();
		$('#sb_login').fadeOut();
		if ($('#sb_logout:visible').length) {
			$('#sb_logout').fadeOut();
		} else {
			$('#sb_logout').slideDown();
		}
	});
	$('#sb_login_submit_button').click( function(e) {
		e.preventDefault();
		$('#sb_login').fadeOut();
		$('#sb_login_button').hide();
		$('#sb_logout_button').show();
	});
	$('#sb_logout').hide().click( function(e) {
		e.preventDefault();
		$('#sb_logout').fadeOut();
		$('#sb_logout_button').hide();
		$('#sb_login_button').show();
	});
	$('#sb_login_username').focus( function() {
		$(this).value='';
	});
}
