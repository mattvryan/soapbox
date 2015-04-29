/*
 * soapbox.pre.js
 */

_sb_js_load_map =
{
    'jquery': {
        'remote': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js',
        'local': 'jquery.min.js',
        'test': 'window.jQuery'
    },
    'angular': {
        'remote': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js',
        'local': 'angular.min.js',
        'test': 'window.angular'
    },
    'bootstrap': {
        'remote': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js',
        'local': 'bootstrap.min.js',
        'test': '$.fn.modal'
    }
}
function jsLoad(jsLibName) {
    jsLib = _sb_js_load_map[jsLibName];
    if (jsLib) {
        document.write('\x3Cscript src="'
        + jsLib['remote']
        + '"\x3E\x3C/script\x3E');
        document.write('\x3Cscript\x3E'
        + jsLib['test']
        + ' || document.write(\'\x3Cscript src="js/3rdparty/'
        + jsLib['local']
        + '"\x3E\x3C\\/script\x3E\');\x3C/script\x3E');
    }
}
