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
//button elements
var button1 = document.getElementById("but1");
var button2 = document.getElementById("but2");
var button3 = document.getElementById("but3");
var button4 = document.getElementById("but4");
var granted = document.getElementById("granted");
var blocked = document.getElementById("blocked");
//elements regulier en seculier checkbox
var eindBlocked = document.getElementById("eindButtonBlocked");
var eindGranted = document.getElementById("eindButtonGranted");   
var regCheckbox = document.querySelector('input[value="reg"]');
var secCheckbox = document.querySelector('input[value="sec"]');
//array with all results
var results = [];

//show the statement page
function buildStatement(event){
    // hide elements
    resultsPage.style.display = "none";
    blocked.style.display = "none";
    granted.style.display = "none";
    
    //add to change to next page
    pageNumb++;
    //if result button is clicked load the right page
    if(event){
        number = event.target.id - 1;
        pageNumb = number;
    }
   
    //change page
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
    //set color back to basic
    button1.setAttribute("class", "w3-button w3-teal w3-margin");
    button2.setAttribute("class", "w3-button w3-teal w3-margin");
    button3.setAttribute("class", "w3-button w3-teal w3-margin");
    button4.setAttribute("class", "w3-button w3-teal w3-margin");
    //change color if already selected
    if(results[pageNumb]){
        switch(results[pageNumb].anwser) {
            case "eens":
                button1.setAttribute("class", "w3-button w3-green w3-margin");
                console.log("eens");
            break;
            case "geenVanBeide":
                button2.setAttribute("class", "w3-button w3-green w3-margin");
                console.log("geen van beide");
                break;
            case "oneens":
                button3.setAttribute("class", "w3-button w3-green w3-margin");
            break;
            case "skip":
                button4.setAttribute("class", "w3-button w3-red w3-margin");
            break;
        }
        console.log(pageNumb);
    }
    //if all the anwsers are given show button to result page;
    if(results.length >= subjects.length){
        var result = results[pageNumb].anwser;
        if(result == "skip"){
            blocked.style.display = "block";
        }else{
            granted.style.display = "block";
        }
        console.dir(result);
    }
}


function buildResults(){
    //change page
    statementPage.style.display = "none";
    resultsPage.style.display = "block";

    //create button
    var row = document.getElementById("statementResults");
    row.innerHTML = "";
    results.forEach(result =>{
        var button = document.createElement("button");
        numb = result.statement + 1;

        //create button and at to row
        button.addEventListener("click", buildStatement);
        button.setAttribute("id", numb);

        if(result.anwser == "skip"){
            button.setAttribute("class", "w3-red");            
        }else{
            button.setAttribute("class", "w3-green");
        }
        row.appendChild(button);
        //change button text to statement number
        but = document.getElementById(numb);
        but.innerHTML = numb;
    });
};   

regCheckbox.onchange = function changeLink() {
    if(regCheckbox.checked){
        eindBlocked.style.display = "none";
        eindGranted.style.display = "block";
        } else if(secCheckbox.checked) {
        eindBlocked.style.diplay = "block";
        eindGranted.style.display = "none";
        }else{
            eindBlocked.style.display = "block";
            eindGranted.style.display = "none";
        }
 
};
secCheckbox.onchange = function changeLink() {
    if(regCheckbox.checked){
        eindBlocked.style.display = "none";
        eindGranted.style.display = "block";
        } else if(secCheckbox.checked) {
        eindBlocked.style.diplay = "block";
        eindGranted.style.display = "none";
        }else{
            eindBlocked.style.display = "block";
            eindGranted.style.display = "none";
        }

};


function back(){
    pageNumb = pageNumb - 2;
    buildStatement();
}

function clicked(choice){
        //delete result if exists
        if(results[pageNumb]){
            results.splice(pageNumb, 1); 
            results.sort(function(a, b){return a.statement - b.statement});                                           
        }

        //save given result
        var antwoord = {statement:pageNumb, anwser:choice};
        results.push(antwoord);
        results.sort(function(a, b){return a.statement - b.statement});
        

    // show result if all anwers are given else show next statement
    console.log(subjects);
     if(pageNumb >= subjects.length -1){
        results.sort(function(a, b){return a.statement - b.statement});
        buildResults(); 
    }else{
        buildStatement();
    }
}
