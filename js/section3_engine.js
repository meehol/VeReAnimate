$(document).ready(function() {
    $('#submitButton3').click(checkTheBox);
    $('#submitButton3').click(function() {
        if(veTemplate === 0) {
            finalizePrompt();
        } else if(veTemplate === 1) {
            finalizeFeedback();
        } else if(veTemplate === 2) {
            finalizeProactive();
        }
    });
    $('#insertButton2').click(function insertAnimations() {
        if($('#veAnimations')) {
            $('#veAnimations').remove();
        }
        $($('#cage2 > #ChatMainDiv')).removeClass();
        if(veTemplate !== 2) {
            $($('#cage2 #VeChatCTA')).removeClass();
        } else {
            $($('#cage2 #veProactiveButton')).removeClass();
        }
        $($('#cage2 #WindowCloseBtn')).removeClass();
        var mainEntryAnimationChoice = allAnimations[mainEntryAnimation.value];
        var ctaEntryAnimationChoice = allAnimations[ctaEntryAnimation.value];
        var proactivectaEntryAnimationChoice = allAnimations[proactivectaEntryAnimation.value];
        var mainLoopAnimationChoice = allAnimations[mainLoopAnimation.value];
        var ctaLoopAnimationChoice = allAnimations[ctaLoopAnimation.value];
        var proactivectaLoopAnimationChoice = allAnimations[proactivectaLoopAnimation.value];
        var closeHoverAnimationChoice = allAnimations[closeHoverAnimation.value];
        if(veTemplate !== 2) {
            var animationsSetup = mainEntryAnimationChoice + ctaEntryAnimationChoice + mainLoopAnimationChoice + ctaLoopAnimationChoice + closeHoverAnimationChoice;
        } else {
            var animationsSetup = mainEntryAnimationChoice + proactivectaEntryAnimationChoice + mainLoopAnimationChoice + proactivectaLoopAnimationChoice + closeHoverAnimationChoice;
        }
        $('<style id="veAnimations">' + animationsSetup + '</style>').appendTo('#cage2 > #ChatMainDiv');
        $($('#cage2 > #ChatMainDiv')).addClass(mainEntryAnimation.value);
        if(veTemplate !== 2) {
            $($('#cage2 #VeChatCTA')).addClass(ctaEntryAnimation.value);
        } else {
            $($('#cage2 #veProactiveButton')).addClass(proactivectaEntryAnimation.value);
        }
        setTimeout(function() {
            $($('#cage2 > #ChatMainDiv')).removeClass(mainEntryAnimation.value).addClass(mainLoopAnimation.value);
            if(veTemplate !== 2) {
                $($('#cage2 #VeChatCTA')).removeClass(ctaEntryAnimation.value).addClass(ctaLoopAnimation.value);
            } else {
                $($('#cage2 #veProactiveButton')).removeClass(proactivectaEntryAnimation.value).addClass(proactivectaLoopAnimation.value);
            }
            $($('#cage2 #WindowCloseBtn')).addClass(closeHoverAnimation.value);
        }, 1500);
        settings = 'animations: {"entry":{"main":"' + mainEntryAnimation.value + '","cta":"' + ctaEntryAnimation.value + '","proactivecta":"' + proactivectaEntryAnimation.value + '"},"hover":{"main":"","cta":"","close":"' + closeHoverAnimation.value + '","submit":""},"loop":{"main":"' + mainLoopAnimation.value + '","cta":"' + ctaLoopAnimation.value + '","proactivecta":"' + proactivectaLoopAnimation.value + '","close":"","submit":""}}';
    });
});