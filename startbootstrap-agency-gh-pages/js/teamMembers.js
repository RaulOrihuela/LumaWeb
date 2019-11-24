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
            "","",""
        ) +
        carouselEnd()+

        carouselStart(false) +
        createMember(
            "img/team/Valeria.jpeg",
            "Valeria Herbas",
            "Vicepresidente",
            "","",""
        ) +
        carouselEnd()+

        carouselStart(false) +
        createMember(
            "img/team/3.jpg",
            "Paola Guzmán",
            "Administración y finanzas",
            "","",""
        ) +
        carouselEnd()+

        carouselStart(false) +
        createMember(
            "img/team/Fer.jpg",
            "Fernando Cué",
            "Desarrollo sustentable",
            "","",""
        ) +
        carouselEnd()+

        carouselStart(false) +
        createMember(
            "img/team/Raul.jpeg",
            "Raúl Orihuela",
            "Tecnologías computacionales",
            "","",""
        ) +
        carouselEnd()+

        carouselStart(false) +
        createMember(
            "img/team/Rodrigo.jpeg",
            "Rodrigo de la Rosa",
            "Tecnologías computacionales",
            "","",""
        ) +
        carouselEnd()+ 
        
        carouselStart(false) +
        createMember(
            "img/team/1.jpg",
            "Alejandra Salazar",
            "Mecatrónica",
            "","",""
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
            "","",""
        ) +
        createMember(
            "img/team/Valeria.jpeg",
            "Valeria Herbas",
            "Vicepresidente",
            "","",""
        ) +
        createMember(
            "img/team/3.jpg",
            "Paola Guzmán",
            "Administración y finanzas",
            "","",""
        ) +
        carouselEnd()+

        carouselStart(false) +
        createMember(
            "img/team/Fer.jpg",
            "Fernando Cué",
            "Desarrollo sustentable",
            "","",""
        ) +
        createMember(
            "img/team/Raul.jpeg",
            "Raúl Orihuela",
            "Tecnologías computacionales",
            "","",""
        ) +
        createMember(
            "img/team/Rodrigo.jpeg",
            "Rodrigo de la Rosa",
            "Tecnologías computacionales",
            "","",""
        ) +
        carouselEnd()+ 
        
        carouselStart(false) +
        createMember(
            "img/team/1.jpg",
            "Alejandra Salazar",
            "Mecatrónica",
            "","",""
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
    return "<li class=\"list-inline-item\"><a href=\"" + link  + "\"><i class=\"fab fa-" + icon + "\"></i></a></li>";
}