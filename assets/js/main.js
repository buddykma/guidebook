$(function () {

    var container = $('.parallax');

    $('a').click(function () {
        var target = $($.attr(this, 'href'));
        setTimeout(function () {
            container.animate({
                scrollTop: container.scrollTop() + target.offset().top
            }, 1000);
        }, 150);
        return false;
    });

    var $hamburger = $(".hamburger");
    $hamburger.click(function (e) {
        console.log('clicked');
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
    });

});