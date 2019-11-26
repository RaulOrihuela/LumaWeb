var smallSize = false;

$(document).ready(function(){
    addContent(($(window).width() <= 768));
    smallSize = ($(window).width() <= 768);
});

$(window).resize(function(){

    if (!this.smallSize && ($(window).width() <= 768)) { 
        this.addContent(true);
    } else if (this.smallSize && ($(window).width() > 768)){
        this.addContent(false);
    } 
    smallSize = ($(window).width() <= 768);

});

function addContent(isSmall){
    var carousel = $('#carouselTeamMembers').children().eq(0);

    var myString;
    if (isSmall) myString = carousel1();
    else myString = carousel3();

    carousel.html(myString);
}

function carousel1(){
    var myString =
        carouselStart(true) +
        createMember(
            "img/team/Lizbeth.jpeg",
            "Lizbeth Lara",
            "Presidente",
            "https://www.instagram.com/lizbeth.lara.a/","https://www.facebook.com/","https://www.linkedin.com/"
        ) +
        carouselEnd()+
        carouselStart(false) +
        createMember(
            "img/team/Valeria.jpeg",
            "Valeria Herbas",
            "Vicepresidente",
            "https://www.instagram.com/valeherbas23/","https://www.facebook.com/valeria.herbasr","https://www.linkedin.com/"
        ) +
        carouselEnd()+
        carouselStart(false) +
        createMember(
            "img/team/3.jpg",
            "Paola Guzmán",
            "Administración y finanzas",
            "https://www.instagram.com/luma.tec/","https://www.facebook.com/","https://www.linkedin.com/"
        ) +
        carouselEnd()+
        carouselStart(false) +
        createMember(
            "img/team/Fer.jpg",
            "Fernando Cué",
            "Desarrollo sustentable",
            "https://www.instagram.com/luma.tec/","https://www.facebook.com/","https://www.linkedin.com/"
        ) +
        carouselEnd()+
        carouselStart(false) +
        createMember(
            "img/team/Raul.jpeg",
            "Raúl Orihuela",
            "Tecnologías computacionales",
            "https://www.instagram.com/raulor/","https://www.facebook.com/raul.orihuelarosas","https://www.linkedin.com/"
        ) +
        carouselEnd()+
        carouselStart(false) +
        createMember(
            "img/team/Rodrigo.jpeg",
            "Rodrigo de la Rosa",
            "Tecnologías computacionales",
            "https://www.instagram.com/rodrigosebastian49/","https://www.facebook.com/","https://www.linkedin.com/"
        ) +
        carouselEnd()+ 
        carouselStart(false) +
        createMember(
            "img/team/1.jpg",
            "Alejandra Salazar",
            "Mecatrónica",
            "https://www.instagram.com/alesalazar1999/","https://www.facebook.com/alesalzar11","https://www.linkedin.com/"
        ) +
        carouselEnd();
    return myString;
}


function carousel3(){
    var myString =
        carouselStart(true) +
        createMember(
            "img/team/Lizbeth.jpeg",
            "Lizbeth Lara",
            "Presidente",
            "https://www.instagram.com/lizbeth.lara.a/","https://www.facebook.com/lizbeth.adriiana.9","https://www.linkedin.com/"
        ) +
        createMember(
            "img/team/Valeria.jpeg",
            "Valeria Herbas",
            "Vicepresidente",
            "https://www.instagram.com/valeherbas23/","https://www.facebook.com/valeria.herbasr","https://www.linkedin.com/"
        ) +
        createMember(
            "img/team/3.jpg",
            "Paola Guzmán",
            "Administración y finanzas",
            "https://www.instagram.com/luma.tec/","https://www.facebook.com/","https://www.linkedin.com/"
        ) +
        carouselEnd()+
        carouselStart(false) +
        createMember(
            "img/team/Fer.jpg",
            "Fernando Cué",
            "Desarrollo sustentable",
            "https://www.instagram.com/luma.tec/","https://www.facebook.com/fer.cue.5","https://www.linkedin.com/"
        ) +
        createMember(
            "img/team/Raul.jpeg",
            "Raúl Orihuela",
            "Tecnologías computacionales",
            "https://www.instagram.com/raulor/","https://www.facebook.com/raul.orihuelarosas","https://www.linkedin.com/"
        ) +
        createMember(
            "img/team/Rodrigo.jpeg",
            "Rodrigo de la Rosa",
            "Tecnologías computacionales",
            "https://www.instagram.com/rodrigosebastian49/","https://www.facebook.com/rodrigosebastian.delarosaandres","https://www.linkedin.com/"
        ) +
        carouselEnd()+ 
        carouselStart(false) +
        createMember(
            "img/team/1.jpg",
            "Alejandra Salazar",
            "Mecatrónica",
            "https://www.instagram.com/alesalazar1999/","https://www.facebook.com/alesalzar11","https://www.linkedin.com/"
        ) +
        carouselEnd();

    return myString;
}


function carouselStart(isFirst){
    var myString = "<div class=\"carousel-item"
    if (isFirst) myString+= " active"
    myString+= "\"><div class=\"row justify-content-center\">";
    return myString;
}

function carouselEnd(){
    return "</div></div>";
}

function createMember(memberImage, memberName, memberTitle, memberIn, memberFb, memberLi){
    var myString = "<div class=\"col-md-4\"><div class=\"team-member\"><img class=\"mx-auto rounded-circle\" src=\"";
    
    myString+=memberImage;
    myString+="\" alt=\"\"><h4>"
    
    myString+=memberName;
    myString+="</h4><p class=\"text-muted\">";
    myString+=memberTitle;

    myString+="</p><ul class=\"list-inline social-buttons\">";
    myString+=
        createIcon("instagram", memberIn) + 
        createIcon("facebook-f", memberFb) + 
        createIcon("linkedin-in", memberLi)
    ;

    myString += "</ul></div></div>";
    return myString;
}

function createIcon(icon, link){
    return "<li class=\"list-inline-item\"><a href=\"" + link  + "\"target=\"_blank\"><i class=\"fab fa-" + icon + "\"></i></a></li>";
}