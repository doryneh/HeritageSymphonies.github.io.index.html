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



 // Get all the cards
 var cards = $("section.LatestNews .card");

 // Add a hover event to each card
 cards.on("mouseenter", function() {
   // Get the two other cards
   var otherCards = cards.not(this);

   // Scale the other cards down
   otherCards.css("transform", "scale(0.95)");

   // Set the other cards' opacity to 0.5
   otherCards.css("opacity", 0.5);
 });

 // Add a mouseleave event to each card
 cards.on("mouseleave", function() {
   // Reset the other cards
   $(".card").css("transform", "scale(1)");
   $(".card").css("opacity", 1);
 });
});

