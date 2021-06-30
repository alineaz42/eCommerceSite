
// search 
$(document).ready(function () {
    $(".search-bar-click").click(function () {
        $('.search-bar').addClass('search-bar-active');
    });
    $('.search-cancel').click(function () {
        $('.search-bar').removeClass("search-bar-active");
    });
});

// login form 
$(document).ready(function () {
    $('.logIn').click(function () {
        $('.form').css('display', "flex");
    });
    $('.cancel-btn').click(function () {
        $('.form').css('display', "none");
    });

    $('.creat-account').click(function () {
        $('.sign-up-form').css("display", "flex");
        $('.login-form').css("display", "none");
    });
    $('.login-account').click(function () {
        $('.sign-up-form').css("display", "none");
        $('.login-form').css("display", "flex");
    });
});