$(document).ready(function (params) {
    $(window).scroll(function name(params) {
        var anchoDeLaVentana = $(window).width();   
        if(anchoDeLaVentana > 800){ 
            var scroll = $(window).scrollTop();  
            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)' 
            });
            $('.acerca-de article').css({                
                'transform': 'translate(0px, -' + scroll / 4 + '%)'     
            });
        }
    }); 
    $(window).resize(function (params) {   
        var windowWidth = $(window).width();
        if (windowWidth < 800) {
            $('.acerca-de article').css({                
                'transform': 'translate(0px, 0px)'    
            });
        }
    });
});