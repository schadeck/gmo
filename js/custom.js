$(window).resize(function() {
    heightResize();
});
$(function() {
    heightResize();
});
var heightResize = function() {
    var headerWidth = $('header').width();
    $('li').css({
    	"height": headerWidth + "px"
    });
    //console.log(logoWidth);
}