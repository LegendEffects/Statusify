$(document).ajaxStart(function() {
    elements.loader.fadeIn(50);
});
$( document ).ajaxStop(function() {
    elements.loader.fadeOut(50)
});
$(document).ready(function() {
    elements.loader.fadeOut(50);
});