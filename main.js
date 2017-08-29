// Header Left Mouse over and out
$(".left-side").mouseover(function(){
  $(".left-content").css("display", "block");
  $(".hamburger-container").css("display", "none")
})

$(".left-side").mouseout(function(){
  $(".left-content").css("display", "none");
  $(".hamburger-container").css("display", "block")
})

// Header Right Mouse over and out
$(".right-side").mouseover(function(){
  $(".right-content").css("display", "block");
  $(".arrow-container").css("display", "none")
})

$(".right-side").mouseout(function(){
  $(".right-content").css("display", "none");
  $(".arrow-container").css("display", "block")
})



// SCROLLING TO LOCATION PER NAV BAR

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



// Side Bar Toggle Hamburger Icon
$(".side-nav-hamburger").on("click",function(){
  $(".side-nav").toggleClass("no-display, yes-display");
})



// CONNECTING TO FIREBASE FOR CONTACT FORM
var config = {
 apiKey: "AIzaSyBESqMvlcy-LBqLu2Id1NtED0o5ymohv7I",
    authDomain: "portfolio-contact-page.firebaseapp.com",
    databaseURL: "https://portfolio-contact-page.firebaseio.com",
    projectId: "portfolio-contact-page",
    storageBucket: "portfolio-contact-page.appspot.com",
    messagingSenderId: "462280894183"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var db = firebase.database();

var contactForm = db.ref("/contactform");
// Use the below initialValue
function contactInformation() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var message = document.getElementById("message").value;
    contactForm.push({
      name: name,
      email: email,
      message: message,
      phoneNumber: phoneNumber
    })

}



$(document).ready(function(){

$(".contact-send-button").click(function(){
  alert("Your Message Is On Its Way!")
  $("#name").val("");
  $("#email").val("");
  $("#phoneNumber").val("");
  $("#message").val("");
})

});



