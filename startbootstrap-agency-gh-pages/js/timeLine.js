var remaining = 5;

$(window).scroll(function(){
    
    var scrollPos = getRelativePos("timelineActive");
    if (scrollPos <= 0){
        changeActive("timelineActive");
    };
});

function getRelativePos(elementClass){

    var myElement = $("." + elementClass).eq(0);

    if (myElement.length == 0) return 1;

    var myElementHeight = myElement.height();
    var myElementPosition = myElement.offset().top;
    var scrollPos = $(document).scrollTop();
    var windowHeight = $(window).height();

    //Esta variable es para que cargue un poco antes o despues de llegar al final del elemento
    var loadOffset;
    if (($(window).width() <= 768)) loadOffset = -150;
    else loadOffset = -200;

    return myElementPosition-windowHeight-scrollPos + myElementHeight - loadOffset;
}

function changeActive(elementClass){
    var myElement = $("." + elementClass).eq(0);
    myElement.removeClass(elementClass);

    if (remaining>0){
        var target = $(".timeline").eq(0);
        target.append(
            createNewEvent((remaining%2 == 0), "img/about/1.jpg","2018", "SwapShop","Rulo hizo nudos")
        );
        remaining --;
    }else if (remaining == 0){
        var target = $(".timeline").eq(0);
        target.append( 
            createFinalEvent()
        );
        remaining --;
    }
}

function createNewEvent(isInverted,myImage, myYear, myTitle,myDescription){
    var myString = "<li class = \""
    if (isInverted){
        myString+="timeline-inverted bounceInLeft "
    } else {
        myString+="bounceInRight "
    }
    myString+="animated timelineActive\"><div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"";
    myString+=myImage;
    myString+= "\" alt=\"\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4>";
    myString+=myYear;
    myString+="</h4><h4 class=\"subheading\">";
    myString+=myTitle;
    myString+="</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">";
    myString+=myDescription;
    myString+="</p></div></div></li>";
    return myString;
}

function createFinalEvent(){
    return "<li class=\"timeline-inverted bounceInUp animated\"><div class=\"timeline-image\"><h4>Sé parte<br>del cambio</h4></div></li>";
}