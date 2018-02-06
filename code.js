var page = document.getElementById("main");
var pageCount = 0;
var options = ["eens", "oneens", "geenVanBeide", "skip"];
var results = [];


function clearPage(){
    page.innerHTML = "";
}

function buildResultPage(){
    clearPage();
    ResultPageShow();

}

function buildStatement(){
    clearPage();
    if(pageCount >= 1){
        backButtonShow(pageCount);
    };
    statementShow();
    options.forEach(option => {
        buttonShow(option);
    });
    opinionShow();
}

function back(){
    pageCount--;
    buildStatement();

}

function clicked(event){
    var data = event.target.choice;

    if(pageCount <  subjects.length - 1 ){
        var antwoord = {statement:pageCount, anwser:data};
        results.push(antwoord);
        pageCount ++;
    }else{
        buildResultPage();
    }
    
    buildStatement();
    console.log(results);
}