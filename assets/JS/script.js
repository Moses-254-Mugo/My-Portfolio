$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        } else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-bth').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    $('.scroll-up-btn').click(function(){
        $('html').aminate({scrollTop: 0});
    })


    // typing animation script
    var typed = new Typed(".typing", {
        strings:["Full Stack Developer.","Desinger.", "Programmer."],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true   
    }) 
    var typed = new Typed(".typing_2", {
        strings:["Full Stack Developer.","Desinger.", "Programmer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    }) 



    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

});