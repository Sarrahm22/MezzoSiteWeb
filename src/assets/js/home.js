$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','blue');
    } else {
    $('.navbar').css('background','transparent');
    }
    });