$(window).ready(function() {
    
    
    
    $(function() {
       
        setTimeout(function(){
            $('#start-screen img').removeClass('flipInX');
        	$('#start-screen img').addClass('animated fadeOutUp');
              	setTimeout(function(){
    			$('#start-screen').last().addClass('animated fadeOut');
                    setTimeout(function(){
                		$('#start-screen').remove();
                    }, 1100);
                }, 700);
       	}, 2000);
        
	});
    
    $('#header').bind('hover', function() {
        $('nav > ul').toggleClass('slideDown');
        $('#menu_icon').toggleClass('spinItem');
        if($('#navigationMenu a').hasClass('slideRight')) {
            $('#navigationMenu a').removeClass('slideRight');
        }
    });
    $('#menu_0').bind('click', function() {
        $('#menu_0 > div > a').toggleClass('slideRight');
        $('#menu_1 > div > a').removeClass('slideRight');
        $('#menu_2 > div > a').removeClass('slideRight');
        $('#menu_3 > div > a').removeClass('slideRight');
    });
    $('#menu_1').bind('click', function() {
        $('#menu_0 > div > a').removeClass('slideRight');
        $('#menu_1 > div > a').toggleClass('slideRight');
        $('#menu_2 > div > a').removeClass('slideRight');
        $('#menu_3 > div > a').removeClass('slideRight');
    });
    $('#menu_2').bind('click', function() {
        $('#menu_0 > div > a').removeClass('slideRight');
        $('#menu_1 > div > a').removeClass('slideRight');
        $('#menu_2 > div > a').toggleClass('slideRight');
        $('#menu_3 > div > a').removeClass('slideRight');
    });
    $('#menu_3').bind('click', function() {
        $('#menu_0 > div > a').removeClass('slideRight');
        $('#menu_1 > div > a').removeClass('slideRight');
        $('#menu_2 > div > a').removeClass('slideRight');
        $('#menu_3 > div > a').toggleClass('slideRight');
    });
    $('.menuLink').bind('click', function() {
        window.alert('Clicked!');
    });


    
    $('.buttonPreviousModule').bind('click', function() {
        $('a.active').parent().prev('li').children('a').click();
    	$('#module_wrapper').addClass('slideExpandUp');
    });
    
    
    console.log("framwork actions loaded!");
});