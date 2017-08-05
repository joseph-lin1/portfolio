
function scrollNav() {
  $('a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 10
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

$(".side-nav-hamburger").on("click",function(){
  $(".side-nav").toggleClass("no-display, yes-display");
})