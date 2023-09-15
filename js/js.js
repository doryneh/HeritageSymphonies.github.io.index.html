$(document).ready(function() {
  // Function to add or remove the "fixed-top" class based on scroll position
  function toggleFixedTop() {
    var topDivHeight = $("#TopNav").outerHeight();
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > topDivHeight) {
      // Scrolled past the TopDiv, add the "fixed-top" class to the navbar
      $(".navbar").addClass("fixed-top");
    } else {
      // Not scrolled past the TopDiv, remove the "fixed-top" class from the navbar
      $(".navbar").removeClass("fixed-top");
    }
  }

  // Initial call to set the class based on the initial scroll position
  toggleFixedTop();

  // Bind the function to the window scroll event
  $(window).scroll(toggleFixedTop);







  // Previous button click event
  $('.carousel-control-prev').click(function() {
    $('#Gellerycarousel').carousel('next');  // Run first carousel in the opposite direction
    $('#Gellerycarousel2').carousel('prev'); // Run second carousel in the opposite direction
  });

  // Next button click event
  $('.carousel-control-next').click(function() {
    $('#Gellerycarousel').carousel('prev');  // Run first carousel in the opposite direction
    $('#Gellerycarousel2').carousel('next'); // Run second carousel in the opposite direction
  });
});

