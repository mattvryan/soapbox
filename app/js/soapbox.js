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
    $('#sb_search_toolbar_icon').click( function() {
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
    $('#sb_login_toolbar_icon').click( function() {
        $('#sb_menu').fadeOut();
        $('#sb_search').fadeOut();
        $('#sb_logout').fadeOut();
        if ($('#sb_login:visible').length) {
            $('#sb_login').fadeOut();
        } else {
            $('#sb_login').slideDown();
            $('#sb_login_username_input').focus();
            $('#sb_login_submit_button').attr('disabled', true);
        }
    });
    $('#sb_logout_toolbar_icon').hide().click( function() {
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
        // change the submit button to a washing machine
        var username_input = $('#sb_login_username_input');
        var password_input = $('#sb_login_password_input');
        var login_result = login(username_input.val(), password_input.val());
        $('#sb_login').fadeOut();
        username_input.val('');
        password_input.val('');
        if (login_result) {
            $('#sb_login_toolbar_icon').hide();
            $('#sb_logout_toolbar_icon').show();
        } else {
            alert('Invalid login credential supplied.');
        }
    });
    $('#sb_logout').hide().click( function(e) {
        e.preventDefault();
        $('#sb_logout').fadeOut();
        $('#sb_logout_toolbar_icon').hide();
        $('#sb_login_toolbar_icon').show();
        logout();
    });
    $('#sb_login_username_input').keyup( function() {
        $('#sb_login_submit_button').attr('disabled', $(this).val().length == 0 || $('#sb_login_password_input').val().length == 0);
    });
    $('#sb_login_password_input').keyup( function() {
        $('#sb_login_submit_button').attr('disabled', $(this).val().length == 0 || $('#sb_login_username_input').val().length == 0);
    })
}

function login(username, password) {
    if (! username || 0 == username.length || ! password || 0 == password.length)
    {
        return false;
    }
    // login here

    // dummy login
    if (username === 'abc' && password === '123') {
        return true;
    }
    return false;
}

function logout() {
    // logout here
}
