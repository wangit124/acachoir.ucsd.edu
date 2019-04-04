if (!sessionStorage.getItem('alerted')) {
    alert("WELCOME BACK FOR SPRING QUARTER!");
    sessionStorage.setItem('alerted', 'yes');
}

$(document).scroll(function () {
    var start = $('#about-spring').offset().top;
    var end = $('#about-spring').offset().top + $('#about-spring').height();
    if ($(document).scrollTop() >= start && $(document).scrollTop() <= end) {
        $('.dropdown-menu').css("display", "block");
    }
    else {
        $('.dropdown-menu').css("display", "none");
    }
});



$('.dropdown').mouseover(function () {
    $('.dropdown-menu').css("display", "block");
});

$('.dropdown').mouseleave(function () {
    $('.dropdown-menu').css("display", "none");
});