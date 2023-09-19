$(document).ready(function () {

    $("#flexSwitchCheckDefault").click(function () {
        if ($("body,.WhiteBG,footer.footer").hasClass("dark-mode")) {
            $("body,.WhiteBG,footer.footer").removeClass("dark-mode");
            $("body.dark-mode  .OrangeBg").removeClass("dark-mode")
            $("*").css("color", "");

        } else {
            $("body,.WhiteBG,footer.footer").addClass("dark-mode");
            $("*").css("color", "white");
            $(".VideoPage .accordion-item .accordion-button, .VideoPage .accordion-item").css("background-color", "transparent");
            $(".disabled").css("color", "white !important");
          
        }
    });
});