$(document).ready(function(){
    $(window).scroll(function(){
        // navbar açılma 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

     //yukarı kaydır butonu

     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   //yazı animasyonu
   var typed = new Typed(".typing", {
    strings: [ "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
   });

    })


