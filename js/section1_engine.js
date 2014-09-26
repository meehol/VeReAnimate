$(window).ready(function() {
    
    $('#submitButton1').click( checkTheBox );
    
    $("#draggable_parent").css('background-image', bgURL );
    $("#draggable_parent").css('width', bgWidth );
    $("#draggable_parent").css('height', bgHeight );
    
    $("#draggable_child_cta").css('background-image', ctaURL );
    $("#draggable_child_cta").css('width', ctaWidth );
    $("#draggable_child_cta").css('height', ctaHeight );
    
    $("#draggable_child_close").css('background-image', closeURL );
    $("#draggable_child_close").css('width', closeWidth );
    $("#draggable_child_close").css('height', closeHeight );
    
    
    $("#draggable_child_cta").bind('dragstart', function() {
        $("#draggable_child_cta").css("border", "dashed 1px");
        $("#draggable_child_cta").css("border-color", "red");
    });
    $("#draggable_child_cta").bind('dragstop', function() {
        $("#draggable_child_cta").css("border", "none");
    });
    
    $("#draggable_child_close").bind('dragstart', function() {
        $("#draggable_child_close").css("border", "dashed 1px");
        $("#draggable_child_close").css("border-color", "red");
    });
    $("#draggable_child_close").bind('dragstop', function() {
        $("#draggable_child_close").css("border", "none");
    });
    
    $("#inpat").bind('dragstart', function() {
        $("#inpat").css("border", "dashed 1px");
        $("#inpat").css("border-color", "red");
    });
    $("#inpat").bind('dragstop', function() {
        $("#inpat").css("border", "dashed 1px");
        $("#inpat").css("border-color", "red");
    });
    
    $("#draggable_parent").draggable();
    $("#draggable_parent").draggable({
        containment: "#cage"
    });
    $("#draggable_parent").draggable({
        stop: function(event, ui) {
            console.log(ui.position.top, ui.position.left);
        }
    });
    
    $("#draggable_child_cta").draggable();
    $("#draggable_child_cta").draggable({
        containment: "#draggable_parent"
    });
    $("#draggable_child_cta").draggable({
        stop: function(event, ui) {
            console.log(ui.position.top, ui.position.left);
        }
    });
    
    $("#draggable_child_close").draggable();
    $("#draggable_child_close").draggable({
        containment: "#draggable_parent"
    });
    $("#draggable_child_close").draggable({
        stop: function(event, ui) {
            console.log(ui.position.top, ui.position.left);
        }
    });
    
    $("#inpat").draggable();
    $("#inpat").draggable({
        containment: "#draggable_parent"
    });
    $("#inpat").draggable({
        stop: function(event, ui) {
            console.log(ui.position.top, ui.position.left);
        }
    });
    $('#inpat').resizable();
    $('#inpat').resizable({
        autoHide: true
    });
    $("#inpat").resizable({
        containment: "#draggable_parent"
    });
    $('#inpat').resizable({
    	stop : function(event,ui) {
            endW = $(this).outerWidth();
            endH = $(this).outerHeight();
            console.log("Width: " + (endW) + "  --  Height: " + (endH));
        },
    });
});