$(document).ready(function() {

    //grows portriat when hovered
    $('.hero_container').hover(
        function() {
            $(this).addClass('grow');
        },
        function() {
            $(this).removeClass('grow');
    });


});
