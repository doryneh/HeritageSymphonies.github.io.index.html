/// Function to update CSS based on selected language
function updateCSSBasedOnLanguage(selectedValue) {
  var bootstrapCssLink = $('link[href*="bootstrap"]');
  var customCssLink = $('link[href*="style"]');
  var LTRstomCssLink = $('link[href*="LTR"]');

  if (selectedValue === "2" || selectedValue === "3") {
    bootstrapCssLink.attr("href", "assets/css/bootstrap.css");
    customCssLink.attr("href", "css/LTR.css");
  } else {
    bootstrapCssLink.attr("href", "assets/css/bootstrap.rtl.css");
    LTRstomCssLink.attr("href", "css/style.css");
  }

  // Save the selected language and option to local storage
  localStorage.setItem("selectedLanguage", selectedValue);
  localStorage.setItem(
    "selectedOption",
    $("#languageSelect option:selected").val()
  );
}

// Check the selected language on page load and update CSS
var initialSelectedValue =
  localStorage.getItem("selectedLanguage") || $("#languageSelect").val();
var initialSelectedOption =
  localStorage.getItem("selectedOption") ||
  $("#languageSelect option:selected").val();

// Set the selected language and option
$("#languageSelect").val(initialSelectedOption);

// Update CSS based on the selected language
updateCSSBasedOnLanguage(initialSelectedValue);

// Monitor the language select and update CSS on change
$("#languageSelect").change(function () {
  var selectedValue = $(this).val();
  updateCSSBasedOnLanguage(selectedValue);
});





