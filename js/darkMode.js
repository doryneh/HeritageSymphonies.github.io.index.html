$(document).ready(function () {

    function updateDarkMode() {
        var isChecked = $("#flexSwitchCheckDefault").is(":checked");
        
        if (isChecked) {
            $("body,.WhiteBG,footer.footer").addClass("dark-mode");
            $("*").css("color", "white");
            $(".VideoPage .accordion-item .accordion-button, .VideoPage .accordion-item").css("background-color", "transparent");
            $(".disabled").css("color", "white !important");
        } else {
            $("body,.WhiteBG,footer.footer").removeClass("dark-mode");
            $("body.dark-mode  .OrangeBg").removeClass("dark-mode");
            $("*").css("color", "");
        }

        // Save dark mode state to local storage
        localStorage.setItem("darkMode", isChecked);
    }

    $("#flexSwitchCheckDefault").click(function () {
        updateDarkMode();
    });

    // Load dark mode state from local storage on page load
    var darkModeEnabled = JSON.parse(localStorage.getItem("darkMode"));
    if (darkModeEnabled) {
        $("#flexSwitchCheckDefault").prop("checked", true);
        updateDarkMode();
    }
});
