/*
 * soapbox.js
 */

/* jslint			browser : true,		continue : true,
    devel : true,	indent : 2,			maxerr : 50,
    newcap : true,	nomen : true,		plusplus : true,
    regexp : true,	sloppy : true,		vars : false,
    white : true
*/
/* global $, soapbox */

function createToolbar() {
    $('#sb_menu').hide();
    $('#sb_menu_toolbar_icon').click( function() {
        return toolbar_toggle('#sb_menu');
    });
    $('#sb_search').hide();
    $('#sb_search_toolbar_icon').click( function() {
        return toolbar_toggle('#sb_search', function() {
            $('#sb_search_input').focus();
        });
    });
    $('#sb_login').hide();
    $('#sb_login_toolbar_icon').click( function() {
        return toolbar_toggle('#sb_login', function () {
            $('#sb_login_username_input').focus();
            $('#sb_login_submit_button').attr('disabled', true);
        });
    });
    $('#sb_logout_toolbar_icon').hide().click( function() {
        return toolbar_toggle('#sb_logout');
    });
    $('#sb_login_submit_button').click( function(e) {
        e.preventDefault();
        // change the submit button to a washing machine
        var login_result = login($('#sb_login_username_input').val(), $('#sb_login_password_input').val(), onLoginSucceeded, onLoginFailed);
        $('#sb_login').fadeOut();
    });
    $('#sb_logout').hide().click( function(e) {
        e.preventDefault();
        $('#sb_logout').fadeOut();
        $('#sb_logout_toolbar_icon').hide();
        $('#sb_login_toolbar_icon').show();
        logout(onLogoutSucceeded, onLogoutFailed);
    });
    $('#sb_login_username_input').keyup( function() {
        $('#sb_login_submit_button').attr('disabled', $(this).val().length == 0 || $('#sb_login_password_input').val().length == 0);
    });
    $('#sb_login_password_input').keyup( function() {
        $('#sb_login_submit_button').attr('disabled', $(this).val().length == 0 || $('#sb_login_username_input').val().length == 0);
    })
}

function toolbar_toggle(tb_class_sel, onToolbarDropdownShow, onToolbarDropdownHide) {
    var wasDisplayed = $(tb_class_sel+':visible').length;
    $('.sb_dropdown').fadeOut();
    if (wasDisplayed) {
        $(tb_class_sel).fadeOut();
        if (onToolbarDropdownHide) onToolbarDropdownHide();
    } else {
        $(tb_class_sel).slideDown();
        if (onToolbarDropdownShow) onToolbarDropdownShow();
    }
}

function login(username, password, cbSuccess, cbFailure) {
    // login here

    // dummy login
    if (username === 'abc' && password === '123') {
        return cbSuccess();
    }
    return cbFailure();
}

function onLoginSucceeded() {
    // change the welcome text
    $('#sb_login').fadeOut();
    $('#sb_login_username_input').val('');
    $('#sb_login_password_input').val('');
    $('#sb_login_toolbar_icon').hide();
    $('#sb_logout_toolbar_icon').show();
}

function onLoginFailed() {
    // show the popup dialog
    alert('Invalid login credential supplied.');
    $('#sb_login').slideDown();
}

function logout(cbSuccess, cbFailure) {
    // logout here
}
