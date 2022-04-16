
$(document).ready(function(){



   $('section').click(function (){
    $(".opportunities-list").hide()
   })


$('#menu').click(function () { 
    $('#sideNav').addClass('showSide');
    $('#sideNavbar').toggle();

});

$('.list-op').click(function () { 
    $(".opportunities-list").toggle()
})


$('#link1,#link2,#link3,#link4').click( ()  => {$('#sideNavbar').hide()

});
    
$('#close').click( ()  =>{$('#sideNavbar').hide()} );

$('.nav-links').click(function () { 
    if($('.navbar-list a').removeClass('active'))
    $(this).addClass('active')
    
});

var strings = {
    pics:{
        first:{
            url:"./assets/01.png",
            topLine: "we are comitted to ..",
            heading:"Adding value to your investment",
            des:"All over Kingdom's airports facilities and servies to grow your business success.",
            btn:'Explore Opportunities'
        }
        ,
        sec:{
            url:"./assets/02.png",
            topLine: "3 millions passengers per Year",
            heading:"get your Advertisment spot",
            des:"Explore advertisement opportunities on most viewed locations at airports.",
            btn:'Explore Opportunities'
    },
    third:{
        url:"./assets/03.png",
        topLine: "300+",
        heading:"new investment opportunities",
        des:"AT KING ABDULAZIZ INTERNATIONAL AIRPORT (TERMINAL 1)",
        btn:'View more'
}
}
}

 $('#radio1').click(()=>{

    $('.nav-hero-ctn').css({'background-image':'url("./assets/01.png")','width':'100%','height':'100%' , 'background-size':'contain auto' , 'background-repeat':'no-repeat'})
    var pic= strings.pics.first;
    $('.topLine').html(pic.topLine)
    $('.heading').html(pic.heading)
    $('.description').html(pic.des)
    $('.explore').html(pic.btn)

 });

 $('#radio2').click(()=>{
    $('.nav-hero-ctn').css({'background-image':'url("./assets/02.png")','width':'100%','height':'100%' , 'background-size':'contain auto' , 'background-repeat':'no-repeat'})
    var pic= strings.pics.sec;
    $('.topLine').html(pic.topLine)
    $('.heading').html(pic.heading)
    $('.description').html(pic.des)
    $('.explore').html(pic.btn)
});
    $('#radio3').click(()=>{
        $('.nav-hero-ctn').css({'background-image':'url("./assets/03.png")','width':'100%','height':'100%' , 'background-size':'contain auto' , 'background-repeat':'no-repeat'}) 
        var pic= strings.pics.third;
        $('.topLine').html(pic.topLine)
        $('.heading').html(pic.heading)
        $('.description').html(pic.des)
        $('.explore').html(pic.btn)
    });
    });


    