$(document).ready(function () {
  function activateCarouselItem($item) {
    $(".CarouselItem.active").removeClass("active");
    $item.addClass("active");
  }

  $(".CarouselItem").hover(function () {
    activateCarouselItem($(this));
  });

  // To ensure the active class change also works when hovering over CarouselOne
  $(".CarouselOne").hover(function () {
    activateCarouselItem($(this));
  });

  $(".CarouselDot").click(function () {
    var targetClass = $(this).data("target");
    $(".CarouselItem.active").removeClass("active");
    $(targetClass).addClass("active");
    $(".CarouselDot.active").removeClass("active");
    $(this).addClass("active");
  });

  /**Animation */
  function PinkSeperatorAnim() {
    var reveals = document.querySelectorAll(
      ".BlogCards,.AboutUs,.header,.footer,.Feedback,.ArtPartners,.Estefsar"
    );

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", PinkSeperatorAnim);

  // Add 'active' class when the screen is loaded
  $("header.header").addClass("active");

  // Wait 4 seconds and add 'active' class again
  setTimeout(function () {
    $("header.header").addClass("again");
  }, 2000);

  if (performance.navigation.type === 1) {
    // Scroll to the top of the page
    $("html, body").scrollTop(0);
  }
});

$(window).scroll(function () {
  var navbarHeight = $(".navbar").outerHeight(); // Get the height of the navbar
  var imagePartOffsetTop = $(".ImagePart img").offset().top; // Get the top offset of the ImagePart section
  var scrollTop = $(window).scrollTop(); // Get the current scroll position

  if (scrollTop >= imagePartOffsetTop - navbarHeight) {
    $(".navbar").css("z-index", "3000000"); // Change the z-index of the navbar
  } else {
    $(".navbar").css("z-index", "1050"); // Reset the z-index of the navbar
  }




  //BLog Cards Animation

  





});

$(".CardsPart .card").each(function(index) {
  var card = $(this);
  setTimeout(function() {
    card.addClass("active");
  }, index * 300); // 500 milliseconds = 0.5 seconds
});

$(".Feedback .GreyBox").each(function(index) {
  var card = $(this);
  setTimeout(function() {
    card.addClass("active");
  }, index * 300); // 500 milliseconds = 0.5 seconds
});

$(".ArtPartners .col-lg-3 img").each(function(index) {
  var card = $(this);
  setTimeout(function() {
    card.addClass("active");
  }, index * 300); // 500 milliseconds = 0.5 seconds
});
