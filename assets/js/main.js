$(function () {

    var container = $('.parallax');

    $('a').click(function () {
        var target = $($.attr(this, 'href'));
        setTimeout(function () {
            container.animate({
                scrollTop: container.scrollTop() + target.offset().top
            }, 500);
        }, 150);
        return false;
    });

});