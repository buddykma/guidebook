$(window).bind("load", function () {
    // code goes here
    $('body').addClass('loaded');
});

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

    var isToggled = false;

    var $hamburger = $(".hamburger");
    $hamburger.click(function (e) {
        console.log('clicked');
        $hamburger.toggleClass("is-active");
        $('#myDropdown').toggle('show', function () {
            isToggled = !isToggled;
        });
        // Do something else, like open/close menu
    });

    $(window).click(function (e) {
        if (!e.target.classList.contains('dropbtn')) {
            if (isToggled) {
                $('#myDropdown').toggle('show');
                isToggled = false;
            }
            $hamburger.toggleClass("is-active", false);
        }
    });

});