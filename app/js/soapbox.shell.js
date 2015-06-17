/*
 * soapbox.shell.js
 */

/* jslint					browser : true,		continue : true,
	devel : true,		indent : 2,				maxerr : 50,
	newcap : true,	nomen : true,			plusplus : true,
	regexp : true,	sloppy : true,		vars : false,
	white : true
*/
/* global $, soapbox */

soapbox.shell = (function() {
	var
		configMap = {
			mainHtml : String()
				+ '<div class="sb-shell-header">'
				+ '	 <div class="sb-shell-header-logo">LOGO</div>'
				+ '</div>'
				+ '<div class="sb-shell-main">'
				+ '	 <div class="sb-shell-main-menubar">'
				+ '		 <div class="sb-shell-main-menubar-menu">'
				+ '			 MENU'
				+ '		 </div>'
				+ '		 <div class="sb-shell-main-menubar-login">'
				+ '			 LOGIN'
				+ '		 </div>'
				+ '	 </div>'
				+ '	 <div class="sb-shell-main-content">'
				+ '		 CONTENT'
				+ '	 </div>'
				+ '</div>'
		},
		stateMap = { $container : null },
		jQueryMap = { },
	
		setJQueryMap, initModule;
	
	setJQueryMap = function() {
		var $container = stateMap.$container;
		jQueryMap = { $container : $container };
	};
	
	initModule = function( $container ) {
		stateMap.$container = $container;
		$container.html( configMap.mainHtml );
		setJQueryMap();
	};
	
	return { initModule : initModule };
}());