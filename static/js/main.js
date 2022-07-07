let nav = document.querySelector("nav.navbar"),
    menuBtn = document.querySelector(".phone-menu"),
    menu = document.querySelector(".navbar .navbar__container>ul");


document.addEventListener("scroll" , (e) => {
    let pageScroll = document.scrollingElement.scrollTop,
        navPosition = nav.offsetTop;
        
    if( pageScroll > nav.offsetTop + 0.5 ){
        nav.classList.add("navbar--show");
    } else {
        nav.classList.remove("navbar--show");
    }

});

menuBtn.addEventListener("click" , function(){
    menu.classList.toggle("show-list")
});