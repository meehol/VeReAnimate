{
    onFormIdentified: function(formId) {
        if(window.addEventListener) {
            (function(formId) {
                var ii, forms, checkChat;
                // we need to make sure that this page has a chat Agent ID before running it. 
                forms = [];
                veTagData.captureConfig.Forms.forEach(function(form) {
                    if(form.ChatAgentId != null) {
                        forms.push(form.FormId);
                    }
                });
                for(ii = 0; ii < forms.length; ii++) {
                    if(formId == forms[ii]) {
                        console.warn('form identified');
                        setupListeners();
                        return formId;
                    }
                }

                function setupAnimations(target, observer) {
                    // disconect the mutation observer for performance gains.    
                    if(observer != null) observer.disconnect();
                    // make sure this is properly configured. 
                    if(!veTagData.settings.animations) return;
                    // use $ as the jQuery here for ease of use within this function. 
                    var $ = VEjQuery;
                    // Collect all the elements
                    var $main = $('#ChatMainDiv'),
                        $cta = $('#VeChatCTA'),
                        $close = $('#WindowCloseBtn'),
                        $submit = $('#ChatButtonsDiv'),
                        animation = veTagData.settings.animations;
                    var $backdrop = $('<div id="ve-2-backdrop"></div>');
                    $backdrop.css({
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        right: 0,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        zIndex: 10000
                    });
                    console.log($backdrop);
                    $('#agentContainer').append($backdrop);
                    console.log($backdrop);
                    //Entry Animations
                    $main.addClass(animation.entry.main);
                    $cta.addClass(animation.entry.cta);
                    $close.addClass(animation.entry.close);
                    $submit.addClass(animation.entry.submit);
                    // LoopState Animations
                    setTimeout(function() {
                        // Remove Entry Animations
                        $main.removeClass(animation.entry.main);
                        $cta.removeClass(animation.entry.cta);
                        $close.removeClass(animation.entry.close);
                        $submit.removeClass(animation.entry.submit);
                        setTimeout(function() {
                            // onHover Animation Classes
                            $main.addClass(animation.hover.main);
                            $cta.addClass(animation.hover.cta);
                            $close.addClass(animation.hover.close);
                            $submit.addClass(animation.hover.submit);
                            // Loop Animations
                            $main.addClass(animation.loop.main);
                            $cta.addClass(animation.loop.cta);
                            $close.addClass(animation.loop.close);
                            $submit.addClass(animation.loop.submit);
                        }, 1);
                    }, 1500);
                }

                function setupListeners() {
                    checkChat = setInterval(function() {
                        var target = document.getElementById('ChatMainDiv');
                        if(target) {
                            // specific to v2.2
                            if(VeAPI.Utils.Browser.browser() !== 'Chrome') {
                                clearInterval(checkChat);
                                window.addEventListener('beforeunload', setupAnimations, true);
                                return;
                            } else {
                                setUpMutationObserver(target);
                                return;
                            }
                        } else {
                            return;
                        }
                    }, 100);
                }

                function setUpMutationObserver(target) {
                    clearInterval(checkChat);
                    setTimeout(function() {
                        var updateTarget = document.querySelector('#ChatMainDiv');
                        var observer = new window.MutationObserver(function(mutations) {
                            mutations.forEach(function(mutation) {
                                if(mutation.target.style.visibility === 'visible') {
                                    setupAnimations(updateTarget, observer);
                                }
                            });
                        });
                        var config = {
                            attributes: true,
                            attributeOldValue: true
                        };
                        observer.observe(updateTarget, config);
                        observerLive = true;
                    }, 1);
                }
            })(formId);
        }
    }
}