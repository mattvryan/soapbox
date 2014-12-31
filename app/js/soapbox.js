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

var soapbox = (function () {
	var initModule = function ( $container ) {
		soapbox.shell.initModule( $container );
	};
	
	return { initModule : initModule };
}());