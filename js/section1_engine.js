$(window).ready(function() {
    $("#draggable_parent").bind('dragstop', function() {
        $("#draggable_parent").css("border", "none");
    });
    $("#draggable_child").bind('dragstart', function() {
        $("#draggable_child").css("border", "dashed 1px");
        $("#draggable_child").css("border-color", "red");
    });
    $("#draggable_child").bind('dragstop', function() {
        $("#draggable_child").css("border", "none");
    });
    $("#inpat").bind('dragstart', function() {
        $("#inpat").css("border", "dashed 1px");
        $("#inpat").css("border-color", "red");
    });
    $("#inpat").bind('dragstop', function() {
        $("#inpat").css("border", "dashed 1px");
        $("#inpat").css("border-color", "#BABABA");
    });
    $("#draggable_parent").css("border-color", "red");
    $("#draggable_parent").draggable();
    $("#draggable_parent").draggable({
        containment: "#cage"
    });
    $("#draggable_parent").draggable({
        stop: function(event, ui) {
            console.log(ui.position.top, ui.position.left);
        }
    });
    $("#draggable_child").draggable();
    $("#draggable_child").draggable({
        containment: "#draggable_parent"
    });
    $("#draggable_child").draggable({
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