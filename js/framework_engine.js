/* Template choice variables 
        var veTemplate = 0;  --- VeChat Prompt
        var veTemplate = 1;  --- VeChat Feedback
        var veTemplate = 2;  --- VeContact Proactive
        var veTemplate = 3;  --- VeContact E-mail template
    */
$(window).bind('beforeunload', function() {
    return 'Reload?';
});
var veTemplate = 0;
var checkBg = '';
var checkClose = '';
var checkCta = '';
var checkSubmit = '';
var bgURL = '';
var bgWidth;
var bgHeight;
var closeURL = '';
var closeWidth;
var closeHeight;
var ctaURL = '';
var ctaWidth;
var ctaHeight;
var submitURL = '';
var submitWidth;
var submitHeight;
var bgImg = new Image();
var closeImg = new Image();
var ctaImg = new Image();
var submitImg = new Image();
var knowledgeEndT, knowledgeEndL;
var feedbackEndT, feedbackEndL;
var firstResponse;
var unknownResponse;
var knowledgeEndW = 238;
var knowledgeEndH = 70;
var feedbackEndW = 138;
var feedbackEndH = 20;
var ctaEndL;
var ctaEndT;
var closeEndL;
var closeEndT;
var submitEndL;
var submitEndT;
var savedTemplate0, savedTemplate1, savedTemplate2;

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

function finalizePrompt() {
    $('#cage2 #ChatFlowDiv').html('\n');
    $('#cage2 > #ChatMainDiv').removeClass();
    $('#cage2 #WindowCloseBtn').removeClass();
    $('#cage2 #VeChatCTA').removeClass();
    
    savedTemplate0 = $('<div/>').append($('#cage2 > #ChatMainDiv').clone()).html();
    $('#mainDivPreview').text(savedTemplate0);
    var x1 = $('#knowledgeText0').val();
    $('#firstMessagePreview').text(x1);
    $('#responseMessagePreview').text(x1);
    $('#customJSpreview').text(customJS);
    $('#settingsPreview').text(settings);
}

function finalizeFeedback() {
    $('#cage2 #ChatFlowDiv').html('\n');
    $('#cage2 > #ChatMainDiv').removeClass();
    $('#cage2 #WindowCloseBtn').removeClass();
    $('#cage2 #VeChatCTA').removeClass();
    
    savedTemplate0 = $('<div/>').append($('#cage2 > #ChatMainDiv').clone()).html();
    $('#mainDivPreview').text(savedTemplate0);
    var x1 = $('#knowledgeText0').val();
    $('#firstMessagePreview').text(x1);
    var x2 = $('#knowledgeText1').val();
    $('#responseMessagePreview').text(x2);
    $('#customJSpreview').text(customJS);
    $('#settingsPreview').text(settings);
}

function finalizeProactive() {
    $('#cage2 #ChatFlowDiv').html('\n');
    $('#cage2 > #ChatMainDiv').removeClass();
    $('#cage2 #WindowCloseBtn').removeClass();
    $('#cage2 #veProactiveButton').removeClass();
    
    savedTemplate0 = $('<div/>').append($('#cage2 > #ChatMainDiv').clone()).html();
    $('#mainDivPreview').text(savedTemplate0);
    var x1 = $('#knowledgeText0').val();
    $('#firstMessagePreview').text('');
    var x2 = $('#knowledgeText1').val();
    $('#responseMessagePreview').text('');
    $('#customJSpreview').text(customJS);
    $('#settingsPreview').text(settings);
}

function savePrompt() {
    document.getElementById('cage2').innerHTML = document.getElementById('cage1').innerHTML;
    $('#cage2 #WindowCloseBtn').click( function() {
        $('#cage2 #ChatMainDiv').css('visibility','hidden');
    });
    var entryValues = ['', 've-bouncein', 've-bounceindown', 've-bounceinleft', 've-bounceinright', 've-bounceinup', 've-fadein', 've-rotatein', 've-slideinup', 've-slideinleft', 've-slideinright', 've-slideindown'];
    var loopValues = ['', 've-bounceloop', 've-pulseloop', 've-flashloop', 've-rubberbandloop', 've-swingloop', 've-tadaloop'];
    var hoverValues = ['', 've-zoomonhover', 've-spinonhover'];
    var mainEntryAnimation = document.getElementById('mainEntryAnimation');
    var ctaEntryAnimation = document.getElementById('ctaEntryAnimation');
    var proactivectaEntryAnimation = document.getElementById('proactivectaEntryAnimation');
    var mainLoopAnimation = document.getElementById('mainLoopAnimation');
    var ctaLoopAnimation = document.getElementById('ctaLoopAnimation');
    var proactivectaLoopAnimation = document.getElementById('proactivectaLoopAnimation');
    var closeHoverAnimation = document.getElementById('closeHoverAnimation');
    var ii;
    for(ii = 0; ii < entryValues.length; ii++) {
        var opt = entryValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        if(veTemplate !== 2) {
            console.log(veTemplate);
            $('#proactivectaEntryAnimation').prop('disabled', true);
            ctaEntryAnimation.appendChild(el);
        } else if(veTemplate === 2) {
            console.log(veTemplate);
            $('#ctaEntryAnimation').prop('disabled', true);
            proactivectaEntryAnimation.appendChild(el);
        }
    }
    for(ii = 0; ii < entryValues.length; ii++) {
        var opt = entryValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        mainEntryAnimation.appendChild(el);
    }
    for(ii = 0; ii < loopValues.length; ii++) {
        var opt = loopValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        if(veTemplate !== 2) {
            $('#proactivectaLoopAnimation').prop('disabled', true);
            ctaLoopAnimation.appendChild(el);
        } else if(veTemplate === 2) {
            $('#ctaLoopAnimation').prop('disabled', true);
            proactivectaLoopAnimation.appendChild(el);
        }
    }
    for(ii = 0; ii < loopValues.length; ii++) {
        var opt = loopValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        mainLoopAnimation.appendChild(el);
    }
    for(ii = 0; ii < hoverValues.length; ii++) {
        var opt = hoverValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        closeHoverAnimation.appendChild(el);
    }
}

function saveFeedback() {
    document.getElementById('cage2').innerHTML = document.getElementById('cage1').innerHTML;
    $('#cage2 #WindowCloseBtn').click( function() {
        $('#cage2 #ChatMainDiv').css('visibility','hidden');
    });
    var entryValues = ['', 've-bouncein', 've-bounceindown', 've-bounceinleft', 've-bounceinright', 've-bounceinup', 've-fadein', 've-rotatein', 've-slideinup', 've-slideinleft', 've-slideinright', 've-slideindown'];
    var loopValues = ['', 've-bounceloop', 've-pulseloop', 've-flashloop', 've-rubberbandloop', 've-swingloop', 've-tadaloop'];
    var hoverValues = ['', 've-zoomonhover', 've-spinonhover'];
    var mainEntryAnimation = document.getElementById('mainEntryAnimation');
    var ctaEntryAnimation = document.getElementById('ctaEntryAnimation');
    var proactivectaEntryAnimation = document.getElementById('proactivectaEntryAnimation');
    var mainLoopAnimation = document.getElementById('mainLoopAnimation');
    var ctaLoopAnimation = document.getElementById('ctaLoopAnimation');
    var proactivectaLoopAnimation = document.getElementById('proactivectaLoopAnimation');
    var closeHoverAnimation = document.getElementById('closeHoverAnimation');
    var ii;
    for(ii = 0; ii < entryValues.length; ii++) {
        var opt = entryValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        if(veTemplate !== 2) {
            console.log(veTemplate);
            $('#proactivectaEntryAnimation').prop('disabled', true);
            ctaEntryAnimation.appendChild(el);
        } else if(veTemplate === 2) {
            console.log(veTemplate);
            $('#ctaEntryAnimation').prop('disabled', true);
            proactivectaEntryAnimation.appendChild(el);
        }
    }
    for(ii = 0; ii < entryValues.length; ii++) {
        var opt = entryValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        mainEntryAnimation.appendChild(el);
    }
    for(ii = 0; ii < loopValues.length; ii++) {
        var opt = loopValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        if(veTemplate !== 2) {
            $('#proactivectaLoopAnimation').prop('disabled', true);
            ctaLoopAnimation.appendChild(el);
        } else if(veTemplate === 2) {
            $('#ctaLoopAnimation').prop('disabled', true);
            proactivectaLoopAnimation.appendChild(el);
        }
    }
    for(ii = 0; ii < loopValues.length; ii++) {
        var opt = loopValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        mainLoopAnimation.appendChild(el);
    }
    for(ii = 0; ii < hoverValues.length; ii++) {
        var opt = hoverValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        closeHoverAnimation.appendChild(el);
    }
}

function saveProactive() {
    document.getElementById('cage2').innerHTML = document.getElementById('cage1').innerHTML;
    $('#cage2 #WindowCloseBtn').click( function() {
        $('#cage2 #ChatMainDiv').css('visibility','hidden');
    });
    var entryValues = ['', 've-bouncein', 've-bounceindown', 've-bounceinleft', 've-bounceinright', 've-bounceinup', 've-fadein', 've-rotatein', 've-slideinup', 've-slideinleft', 've-slideinright', 've-slideindown'];
    var loopValues = ['', 've-bounceloop', 've-pulseloop', 've-flashloop', 've-rubberbandloop', 've-swingloop', 've-tadaloop'];
    var hoverValues = ['', 've-zoomonhover', 've-spinonhover'];
    var mainEntryAnimation = document.getElementById('mainEntryAnimation');
    var ctaEntryAnimation = document.getElementById('ctaEntryAnimation');
    var proactivectaEntryAnimation = document.getElementById('proactivectaEntryAnimation');
    var mainLoopAnimation = document.getElementById('mainLoopAnimation');
    var ctaLoopAnimation = document.getElementById('ctaLoopAnimation');
    var proactivectaLoopAnimation = document.getElementById('proactivectaLoopAnimation');
    var closeHoverAnimation = document.getElementById('closeHoverAnimation');
    var ii;
    for(ii = 0; ii < entryValues.length; ii++) {
        var opt = entryValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        if(veTemplate !== 2) {
            console.log(veTemplate);
            $('#proactivectaEntryAnimation').prop('disabled', true);
            ctaEntryAnimation.appendChild(el);
        } else if(veTemplate === 2) {
            console.log(veTemplate);
            $('#ctaEntryAnimation').prop('disabled', true);
            proactivectaEntryAnimation.appendChild(el);
        }
    }
    for(ii = 0; ii < entryValues.length; ii++) {
        var opt = entryValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        mainEntryAnimation.appendChild(el);
    }
    for(ii = 0; ii < loopValues.length; ii++) {
        var opt = loopValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        if(veTemplate !== 2) {
            $('#proactivectaLoopAnimation').prop('disabled', true);
            ctaLoopAnimation.appendChild(el);
        } else if(veTemplate === 2) {
            $('#ctaLoopAnimation').prop('disabled', true);
            proactivectaLoopAnimation.appendChild(el);
        }
    }
    for(ii = 0; ii < loopValues.length; ii++) {
        var opt = loopValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        mainLoopAnimation.appendChild(el);
    }
    for(ii = 0; ii < hoverValues.length; ii++) {
        var opt = hoverValues[ii];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        closeHoverAnimation.appendChild(el);
    }
}

function compilePrompt() {
    var promptTemplate_1 = '<div id="ChatMainDiv" style="background-image: url(';
    /*bgURL*/
    var promptTemplate_2 = '); background-attachment: scroll; background-color: transparent; position: fixed; left: 200px; top: ; width: ';
    /*bgWidth*/
    var promptTemplate_3 = 'px; height: ';
    /*bgHeight*/
    var promptTemplate_4 = 'px; z-index: 99202; display: block; visibility: visible; background-position: 0px 0px; background-repeat: no-repeat no-repeat;"';
    var promptTemplate_5 = '>\n\n<div id="ChatBackgroundDiv" style="position: absolute; left: 0px; top: 0px; z-index: 9000; display: none;"></div>\n\n';
    var promptTemplate_6 = '<div id="ChatContentDiv" style="background-color: red; position: absolute; left: 0px; top: 0px; z-index: 9001;"';
    var promptTemplate_7 = '>\n\n<div id="ChatFlowDiv" style="font-family: unitweb-medium, arial, sans-serif; font-size: 16px; line-height: 19px; margin: 0px; overflow: hidden; padding: 0px; position: absolute; text-indent: 0px; left: ';
    /*knowledgeEndL*/
    var promptTemplate_8 = 'px; top: ';
    /*knowledgeEndT*/
    var promptTemplate_9 = 'px; width: ';
    /*knowledgeEndW*/
    var promptTemplate_10 = 'px; height: ';
    /*knowledgeEndH*/
    var promptTemplate_11 = 'px; z-index: 9002; border-width: 0px; letter-spacing: 0px;';
    var promptTemplate_12 = '">\n\n\n</div>\n\n<div id="ChatStatusDiv" style="display: none;"></div>\n<div style="display: none; height: 26px; left: 51px; position: absolute; top: 324px; width: 339px; z-index: 9005;" id="ChatInputDiv"';
    var promptTemplate_13 = '>\n<textarea placeholder="Enter your text here..." style="display: none; " id="ChatInputText"></textarea>\n</div>\n<div id="ChatButtonsDiv" style="display: none;"></div>\n\n<div';
    var promptTemplate_14 = ' id="VeChatCTA" style="cursor: pointer; position: absolute; left:';
    /*ctaEndL*/
    var promptTemplate_15 = 'px; top: ';
    /*ctaEndT*/
    var promptTemplate_16 = 'px; width: ';
    /*ctaWidth*/
    var promptTemplate_17 = 'px; height: ';
    /*ctaHeight*/
    var promptTemplate_18 = 'px; z-index: 9002; opacity: 1; background-image: url(';
    /*ctaURL*/
    var promptTemplate_19 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opaci';
    var promptTemplate_20 = 'ty = ' + '0.8' + '" onmouseout="this.style.opacity = ' + '1' + '" onclick="VeAPI.Chat.convertClick(' + "'ChatLinkCTA1'" + ')"></d';
    var promptTemplate_21 = 'iv>\n</div>\n\n<div id="WindowBarDiv" style="background-color: #d3d3d3; position: absolute; left: 0px; top: 0px; z-index: 9994; width: 574px;">\n\n<div id="WindowTittleDiv" style="cursor: move;   margin-left: 0px; margin-right: 0px; position: absolute; left: 50px;top: 20px; width: 200px; height: 60px;z-index: 9995;"></div>\n\n<div id="WindowCloseBtn" style="cursor: pointer; margin-left: 0px; margin-right: 0px; position: absolute; left: ';
    /*closeEndL*/
    var promptTemplate_22 = 'px; top: ';
    /*closeEndT*/
    var promptTemplate_23 = 'px; width: ';
    /*closeWidth*/
    var promptTemplate_24 = 'px; height: ';
    /*closeHeight*/
    var promptTemplate_25 = 'px; z-index: 9998; opacity: 1; background-image: url(';
    /*closeURL*/
    var promptTemplate_26 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = ' + '0.8' + '" onmouseout="this.style.opacity = ' + '1' + '"></div>\n\n</div>\n\n</div>';
    document.getElementById('cage1').innerHTML = promptTemplate_1 + bgURL + promptTemplate_2 + bgWidth + promptTemplate_3 + bgHeight + promptTemplate_4 + promptTemplate_5 + promptTemplate_6 + promptTemplate_7 + knowledgeEndL + promptTemplate_8 + knowledgeEndT + promptTemplate_9 + knowledgeEndW + promptTemplate_10 + knowledgeEndH + promptTemplate_11 + promptTemplate_12 + promptTemplate_13 + promptTemplate_14 + ctaEndL + promptTemplate_15 + ctaEndT + promptTemplate_16 + ctaWidth + promptTemplate_17 + ctaHeight + promptTemplate_18 + ctaURL + promptTemplate_19 + promptTemplate_20 + promptTemplate_21 + closeEndL + promptTemplate_22 + closeEndT + promptTemplate_23 + closeWidth + promptTemplate_24 + closeHeight + promptTemplate_25 + closeURL + promptTemplate_26;
    document.getElementById('WindowCloseBtn').onclick = function() {
        document.getElementById('ChatMainDiv').style.visibility = 'hidden';
    };
}

function compileFeedback() {
    var feedbackTemplate_1 = '<div id="ChatMainDiv" style="background-image: url(';
    /*bgURL*/
    var feedbackTemplate_2 = '); background-attachment: scroll; background-color: transparent; position: fixed; left: 200px; top: ; width: ';
    /*bgWidth*/
    var feedbackTemplate_3 = 'px; height: ';
    /*bgHeight*/
    var feedbackTemplate_4 = 'px; z-index: 99202; display: block; visibility: visible; background-position: 0px 0px; background-repeat: no-repeat no-repeat;"';
    var feedbackTemplate_5 = '>\n\n<div id="ChatBackgroundDiv" style="position: absolute; left: 0px; top: 0px; z-index: 9000; display: none;"></div>\n\n';
    var feedbackTemplate_6 = '<div id="ChatContentDiv" style="background-color: red; position: absolute; left: 0px; top: 0px; z-index: 9001;"';
    var feedbackTemplate_7 = '>\n\n<div id="ChatFlowDiv" style="font-family: unitweb-medium, arial, sans-serif; font-size: 16px; line-height: 19px; margin: 0px; overflow: hidden; padding: 0px; position: absolute; text-indent: 0px; left: ';
    /*knowledgeEndL*/
    var feedbackTemplate_8 = 'px; top: ';
    /*knowledgeEndT*/
    var feedbackTemplate_9 = 'px; width: ';
    /*knowledgeEndW*/
    var feedbackTemplate_10 = 'px; height: ';
    /*knowledgeEndH*/
    var feedbackTemplate_11 = 'px; z-index: 9002; border-width: 0px; letter-spacing: 0px;';
    var feedbackTemplate_12 = '">\n\n\n</div>\n\n<div id="ChatStatusDiv" style="display: none;"></div>\n<div style="" id="ChatInputDiv"';
    var feedbackTemplate_13 = '>\n<textarea style="border: medium none; color: #FFF !important; outline: medium none; overflow: auto; position: absolute; resize: none; display: inline; vertical-align: 0px; margin: 0px;  font-family: arial,times new roman,times,serif; font-size: 9px; line-height: 9px; width: ';
    /*feedbackEndW*/
    var feedbackTemplate_14 = 'px;height: ';
    /*feedbackEndH*/
    var feedbackTemplate_15 = 'px; left: ';
    /*feedbackEndL*/
    var feedbackTemplate_16 = 'px; padding: 4px; top: ';
    /*feedbackEndT*/
    var feedbackTemplate_17 = 'px;background-color: rgba(0,0,0,0);box-sizing: border-box;" placeholder="Enter your comments here..." id="ChatInputText"></textarea>\n</div>\n<div id="ChatButtonsDiv" style="z-index: 9002; opacity: 1; position: absolute; left: ';
    /*submitEndL*/
    var feedbackTemplate_18 = 'px; top: ';
    /*submitEndT*/
    var feedbackTemplate_19 = 'px; width: ';
    /*submitWidth*/
    var feedbackTemplate_20 = 'px; height: ';
    /*submitHeight*/
    var feedbackTemplate_21 = 'px; cursor: pointer; background-image: url(';
    /*submitURL*/
    var feedbackTemplate_22 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = ' + '0.8' + '" onmouseout="this.style.opacity = ' + '1' + '"></div>\n\n<div';
    var feedbackTemplate_23 = ' id="VeChatCTA" style="cursor: pointer; position: absolute; left:';
    /*ctaEndL*/
    var feedbackTemplate_24 = 'px; top: ';
    /*ctaEndT*/
    var feedbackTemplate_25 = 'px; width: ';
    /*ctaWidth*/
    var feedbackTemplate_26 = 'px; height: ';
    /*ctaHeight*/
    var feedbackTemplate_27 = 'px; z-index: 9002; opacity: 1; background-image: url(';
    /*ctaURL*/
    var feedbackTemplate_28 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opaci';
    var feedbackTemplate_29 = 'ty = ' + '0.8' + '" onmouseout="this.style.opacity = ' + '1' + '" onclick="VeAPI.Chat.convertClick(' + "'ChatLinkCTA1'" + ')"></d';
    var feedbackTemplate_30 = 'iv>\n\n</div>\n\n<div id="WindowBarDiv" style="background-color: #d3d3d3; position: absolute; left: 0px; top: 0px; z-index: 9994; width: 574px;">\n\n<div id="WindowTittleDiv" style="cursor: move;   margin-left: 0px; margin-right: 0px; position: absolute; left: 50px;top: 20px; width: 200px; height: 60px;z-index: 9995;"></div>\n\n<div id="WindowCloseBtn" style="cursor: pointer; margin-left: 0px; margin-right: 0px; position: absolute; left: ';
    /*closeEndL*/
    var feedbackTemplate_31 = 'px; top: ';
    /*closeEndT*/
    var feedbackTemplate_32 = 'px; width: ';
    /*closeWidth*/
    var feedbackTemplate_33 = 'px; height: ';
    /*closeHeight*/
    var feedbackTemplate_34 = 'px; z-index: 9998; opacity: 1; background-image: url(';
    /*closeURL*/
    var feedbackTemplate_35 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = ' + '0.8' + '" onmouseout="this.style.opacity = ' + '1' + '"></div>\n\n</div>\n\n</div>';
    document.getElementById('cage1').innerHTML = feedbackTemplate_1 + bgURL + feedbackTemplate_2 + bgWidth + feedbackTemplate_3 + bgHeight + feedbackTemplate_4 + feedbackTemplate_5 + feedbackTemplate_6 + feedbackTemplate_7 + knowledgeEndL + feedbackTemplate_8 + knowledgeEndT + feedbackTemplate_9 + knowledgeEndW + feedbackTemplate_10 + knowledgeEndH + feedbackTemplate_11 + feedbackTemplate_12 + feedbackTemplate_13 + feedbackEndW + feedbackTemplate_14 + feedbackEndH + feedbackTemplate_15 + feedbackEndL + feedbackTemplate_16 + feedbackEndT + feedbackTemplate_17 + submitEndL + feedbackTemplate_18 + submitEndT + feedbackTemplate_19 + submitWidth + feedbackTemplate_20 + submitHeight + feedbackTemplate_21 + submitURL + feedbackTemplate_22 + feedbackTemplate_23 + ctaEndL + feedbackTemplate_24 + ctaEndT + feedbackTemplate_25 + ctaWidth + feedbackTemplate_26 + ctaHeight + feedbackTemplate_27 + ctaURL + feedbackTemplate_28 + feedbackTemplate_29 + feedbackTemplate_30 + closeEndL + feedbackTemplate_31 + closeEndT + feedbackTemplate_32 + closeWidth + feedbackTemplate_33 + closeHeight + feedbackTemplate_34 + closeURL + feedbackTemplate_35;
    document.getElementById('cage2').innerHTML = document.getElementById('cage1').innerHTML;
    document.getElementById('WindowCloseBtn').onclick = function() {
        document.getElementById('ChatMainDiv').style.visibility = 'hidden';
    };
}

function compileProactive() {
    var proactiveTemplate_1 = '<div id="ChatMainDiv" style="background-image: url(';
    /*bgURL*/
    var proactiveTemplate_2 = '); background-attachment: scroll; background-color: transparent; position: fixed; left: 200px; top: ; width: ';
    /*bgWidth*/
    var proactiveTemplate_3 = 'px; height: ';
    /*bgHeight*/
    var proactiveTemplate_4 = 'px; z-index: 99202; display: block; visibility: visible; background-position: 0px 0px; background-repeat: no-repeat no-repeat;"';
    var proactiveTemplate_5 = '>\n\n<div id="ChatBackgroundDiv" style="position: absolute; left: 0px; top: 0px; z-index: 9000; display: none;"></div>\n\n';
    var proactiveTemplate_6 = '<div id="ChatContentDiv" style="background-color: red; position: absolute; left: 0px; top: 0px; z-index: 9001;"';
    var proactiveTemplate_7 = '>\n\n<div id="ChatFlowDiv" style="display:none;">\n\n\n</div>\n\n<div id="ChatStatusDiv" style="display: none;"></div>\n<div style="display: none; height: 26px; left: 51px; position: absolute; top: 324px; width: 339px; z-index: 9005;" id="ChatInputDiv"';
    var proactiveTemplate_8 = '>\n<textarea placeholder="Enter your e-mail..." style="display:none;" id="ChatInputText"></textarea>\n</div>\n<div id="ChatButtonsDiv" style=""></div>\n\n<div id="veProactiveButton"';
    var proactiveTemplate_9 = ' style="cursor: pointer; position: absolute; left:';
    /*ctaEndL*/
    var proactiveTemplate_10 = 'px; top: ';
    /*ctaEndT*/
    var proactiveTemplate_11 = 'px; width: ';
    /*ctaWidth*/
    var proactiveTemplate_12 = 'px; height: ';
    /*ctaHeight*/
    var proactiveTemplate_13 = 'px; z-index: 9002; opacity: 1; background-image: url(';
    /*ctaURL*/
    var proactiveTemplate_14 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opaci';
    var proactiveTemplate_15 = 'ty = ' + '0.8' + '" onmouseout="this.style.opacity = ' + '1' + '" onclick="(function(){var a=document.getElementById(\'' + 'veProactiveButton' + '\'),b=document.getElementById(\'' + 'ChatMainDiv' + '\');if(a !== null){a.className=\'' + 'contact-proactive' + '\';}if(b !==null){b.style.display=\'' + 'none' + '\';}})()"></div>\n\n<input id="veProactiveTextInput" style="color: #000000; font-family: unitweb-medium, arial, sans-serif; font-size: 14px; height: ';
    /*feedbackEndH*/
    var proactiveTemplate_16 = 'px; left: ';
    /*feedbackEndL*/
    var proactiveTemplate_17 = 'px; line-height: 20px; padding: 4px; position: absolute; text-indent: 0px; top: ';
    /*feedbackEndT*/
    var proactiveTemplate_18 = 'px; width: ';
    /*feedbackEndW*/
    var proactiveTemplate_19 = 'px; overflow-wrap: break-word; z-index: 9002; border-width: 0px; text-align: left; box-sizing: border-box;background-color: transparent;" placeholder="Tu dirección de correo...">\n\n</d';
    var proactiveTemplate_20 = 'iv>\n\n<div id="WindowBarDiv" style="background-color: #d3d3d3; position: absolute; left: 0px; top: 0px; z-index: 9994; width: 574px;">\n\n<div id="WindowTittleDiv" style="cursor: move;   margin-left: 0px; margin-right: 0px; position: absolute; left: 50px;top: 20px; width: 300px; height: 60px;z-index: 9995;"></div>\n\n<div id="WindowCloseBtn" style="cursor: pointer; margin-left: 0px; margin-right: 0px; position: absolute; left: ';
    /*closeEndL*/
    var proactiveTemplate_21 = 'px; top: ';
    /*closeEndT*/
    var proactiveTemplate_22 = 'px; width: ';
    /*closeWidth*/
    var proactiveTemplate_23 = 'px; height: ';
    /*closeHeight*/
    var proactiveTemplate_24 = 'px; z-index: 9998; opacity: 1; background-image: url(';
    /*closeURL*/
    var proactiveTemplate_25 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = ' + '0.8' + '" onmouseout="this.style.opacity = ' + '1' + '"></div>\n\n</div>\n\n</div>';
    document.getElementById('cage1').innerHTML = proactiveTemplate_1 + bgURL + proactiveTemplate_2 + bgWidth + proactiveTemplate_3 + bgHeight + proactiveTemplate_4 + proactiveTemplate_5 + proactiveTemplate_6 + proactiveTemplate_7 + proactiveTemplate_8 + proactiveTemplate_9 + ctaEndL + proactiveTemplate_10 + ctaEndT + proactiveTemplate_11 + ctaWidth + proactiveTemplate_12 + ctaHeight + proactiveTemplate_13 + ctaURL + proactiveTemplate_14 + proactiveTemplate_15 + feedbackEndH + proactiveTemplate_16 + feedbackEndL + proactiveTemplate_17 + feedbackEndT + proactiveTemplate_18 + feedbackEndW + proactiveTemplate_19 + proactiveTemplate_20 + closeEndL + proactiveTemplate_21 + closeEndT + proactiveTemplate_22 + closeWidth + proactiveTemplate_23 + closeHeight + proactiveTemplate_24 + closeURL + proactiveTemplate_25;
    document.getElementById('cage2').innerHTML = document.getElementById('cage1').innerHTML;
    document.getElementById('WindowCloseBtn').onclick = function() {
        document.getElementById('ChatMainDiv').style.visibility = 'hidden';
    };
}
// /////////////////////////////////
// /////////ANIMATIONS//////////////
// /////////////////////////////////
var allAnimations = {
    've-bouncein': '.ve-bouncein{-webkit-animation-name:ve-bouncein;animation-name:ve-bouncein;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-bouncein{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes ve-bouncein{0%,100%,20%,40%,60%,80%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}',
    've-bounceindown': '.ve-bounceindown{-webkit-animation-name:ve-bounceindown;animation-name:ve-bounceindown;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-bounceindown{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-5000px,0);transform:translate3d(0,-5000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}100%{-webkit-transform:none;transform:none}}@keyframes ve-bounceindown{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-5000px,0);transform:translate3d(0,-5000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}100%{-webkit-transform:none;transform:none}}',
    've-bounceinleft': '.ve-bounceinleft{-webkit-animation-name:ve-bounceinleft;animation-name:ve-bounceinleft;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-bounceinleft{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}100%{-webkit-transform:none;transform:none}}@keyframes ve-bounceinleft{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}100%{-webkit-transform:none;transform:none}}',
    've-bounceinright': '.ve-bounceinright{-webkit-animation-name:ve-bounceinright;animation-name:ve-bounceinright;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-bounceinright{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}100%{-webkit-transform:none;transform:none}}@keyframes ve-bounceinright{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}100%{-webkit-transform:none;transform:none}}',
    've-bounceinup': '.ve-bounceinup{-webkit-animation-name:ve-bounceinup;animation-name:ve-bounceinup;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-bounceinup{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes ve-bounceinup{0%,100%,60%,75%,90%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}',
    've-fadein': '.ve-fadein{-webkit-animation-name:ve-fadein;animation-name:ve-fadein;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-fadein{0%{opacity:0}100%{opacity:1}}@keyframes ve-fadein{0%{opacity:0}100%{opacity:1}}',
    've-rotatein': '.ve-rotatein{-webkit-animation-name:ve-rotatein;animation-name:ve-rotatein;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-rotatein{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-300deg);transform:rotate3d(0,0,1,-300deg);opacity:0}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes ve-rotatein{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-300deg);transform:rotate3d(0,0,1,-300deg);opacity:0}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}',
    've-slideinup': '.ve-slideinup{-webkit-animation-name:ve-slideinup;animation-name:ve-slideinup;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-slideinup{0%{-webkit-transform:translateY(3000px);transform:translateY(3000px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes ve-slideinup{0%{-webkit-transform:translateY(3000px);transform:translateY(3000px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}',
    've-slideinleft': '.ve-slideinleft{-webkit-animation-name:ve-slideinleft;animation-name:ve-slideinleft;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-slideinleft{0%{-webkit-transform:translateX(-3000px);transform:translateX(-3000px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes ve-slideinleft{0%{-webkit-transform:translateX(-3000px);transform:translateX(-3000px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}',
    've-slideinright': '.ve-slideinright{-webkit-animation-name:ve-slideinright;animation-name:ve-slideinright;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-slideinright{0%{-webkit-transform:translateX(3000px);transform:translateX(3000px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes ve-slideinright{0%{-webkit-transform:translateX(3000px);transform:translateX(3000px)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}',
    've-slideindown': '.ve-slideindown{-webkit-animation-name:ve-slideindown;animation-name:ve-slideindown;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ve-slideindown{0%{-webkit-transform:translateY(-3000px);transform:translateY(-3000px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes ve-slideindown{0%{-webkit-transform:translateY(-3000px);transform:translateY(-3000px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}',
    've-bounceloop': '.ve-bounceloop{-webkit-animation-name:ve-bounceloop;animation-name:ve-bounceloop;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-duration:16s;animation-duration:16s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes ve-bounceloop{0%,10%,4%,6%,8%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}3%{-webkit-transition-timing-function:cubic-bezier(0.755,.050,.855,.060);transition-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}5%{-webkit-transition-timing-function:cubic-bezier(0.755,.050,.855,.060);transition-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}7%,9%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}}@keyframes ve-bounceloop{0%,10%,12%,6%,8%{-webkit-transition-timing-function:cubic-bezier(0.215,.61,.355,1);transition-timing-function:cubic-bezier(0.215,.61,.355,1);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}5%{-webkit-transition-timing-function:cubic-bezier(0.755,.050,.855,.060);transition-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}7%{-webkit-transition-timing-function:cubic-bezier(0.755,.050,.855,.060);transition-timing-function:cubic-bezier(0.755,.050,.855,.060);-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}11%,9%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}}',
    've-pulseloop': '.ve-pulseloop{animation-name:ve-pulseloop;-webkit-animation-name:ve-pulseloop;-moz-animation-name:ve-pulseloop;animation-duration:3s;-webkit-animation-duration:3s;-moz-animation-duration:3s;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite}@keyframes ve-pulseloop{0%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(0.9);-moz-transform:scale(0.9);transform:scale(0.9);opacity:.7}100%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes ve-pulseloop{0%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(0.9);-moz-transform:scale(0.9);transform:scale(0.9);opacity:.7}100%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1);opacity:1}}',
    've-flashloop': '.ve-flashloop{animation-name:ve-flashloop;-webkit-animation-name:ve-flashloop;-moz-animation-name:ve-flashloop;animation-duration:5s;-webkit-animation-duration:5s;-moz-animation-duration:5s;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite}@-webkit-keyframes ve-flashloop{0%,100%,20%,35%,70%,85%{opacity:1}30%,80%{opacity:0}}@keyframes ve-flashloop{0%,100%,20%,35%,70%,85%{opacity:1}30%,80%{opacity:0}}',
    've-rubberbandloop': '.ve-rubberbandloop{-webkit-animation-name:ve-rubberbandloop;animation-name:ve-rubberbandloop;animation-duration:10s;-webkit-animation-duration:10s;-moz-animation-duration:10s;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite}@-webkit-keyframes ve-rubberbandloop{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}3%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}4%{-webkit-transform:scale3d(0.75,1.25,1);transform:scale3d(0.75,1.25,1)}5%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}7%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}8%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}10%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes ve-rubberbandloop{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}3%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}4%{-webkit-transform:scale3d(0.75,1.25,1);transform:scale3d(0.75,1.25,1)}5%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}7%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}8%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}10%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}',
    've-swingloop': '.ve-swingloop{-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;-webkit-animation-name:ve-swingloop;animation-name:ve-swingloop;animation-duration:10s;-webkit-animation-duration:10s;-moz-animation-duration:10s;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite}@-webkit-keyframes ve-swingloop{2%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}4%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}6%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}8%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}10%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}@keyframes ve-swingloop{2%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}4%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}6%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}8%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}10%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}',
    've-tadaloop': '.ve-tadaloop{-webkit-animation-name:ve-tadaloop;animation-name:ve-tadaloop;animation-duration:10s;-webkit-animation-duration:10s;-moz-animation-duration:10s;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite}@-webkit-keyframes ve-tadaloop{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}1%,2%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}3%,5%,7%,9%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}4%,6%,8%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}10%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes ve-tadaloop{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}1%,2%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}3%,5%,7%,9%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}4%,6%,8%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}10%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}',
    've-zoomonhover': '.ve-zoomonhover{-webkit-transition-duration:.5s;-moz-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;transition-property:transform;overflow:hidden}.ve-zoomonhover:hover{-webkit-transform:scale(1.3) translateZ(0);-moz-transform:scale(1.3) translateZ(0);-o-transform:scale(1.3) translateZ(0)}',
    've-spinonhover': '.ve-spinonhover{-webkit-transition-duration:.8s;-moz-transition-duration:.8s;-o-transition-duration:.8s;transition-duration:.8s;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;transition-property:transform;overflow:hidden}.ve-spinonhover:hover{-webkit-transform:rotate(360deg) scale(1.3) translateZ(0);-moz-transform:rotate(360deg) scale(1.3) translateZ(0);-o-transform:rotate(360deg) scale(1.3) translateZ(0)}',
};
var customJS = "{onFormIdentified: function(formId) {if(window.addEventListener) {(function(formId) {var ii, forms, checkChat;forms = [];veTagData.captureConfig.Forms.forEach(function(form) {if(form.ChatAgentId != null) {forms.push(form.FormId);}});for(ii = 0; ii < forms.length; ii++) {if(formId == forms[ii]) {console.info('Form identified');setupListeners();return formId;}}function setupAnimations(target, observer) {if(observer != null) observer.disconnect();if(!veTagData.settings.animations) return;var $ = VEjQuery;var $main = $('#ChatMainDiv'),$cta = $('#VeChatCTA'),$proactivecta = $('#veProactiveButton'),$close = $('#WindowCloseBtn'),$submit = $('#ChatButtonsDiv'),animation = veTagData.settings.animations;$main.addClass(animation.entry.main);$cta.addClass(animation.entry.cta);$proactivecta.addClass(animation.entry.proactivecta);$close.addClass(animation.entry.close);$submit.addClass(animation.entry.submit);setTimeout(function() {$main.removeClass(animation.entry.main);$cta.removeClass(animation.entry.cta);$proactivecta.removeClass(animation.entry.proactivecta);$close.removeClass(animation.entry.close);$submit.removeClass(animation.entry.submit);setTimeout(function() {$main.addClass(animation.hover.main);$cta.addClass(animation.hover.cta);$proactivecta.addClass(animation.hover.proactivecta);$close.addClass(animation.hover.close);$submit.addClass(animation.hover.submit);$main.addClass(animation.loop.main);$cta.addClass(animation.loop.cta);$proactivecta.addClass(animation.loop.proactivecta);$close.addClass(animation.loop.close);$submit.addClass(animation.loop.submit);}, 1);}, 100);}function setupListeners() {checkChat = setInterval(function() {var target = document.getElementById('ChatMainDiv');if(target) {if(VeAPI.browser.browser() !== 'Chrome') {clearInterval(checkChat);window.addEventListener('beforeunload', setupAnimations, true);return;} else {setUpMutationObserver(target);return;}} else {return;}}, 100);}function setUpMutationObserver(target) {console.info('Setting up observer');clearInterval(checkChat);setTimeout(function() {var updateTarget = document.querySelector('#ChatMainDiv');var observer = new window.MutationObserver(function(mutations) {mutations.forEach(function(mutation) {if(mutation.target.style.visibility === 'visible') {setupAnimations(updateTarget, observer);}});});var config = {attributes: true,attributeOldValue: true};observer.observe(updateTarget, config);observerLive = true;}, 1);}})(formId);}return formId;}}";
var settings;
$(document).ready(function() {
    $("div#fullpage").removeClass("hidden");
});