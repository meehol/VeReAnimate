$(window).ready(function() {
    $(function() {
        setTimeout(function() {
            $('#start-screen img').removeClass('flipInX');
            $('#start-screen img').addClass('animated fadeOutUp');
            setTimeout(function() {
                $('#start-screen').last().addClass('animated fadeOut');
                setTimeout(function() {
                    $('#start-screen').remove();
                }, 1100);
            }, 700);
        }, 1500);
        $('#vewelcomelogo').draggable({ containment: $('div.module_content') });
        $('#fp-nav').css('visibility', 'hidden');
    });
    $('#menu_bar').bind('mouseenter mouseleave', function() {
        $('#menu_icon').toggleClass('spinItem');
    });
    $('#header').bind('hover', function() {
        $('nav > ul').toggleClass('slideDown');
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
    $('.emptyLink.menuLink').bind('click', function() {
        window.alert('Coming soon!');
    });
    $('#vePrompt').bind('click', function(e) {
        if(($('#ctaSlice0sizePreview').text() !== '') || ($('#ctaSlice1sizePreview').text() !== '') || ($('#ctaSlice2sizePreview').text() !== '')) {
            location.reload();
            veTemplate = 0;
                        
            $('#submitButton0').css('visibility', 'visible');
            $('#fp-nav').css('visibility', 'visible');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'none');
            $('#veTemplateProactive').css('display', 'none');
            $('#veTemplateGenie').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'inline-block');
            document.getElementById('veTemplatePrompt').className = 'animated rollIn';
        } else if(($('#ctaSlice0sizePreview').text() === '') && ($('#ctaSlice1sizePreview').text() === '') && ($('#ctaSlice2sizePreview').text() === '')) {
            veTemplate = 0;
                        
            $('#submitButton0').css('visibility', 'visible');
            $('#fp-nav').css('visibility', 'visible');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'none');
            $('#veTemplateProactive').css('display', 'none');
            $('#veTemplateGenie').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'inline-block');
            document.getElementById('veTemplatePrompt').className = 'animated rollIn';
        }
    });
    $('#veFeedback').bind('click', function(e) {
        if(($('#ctaSlice0sizePreview').text() !== '') || ($('#ctaSlice1sizePreview').text() !== '') || ($('#ctaSlice2sizePreview').text() !== '')) {
            location.reload();
            veTemplate = 1;
                        
            $('#submitButton0').css('visibility', 'visible');
            $('#fp-nav').css('visibility', 'visible');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'none');
            $('#veTemplateProactive').css('display', 'none');
            $('#veTemplateGenie').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'inline-block');
            document.getElementById('veTemplateFeedback').className = 'animated rollIn';
        } else if(($('#ctaSlice0sizePreview').text() === '') && ($('#ctaSlice1sizePreview').text() === '') && ($('#ctaSlice2sizePreview').text() === '')) {
            veTemplate = 1;
                        
            $('#submitButton0').css('visibility', 'visible');
            $('#fp-nav').css('visibility', 'visible');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'none');
            $('#veTemplateProactive').css('display', 'none');
            $('#veTemplateGenie').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'inline-block');
            document.getElementById('veTemplateFeedback').className = 'animated rollIn';
        }
    });
    $('#veProactive').bind('click', function(e) {
        if(($('#ctaSlice0sizePreview').text() !== '') || ($('#ctaSlice1sizePreview').text() !== '') || ($('#ctaSlice2sizePreview').text() !== '')) {
            location.reload();
            veTemplate = 2;
                        
            $('#submitButton0').css('visibility', 'visible');
            $('#fp-nav').css('visibility', 'visible');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'none');
            $('#veTemplateGenie').css('display', 'none');
            $('#veTemplateProactive').css('display', 'inline-block');
            document.getElementById('veTemplateProactive').className = 'animated rollIn';
        } else if(($('#ctaSlice0sizePreview').text() === '') && ($('#ctaSlice1sizePreview').text() === '') && ($('#ctaSlice2sizePreview').text() === '')) {
            veTemplate = 2;
                        
            $('#submitButton0').css('visibility', 'visible');
            $('#fp-nav').css('visibility', 'visible');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'none');
            $('#veTemplateGenie').css('display', 'none');
            $('#veTemplateProactive').css('display', 'inline-block');
            document.getElementById('veTemplateProactive').className = 'animated rollIn';
        }
    });
    $('#veGenie').bind('click', function(e) {
        if(($('#ctaSlice0sizePreview').text() !== '') || ($('#ctaSlice1sizePreview').text() !== '') || ($('#ctaSlice2sizePreview').text() !== '')) {
            location.reload();
            veTemplate = 3;
            
            $('#submitButton0').css('visibility', 'hidden');
            $('#fp-nav').css('visibility', 'hidden');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'none');
            $('#veTemplateProactive').css('display', 'none');
            $('#veTemplateGenie').css('display', 'flex');
            document.getElementById('veTemplateGenie').className = 'animated rollIn';
        } else if(($('#ctaSlice0sizePreview').text() === '') && ($('#ctaSlice1sizePreview').text() === '') && ($('#ctaSlice2sizePreview').text() === '')) {
            veTemplate = 3;
                        
            $('#submitButton0').css('visibility', 'hidden');
            $('#fp-nav').css('visibility', 'hidden');
            
            $("#eraseButton0").click();
            $("#eraseButton1").click();
            $("#eraseButton2").click();
            $("#eraseButton3").click();
            $('#veWelcomeIdle').css('display', 'none');
            $('#veTemplateFeedback').css('display', 'none');
            $('#veTemplatePrompt').css('display', 'none');
            $('#veTemplateProactive').css('display', 'none');
            $('#veTemplateGenie').css('display', 'flex');
            document.getElementById('veTemplateGenie').className = 'animated rollIn';
        }
    });
    $('.buttonPreviousModule').bind('click', function() {
        $('a.active').parent().prev('li').children('a').click();
        $('#module_wrapper').addClass('fadeIn');
    });
    console.log("framwork actions loaded!");
});