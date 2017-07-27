$(document).ready(function() {

    /* var menu = $('.menu');
     var origOffsetY = menu.offset().top;

     function scroll() {
         if ($(window).scrollTop() >= origOffsetY) {
             $('.menu').addClass('sticky');
             $('.content').addClass('menu-padding');
         } else {
             $('.menu').removeClass('sticky');
             $('.content').removeClass('menu-padding');
         }
     }
     document.onscroll = scroll;*/
    //searchParam=name^watch
    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        var newloction = $(this).attr('action') + $('#query').val();
        console.log(newloction);
        window.location = newloction;
    });

});