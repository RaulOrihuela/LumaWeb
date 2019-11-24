$(document).ready(function(){
    var urlString = "url(../startbootstrap-agency-gh-pages/img/backgrounds/bg0";

    var index = Math.ceil(((Math.random() * 101) + 1)/20);
    urlString += index.toString() + ".png";
    $('.masthead').css("background-image",urlString);
});