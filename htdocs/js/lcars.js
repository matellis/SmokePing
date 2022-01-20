jQuery.noConflict();
document.addEventListener("touchstart", function() {},false);

jQuery(window).scroll(function() {
    var height = jQuery(window).scrollTop();
    if (height > 100) {
        jQuery('.scroll-top a').fadeIn();
    } else {
        jQuery('.scroll-top a').fadeOut();
    }
});

jQuery(document).ready(function() {
    jQuery("#scroll-top").click(function(event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
