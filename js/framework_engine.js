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
        $('a.active').css('pointer-events','auto');
        $('a.active span').css('background-color','#26FF00');
        var imgExists = $('a.active span').html(); 
        if(imgExists === ''){
            $('a.active span').prepend('<img class="inline" src="img/check_nav.png">');}
        $('a.active').parent().next('li').children('a').css('pointer-events','auto');
        $('a.active').parent().next('li').children('a').click();
        $('#module_wrapper').addClass('slideDown');
    }

$(document).ready(function() {
$("div#fullpage").removeClass("hidden");
    
});