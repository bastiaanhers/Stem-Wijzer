var pageNumb = -1;
//start page element
var page = document.getElementById("page");
//statement page element
var statementPage = document.getElementById("statementPage"); 
//statement elements
var titleText = document.getElementById("titleText");
var statementText = document.getElementById("statementText");
//result page
var resultsPage = document.getElementById("resultsPage");

var results = [];


function buildStatement(){
    //change page
    pageNumb++
    page.style.display = "none";   
    statementPage.style.display = "block";
    //show backbutton
    if(pageNumb >= 1){
        backButton.style.display = "block";
    }else{
        backButton.style.display = "none";
    };
    //change text
    titleText.innerHTML = subjects[pageNumb].title;
    statementText.innerHTML = subjects[pageNumb].statement;
}
function buildResults(){
    //change page
    statementPage.style.display = "none";
    resultsPage.style.display = "block";

    //create button
    var row = document.getElementById("statementResults");

    results.forEach(result =>{
        var button = document.createElement("button");
        numb = result.statement + 1;
        //create button and at to row
        button.setAttribute("id", numb);
        row.appendChild(button);
        //change button text to statement number
        but = document.getElementById(numb);
        but.innerHTML = numb;
        console.log("show");
        console.dir(but);
    });
}

function back(){
    pageNumb = pageNumb - 2;
    results.splice(pageNumb, 1);    
    buildStatement();
}

function clicked(choice){
    //save anwsers and show result page
    if(pageNumb >  subjects.length ){
        var antwoord = {statement:pageNumb, anwser:choice};
        results.push(antwoord);
        buildStatement();     
    }else{
       buildResults(); 
    }

}
