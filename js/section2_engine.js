$(document).ready(function() {
    $('#submitButton2').click(checkTheBox);
    $('#submitButton2').click(function() {
        if(veTemplate === 0) {
            savePrompt();
        } else if(veTemplate === 1) {
            saveFeedback();
        } else if(veTemplate === 2) {
            saveProactive();
        }
    });
    $('#colorpicker').minicolors();
    

//     $("#knowledgeText0").jqte({fsizes: ["8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]});
//     $("#knowledgeText1").jqte({fsizes: ["8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]});

    $('#knowledgeText0').css('width','450px');
    $('#knowledgeText0').css('height','300px');
    $('#knowledgeText0').css('resize','none');
    $('#knowledgeText1').css('width','450px');
    $('#knowledgeText1').css('height','300px');
    $('#knowledgeText1').css('resize','none');
    
    $('#insertButton0').click(function insertKnowledgeP() {
        var x = document.getElementById("knowledgeText0").value;
        document.getElementById("ChatFlowDiv").innerHTML = x;
    });
    $('#knowledgeText0').text('<p style="' + '\n' + 'line-height: 16px;' + '\n' + 'margin: 10px 0px 15px;' + '\n' + 'padding: 0px;' + '\n' + 'font-size: 13px;' + '\n' + 'text-align: left;' + '\n' + 'font-family: arial;' + '\n' + 'color: #404040;' + '\n' + 'letter-spacing: 0px;' + '\n' + '">' + '\n' + '\n' + '</p>' + '\n' + '\n' + '<p style="line-height: 16px;' + '\n' + 'margin: 10px 0px 15px;' + '\n' + 'padding: 0px;' + '\n' + 'text-align: left;' + '\n' + 'font-size: 13px;' + '\n' + 'font-family: arial;' + '\n' + 'color: #404040;' + '\n' + 'letter-spacing: 0px;' + '\n' + '">' + '\n' + '\n' + '</p>' + '\n' + '\n' + '<p style="' + '\n' + 'line-height: 16px;' + '\n' + 'margin: 10px 0px 15px;' + '\n' + 'padding: 0px;' + '\n' + 'font-size: 13px;' + '\n' + 'text-align: left;' + '\n' + 'font-family: arial;' + '\n' + 'color: #404040;' + '\n' + 'letter-spacing: 0px;' + '\n' + '">' + '\n' + '\n' + '</p>' + '\n' + '\n' + '<p style="' + '\n' + 'line-height: 16px;' + '\n' + 'margin: 10px 0px -30px;' + '\n' + 'padding: 0px;' + '\n' + 'text-align: left;' + '\n' + 'font-size: 13px;' + '\n' + 'font-family: arial;' + '\n' + 'color: #404040;' + '\n' + 'letter-spacing: 0px;' + '\n' + '">' + '\n' + '\n' + '</p>');
    $('#insertButton1').click(function insertKnowledgeR() {
        var x = document.getElementById("knowledgeText1").value;
        document.getElementById("ChatFlowDiv").innerHTML = x;
    });
    $('#knowledgeText1').text('<p style="' + '\n' + 'line-height: 16px;' + '\n' + 'margin: 20px 0px 45px;' + '\n' + 'padding: 0px;' + '\n' + 'font-size: 13px;' + '\n' + 'text-align: left;' + '\n' + 'font-family: arial;' + '\n' + 'color: #404040;' + '\n' + 'letter-spacing: 0px;' + '\n' + '">' + '\n' + '\n' + '</p>');
});