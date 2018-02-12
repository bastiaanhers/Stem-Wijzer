var page = document.getElementById("main");
var pageCount = 0;
var options = ["eens","geenVanBeide", "oneens",  "skip"];
var results = [];


function clearPage(){
    page.innerHTML = "";
}
function buildSkipped(){
    clearPage();
    skippedShow();


}

function buildResultPage(){
    clearPage();
    

}

function buildStatement(pageNumb){
    clearPage();
    if(pageCount >= 1){
        backButtonShow(pageNumb);
    };
    statementShow(pageNumb);
    options.forEach(option => {
        buttonShow(option, pageNumb);
    });
    //opinionShow();
    
}
function back(){
    pageCount--;
    results.splice (pageCount,pageCount);
    buildStatement();
    
}

function clicked(event){
    var data = event.target.choice;
    var pageNumb = event.target.numb;

    if(pageNumb <  subjects.length - 1 ){
        var antwoord = {statement:pageNumb, anwser:data};
        results.push(antwoord);
        pageCount ++;
        buildStatement(pageNumb);      
    }else{
        buildSkipped();
    }
    console.log(pageNumb);
    console.log(data);
    

}
