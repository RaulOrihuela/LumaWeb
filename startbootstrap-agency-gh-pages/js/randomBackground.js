$(document).ready(function(){
    var urlString = "url(../startbootstrap-agency-gh-pages/img/backgrounds/bg0";

    var index = Math.ceil(((Math.random() * 41) + 1)/10);
    urlString += index.toString() + ".png";
    $('.masthead').css("background-image",urlString);
});