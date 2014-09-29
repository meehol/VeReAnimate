    var bgURL = '';
    var bgWidth;
    var bgHeight;
    var closeURL = '';
    var closeWidth;
    var closeHeight;
    var ctaURL = '';
    var ctaWidth;
    var ctaHeight;
    var bgImg = new Image();
    var closeImg = new Image();
    var ctaImg = new Image();
    // knowledge specific variables
    var firstResponse, unknownResponse, knowledgeEndW, knowledgeEndH,
        knowledgeEndT, knowledgeEndL;

    function checkTheBox() {
        $('a.active').css('pointer-events', 'auto');
        $('a.active span').css('background-color', '#26FF00');
        var imgExists = $('a.active span').html();
        if(imgExists === '') {
            $('a.active span').prepend('<img class="inline" src="img/check_nav.png">');
        }
        $('a.active').parent().next('li').children('a').css('pointer-events', 'auto');
        $('a.active').parent().next('li').children('a').click();
        $('#module_wrapper').addClass('bounceInDown');
    }

    function bgImgUrl(url) {
        return 'url(' + url + ')';
    }

    function runKnowledgeEditor() {
        $("#knowledge_parent").css({
            
            'background-image': bgImgUrl(bgURL),
            'width': bgWidth,
            'height': bgHeight,
        });
        $("#knowledge_cta").css({
            'position': 'inherit',
            'background-image': bgImgUrl(ctaURL),
            'width': ctaWidth,
            'height': ctaHeight,
            'top': ctaEndT,
            'left': ctaEndL
        });
        $("#knowledge_close").css({
            'position': 'inherit',
            'background-image': bgImgUrl(closeURL),
            'width': closeWidth,
            'height': closeHeight,
            'top': closeEndT,
            'left': closeEndL
        });
        $('#knowledge_text').css({
            'position': 'relative',
            'width': knowledgeEndW,
            'height': knowledgeEndH,
            'top': knowledgeEndT,
            'left': knowledgeEndL
        });
        
    }

    


    $(document).ready(function() {
        $("div#fullpage").removeClass("hidden");
    });