var page = document.getElementById("main");
var pageCount = 0;
var options = ["eens", "oneens", "geenVanBeide", "skip"];


function clearPage(){
    page.innerHTML = "";
}

function buildStatement(){
    clearPage();

    backButtonShow(pageCount);

   statementShow();

    buttonShow(options);
}

function back(){
    pageCount -- ;
    buildStatement();

}

function clicked(event){
    var data = event.target.choice;

    if(pageCount < 2){
    pageCount ++;
    }
    
    buildStatement();
    console.log(pageCount)
}