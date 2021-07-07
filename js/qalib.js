function zeigeStartBild(msgtext,btntext) {
  $("#main").append(
    "<div id=\"start\" class=\"jumbotron\">\
        <h1>Hey!!!</h1>\
        <p>" + msgtext +"</p>\
        <p><button class=\"btn btn-primary btn-lg\" id=\"start_btn\">" + btntext + "</button></p>\
      </div>");
      
  $("#start_btn").click(function() {
    $("#start").hide();
    $("#inout").show();
    
    start();
  });
}



function clear() {
  $("#output").empty();
}

function output(msg) {
  //add alert div in 
  $("#output").append("<div class=\"alert alert-info\">" + msg + "</div>");
}

function answeroutput(msg) {
  $("#output").append("<div class=\"alert alert-success text-right\">" + msg + "</div>");
}

var currentanswer = "";
var answered = false;  
$("#answerbtn").click(function() {
  currentanswer = $("#answertext").val();
  $("#input").hide();
  $("#answertext").val("");
  answered = true;
  answeroutput(currentanswer);
});

var answercallback = undefined;
function input(question, callback) {
  //wait for input and return 
  $("#questiontext").text(question);
  $("#input").show();
  answered = false;
  answercallback = callback;
  waitForInput(); 
  
}

function waitForInput(callback) {
  if (!answered) {
    setTimeout(waitForInput, 500);
  } else {
    answercallback(currentanswer);
  }
}



