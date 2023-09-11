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
});