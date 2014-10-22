$(window).ready(function() {
    function saveSlices0() {
        $("#draggable_child_submit").css('display', 'none');
        $("#feedbackInpat").css('display', 'none');
        checkBg = $('#bgSlice0sizePreview').text();
        checkClose = $('#closeSlice0sizePreview').text();
        checkCta = $('#ctaSlice0sizePreview').text();
        if((checkBg !== '') && (checkClose !== '') && (checkCta !== '')) {
            bgURL = $('#bgSlice0Preview').text();
            bgWidth = bgImg.width;
            bgHeight = bgImg.height;
            closeURL = $('#closeSlice0Preview').text();
            closeWidth = closeImg.width;
            closeHeight = closeImg.height;
            ctaURL = $('#ctaSlice0Preview').text();
            ctaWidth = ctaImg.width;
            ctaHeight = ctaImg.height;
            checkTheBox();
            document.getElementById('draggable_parent').style.backgroundImage = 'url(' + bgURL + ')';
            $("#draggable_parent").css('width', bgWidth);
            $("#draggable_parent").css('height', bgHeight);
            document.getElementById('draggable_child_cta').style.backgroundImage = 'url(' + ctaURL + ')';
            $("#draggable_child_cta").css('width', ctaWidth);
            $("#draggable_child_cta").css('height', ctaHeight);
            document.getElementById('draggable_child_close').style.backgroundImage = 'url(' + closeURL + ')';
            $("#draggable_child_close").css('width', closeWidth);
            $("#draggable_child_close").css('height', closeHeight);
        } else {
            alert('Drop all the slices!');
        }
    }

    function saveSlices1() {
        checkBg = $('#bgSlice1sizePreview').text();
        checkClose = $('#closeSlice1sizePreview').text();
        checkCta = $('#ctaSlice1sizePreview').text();
        checkSubmit = $('#submitSlice1sizePreview').html();
        if((checkBg !== '') && (checkClose !== '') && (checkCta !== '') && (checkSubmit !== '')) {
            bgURL = $('#bgSlice1Preview').text();
            bgWidth = bgImg.width;
            bgHeight = bgImg.height;
            closeURL = $('#closeSlice1Preview').text();
            closeWidth = closeImg.width;
            closeHeight = closeImg.height;
            ctaURL = $('#ctaSlice1Preview').text();
            ctaWidth = ctaImg.width;
            ctaHeight = ctaImg.height;
            submitURL = $('#submitSlice1Preview').text();
            submitWidth = submitImg.width;
            submitHeight = submitImg.height;
            checkTheBox();
            document.getElementById('draggable_parent').style.backgroundImage = 'url(' + bgURL + ')';
            $("#draggable_parent").css('width', bgWidth);
            $("#draggable_parent").css('height', bgHeight);
            document.getElementById('draggable_child_cta').style.backgroundImage = 'url(' + ctaURL + ')';
            $("#draggable_child_cta").css('width', ctaWidth);
            $("#draggable_child_cta").css('height', ctaHeight);
            document.getElementById('draggable_child_close').style.backgroundImage = 'url(' + closeURL + ')';
            $("#draggable_child_close").css('width', closeWidth);
            $("#draggable_child_close").css('height', closeHeight);
            $("#draggable_child_submit").css('display', 'inline');
            document.getElementById('draggable_child_submit').style.backgroundImage = 'url(' + submitURL + ')';
            $("#draggable_child_submit").css('width', submitWidth);
            $("#draggable_child_submit").css('height', submitHeight);
        } else {
            alert('Drop all the slices!');
        }
    }

    function saveSlices2() {
        $("#inpat").css('display', 'none');
        $("#feedbackInpat").css('display', 'inline');
        checkBg = $('#bgSlice2sizePreview').text();
        checkClose = $('#closeSlice2sizePreview').text();
        checkCta = $('#ctaSlice2sizePreview').text();
        $("#draggable_child_submit").css('display', 'none');
        if((checkBg !== '') && (checkClose !== '') && (checkCta !== '')) {
            bgURL = $('#bgSlice2Preview').text();
            bgWidth = bgImg.width;
            bgHeight = bgImg.height;
            closeURL = $('#closeSlice2Preview').text();
            closeWidth = closeImg.width;
            closeHeight = closeImg.height;
            ctaURL = $('#ctaSlice2Preview').text();
            ctaWidth = ctaImg.width;
            ctaHeight = ctaImg.height;
            checkTheBox();
            document.getElementById('draggable_parent').style.backgroundImage = 'url(' + bgURL + ')';
            $("#draggable_parent").css('width', bgWidth);
            $("#draggable_parent").css('height', bgHeight);
            document.getElementById('draggable_child_cta').style.backgroundImage = 'url(' + ctaURL + ')';
            $("#draggable_child_cta").css('width', ctaWidth);
            $("#draggable_child_cta").css('height', ctaHeight);
            document.getElementById('draggable_child_close').style.backgroundImage = 'url(' + closeURL + ')';
            $("#draggable_child_close").css('width', closeWidth);
            $("#draggable_child_close").css('height', closeHeight);
        } else {
            alert('Drop all the slices!');
        }
    }
    //Grabbing needed elements
    $('#submitButton0').click(function() {
        if(veTemplate === 0) {
            saveSlices0();
        } else if(veTemplate === 1) {
            saveSlices1();
        } else if(veTemplate === 2) {
            saveSlices2();
        }
    });
    //ONLOAD ACTIONS============================================
    //
    //
    //

    function preventDefault(e) {
        e.preventDefault();
    }
    $('div.module_content').bind('drop dragover', preventDefault);
    $('#eraseButton0').bind('click', function() {
        bgURL = '';
        bgWidth = 0;
        bgHeight = 0;
        closeURL = '';
        closeWidth = 0;
        closeHeight = 0;
        ctaURL = '';
        ctaWidth = 0;
        ctaHeight = 0;
        bgImg = null;
        closeImg = null;
        ctaImg = null;
        knowledgeEndT = 0;
        knowledgeEndL = 0;
        knowledgeEndW = 238;
        knowledgeEndH = 70;
        ctaEndL = 0;
        ctaEndT = 0;
        closeEndL = 0;
        closeEndT = 0;
        $('#bgSlice0Preview').text('');
        $('#closeSlice0Preview').text('');
        $('#ctaSlice0Preview').text('');
        $('#bgSlice0').val('');
        $('#bgSlice0').css("backgroundColor", "white");
        $('#closeSlice0').val('');
        $('#closeSlice0').css("backgroundColor", "white");
        $('#ctaSlice0').val('');
        $('#ctaSlice0').css("backgroundColor", "white");
        $('#bgSlice0sizePreview').text('');
        $('#closeSlice0sizePreview').text('');
        $('#ctaSlice0sizePreview').text('');
        console.log('Erased!');
    });
    $('#eraseButton1').bind('click', function() {
        bgURL = '';
        bgWidth = 0;
        bgHeight = 0;
        closeURL = '';
        closeWidth = 0;
        closeHeight = 0;
        ctaURL = '';
        ctaWidth = 0;
        ctaHeight = 0;
        submitURL = '';
        submitWidth = 0;
        submitHeight = 0;
        bgImg = null;
        closeImg = null;
        ctaImg = null;
        knowledgeEndT = 0;
        knowledgeEndL = 0;
        knowledgeEndW = 238;
        knowledgeEndH = 70;
        ctaEndL = 0;
        ctaEndT = 0;
        closeEndL = 0;
        closeEndT = 0;
        submitEndL = 0;
        submitEndT = 0;
        $('#bgSlice1Preview').text('');
        $('#closeSlice1Preview').text('');
        $('#ctaSlice1Preview').text('');
        $('#submitSlice1Preview').text('');
        $('#bgSlice1').val('');
        $('#bgSlice1').css("backgroundColor", "white");
        $('#closeSlice1').val('');
        $('#closeSlice1').css("backgroundColor", "white");
        $('#ctaSlice1').val('');
        $('#ctaSlice1').css("backgroundColor", "white");
        $('#submitSlice1').val('');
        $('#submitSlice1').css("backgroundColor", "white");
        $('#bgSlice1sizePreview').text('');
        $('#closeSlice1sizePreview').text('');
        $('#ctaSlice1sizePreview').text('');
        $('#submitSlice1sizePreview').text('');
        console.log('Erased!');
    });
    $('#eraseButton2').bind('click', function() {
        bgURL = '';
        bgWidth = 0;
        bgHeight = 0;
        closeURL = '';
        closeWidth = 0;
        closeHeight = 0;
        ctaURL = '';
        ctaWidth = 0;
        ctaHeight = 0;
        bgImg = null;
        closeImg = null;
        ctaImg = null;
        knowledgeEndT = 0;
        knowledgeEndL = 0;
        knowledgeEndW = 238;
        knowledgeEndH = 70;
        ctaEndL = 0;
        ctaEndT = 0;
        closeEndL = 0;
        closeEndT = 0;
        $('#bgSlice2Preview').text('');
        $('#closeSlice2Preview').text('');
        $('#ctaSlice2Preview').text('');
        $('#bgSlice2').val('');
        $('#bgSlice2').css("backgroundColor", "white");
        $('#closeSlice2').val('');
        $('#closeSlice2').css("backgroundColor", "white");
        $('#ctaSlice2').val('');
        $('#ctaSlice2').css("backgroundColor", "white");
        $('#bgSlice2sizePreview').text('');
        $('#closeSlice2sizePreview').text('');
        $('#ctaSlice2sizePreview').text('');
        console.log('Erased!');
    });
    //PROMPT ACTIONS
    $('#bgSlice0').bind('drop', function(event) {
        bgImg = new Image();
        bgURL = event.originalEvent.dataTransfer.getData("URL");
        bgImg.onload = function() {
            console.log('Image width: ' + bgImg.width + 'px; Image height: ' + bgImg.height + 'px;');
            $('#bgSlice0sizePreview').text(bgImg.width + 'x' + bgImg.height);
        };
        bgImg.src = bgURL;
        var bgElem = document.createElement('a');
        bgElem.href = bgURL;
        bgElem.protocol = 'https:';
        bgURL = bgElem.href;
        $('#bgSlice0Preview').text(bgURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('BG dropped!');
    });
    $('#closeSlice0').bind('drop', function(event) {
        closeImg = new Image();
        closeURL = event.originalEvent.dataTransfer.getData("URL");
        closeImg.onload = function() {
            console.log('Image width: ' + closeImg.width + 'px; Image height: ' + closeImg.height + 'px;');
            $('#closeSlice0sizePreview').text(closeImg.width + 'x' + closeImg.height);
        };
        closeImg.src = closeURL;
        var closeElem = document.createElement('a');
        closeElem.href = closeURL;
        closeElem.protocol = 'https:';
        closeURL = closeElem.href;
        $('#closeSlice0Preview').text(closeURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('close dropped!');
    });
    $('#ctaSlice0').bind('drop', function(event) {
        ctaImg = new Image();
        ctaURL = event.originalEvent.dataTransfer.getData("URL");
        ctaImg.onload = function() {
            console.log('Image width: ' + ctaImg.width + 'px; Image height: ' + ctaImg.height + 'px;');
            $('#ctaSlice0sizePreview').text(ctaImg.width + 'x' + ctaImg.height);
        };
        ctaImg.src = ctaURL;
        var ctaElem = document.createElement('a');
        ctaElem.href = ctaURL;
        ctaElem.protocol = 'https:';
        ctaURL = ctaElem.href;
        $('#ctaSlice0Preview').text(ctaURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('CTA dropped!');
    });
    $('#bgSlice0').bind('click', function(event) {
        $(this).blur();
    });
    $('#closeSlice0').bind('click', function(event) {
        $(this).blur();
    });
    $('#ctaSlice0').bind('click', function(event) {
        $(this).blur();
    });
    //FEEDBACK ACTIONS
    $('#bgSlice1').bind('drop', function(event) {
        bgImg = new Image();
        bgURL = event.originalEvent.dataTransfer.getData("URL");
        bgImg.onload = function() {
            console.log('Image width: ' + bgImg.width + 'px; Image height: ' + bgImg.height + 'px;');
            $('#bgSlice1sizePreview').text(bgImg.width + 'x' + bgImg.height);
        };
        bgImg.src = bgURL;
        var bgElem = document.createElement('a');
        bgElem.href = bgURL;
        bgElem.protocol = 'https:';
        bgURL = bgElem.href;
        $('#bgSlice1Preview').text(bgURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('BG dropped!');
    });
    $('#closeSlice1').bind('drop', function(event) {
        closeImg = new Image();
        closeURL = event.originalEvent.dataTransfer.getData("URL");
        closeImg.onload = function() {
            console.log('Image width: ' + closeImg.width + 'px; Image height: ' + closeImg.height + 'px;');
            $('#closeSlice1sizePreview').text(closeImg.width + 'x' + closeImg.height);
        };
        closeImg.src = closeURL;
        var closeElem = document.createElement('a');
        closeElem.href = closeURL;
        closeElem.protocol = 'https:';
        closeURL = closeElem.href;
        $('#closeSlice1Preview').text(closeURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('close dropped!');
    });
    $('#ctaSlice1').bind('drop', function(event) {
        ctaImg = new Image();
        ctaURL = event.originalEvent.dataTransfer.getData("URL");
        ctaImg.onload = function() {
            console.log('Image width: ' + ctaImg.width + 'px; Image height: ' + ctaImg.height + 'px;');
            $('#ctaSlice1sizePreview').text(ctaImg.width + 'x' + ctaImg.height);
        };
        ctaImg.src = ctaURL;
        var ctaElem = document.createElement('a');
        ctaElem.href = ctaURL;
        ctaElem.protocol = 'https:';
        ctaURL = ctaElem.href;
        $('#ctaSlice1Preview').text(ctaURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('CTA dropped!');
    });
    $('#submitSlice1').bind('drop', function(event) {
        submitImg = new Image();
        submitURL = event.originalEvent.dataTransfer.getData("URL");
        submitImg.onload = function() {
            console.log('Image width: ' + submitImg.width + 'px; Image height: ' + submitImg.height + 'px;');
            $('#submitSlice1sizePreview').text(submitImg.width + 'x' + submitImg.height);
        };
        submitImg.src = submitURL;
        var submitElem = document.createElement('a');
        submitElem.href = submitURL;
        submitElem.protocol = 'https:';
        submitURL = submitElem.href;
        $('#submitSlice1Preview').text(submitURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('CTA dropped!');
    });
    $('#bgSlice1').bind('click', function(event) {
        $(this).blur();
    });
    $('#closeSlice1').bind('click', function(event) {
        $(this).blur();
    });
    $('#ctaSlice1').bind('click', function(event) {
        $(this).blur();
    });
    $('#submitSlice1').bind('click', function(event) {
        $(this).blur();
    });
    //PROACTIVE ACTIONS
    $('#bgSlice2').bind('drop', function(event) {
        bgImg = new Image();
        bgURL = event.originalEvent.dataTransfer.getData("URL");
        bgImg.onload = function() {
            console.log('Image width: ' + bgImg.width + 'px; Image height: ' + bgImg.height + 'px;');
            $('#bgSlice2sizePreview').text(bgImg.width + 'x' + bgImg.height);
        };
        bgImg.src = bgURL;
        var bgElem = document.createElement('a');
        bgElem.href = bgURL;
        bgElem.protocol = 'https:';
        bgURL = bgElem.href;
        $('#bgSlice2Preview').text(bgURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('BG dropped!');
    });
    $('#closeSlice2').bind('drop', function(event) {
        closeImg = new Image();
        closeURL = event.originalEvent.dataTransfer.getData("URL");
        closeImg.onload = function() {
            console.log('Image width: ' + closeImg.width + 'px; Image height: ' + closeImg.height + 'px;');
            $('#closeSlice2sizePreview').text(closeImg.width + 'x' + closeImg.height);
        };
        closeImg.src = closeURL;
        var closeElem = document.createElement('a');
        closeElem.href = closeURL;
        closeElem.protocol = 'https:';
        closeURL = closeElem.href;
        $('#closeSlice2Preview').text(closeURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('close dropped!');
    });
    $('#ctaSlice2').bind('drop', function(event) {
        ctaImg = new Image();
        ctaURL = event.originalEvent.dataTransfer.getData("URL");
        ctaImg.onload = function() {
            console.log('Image width: ' + ctaImg.width + 'px; Image height: ' + ctaImg.height + 'px;');
            $('#ctaSlice2sizePreview').text(ctaImg.width + 'x' + ctaImg.height);
        };
        ctaImg.src = ctaURL;
        var ctaElem = document.createElement('a');
        ctaElem.href = ctaURL;
        ctaElem.protocol = 'https:';
        ctaURL = ctaElem.href;
        $('#ctaSlice2Preview').text(ctaURL);
        $(this).css('background-color', 'green');
        $(this).blur();
        console.log('CTA dropped!');
    });
    $('#bgSlice2').bind('click', function(event) {
        $(this).blur();
    });
    $('#closeSlice2').bind('click', function(event) {
        $(this).blur();
    });
    $('#ctaSlice2').bind('click', function(event) {
        $(this).blur();
    });
    console.log('Engine loaded!');
});