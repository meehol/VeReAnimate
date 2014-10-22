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
                        console.info('Form identified');
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
                        $proactivecta = $('#veProactiveButton'),
                        $close = $('#WindowCloseBtn'),
                        $submit = $('#ChatButtonsDiv'),
                        animation = veTagData.settings.animations;
                    //Entry Animations
                    $main.addClass(animation.entry.main);
                    $cta.addClass(animation.entry.cta);
                    $proactivecta.addClass(animation.entry.proactivecta);
                    $close.addClass(animation.entry.close);
                    $submit.addClass(animation.entry.submit);
                    // LoopState Animations
                    setTimeout(function() {
                        // Remove Entry Animations
                        $main.removeClass(animation.entry.main);
                        $cta.removeClass(animation.entry.cta);
                        $proactivecta.removeClass(animation.entry.proactivecta);
                        $close.removeClass(animation.entry.close);
                        $submit.removeClass(animation.entry.submit);
                        setTimeout(function() {
                            // onHover Animation Classes
                            $main.addClass(animation.hover.main);
                            $cta.addClass(animation.hover.cta);
                            $proactivecta.addClass(animation.hover.proactivecta);
                            $close.addClass(animation.hover.close);
                            $submit.addClass(animation.hover.submit);
                            // Loop Animations
                            $main.addClass(animation.loop.main);
                            $cta.addClass(animation.loop.cta);
                            $proactivecta.addClass(animation.loop.proactivecta);
                            $close.addClass(animation.loop.close);
                            $submit.addClass(animation.loop.submit);
                        }, 1);
                    }, 100);
                }

                function setupListeners() {
                    checkChat = setInterval(function() {
                        var target = document.getElementById('ChatMainDiv');
                        if(target) {
                            if(VeAPI.browser.browser() !== 'Chrome') {
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
                    console.info('Setting up observer');
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
        return formId;
    }
}