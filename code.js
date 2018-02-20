var pageNumb = -1;
var ready = false;
var weight = false;
var reg = false;
var sec = false;
//start page element
var page = document.getElementById("page");
//statement page element
var statementPage = document.getElementById("statementPage"); 
//statement elements
var titleText = document.getElementById("titleText");
var statementText = document.getElementById("statementText");
//result page
var resultsPage = document.getElementById("resultsPage");
var skipText = document.getElementById("skipText");
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
//end result page
var endResult = document.getElementById("endResult");
var belang = document.getElementById("belang");
var top5 = document.getElementById("top5");

//show the statement page
function buildStatement(event){
    weight = false;
    belang.checked = false;
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
            case "pro":
                button1.setAttribute("class", "w3-button w3-green w3-margin");
               
            break;
            case "ambivalent":
                button2.setAttribute("class", "w3-button w3-green w3-margin");
               
                break;
            case "contra":
                button3.setAttribute("class", "w3-button w3-green w3-margin");
            break;
            case "skip":
                button4.setAttribute("class", "w3-button w3-red w3-margin");
            break;
        }  
    }
    //if all the anwsers are given show button to result page;
    if(results.length >= subjects.length){
        var result = results[pageNumb].anwser;
        if(result == "skip"){
            blocked.style.display = "block";
        }else{
            granted.style.display = "block";
        }
    }
}
belang.onchange  = function weightTrue() {
    if(belang.checked){
        weight = true;
        }else{
        weight = false;
        }
};

function buildResults(){
    ready = false;
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
    //checks if no anwser is skipped if so block the next button
    results.forEach(result => {
        if(result.anwser !== "skip"){
            ready = true;
        }else{
            ready = false;
        }
    
    });
};  

function endResultino(){
    var partijen = [];
    //verander pagina
    resultsPage.style.display = "none";
    endResult.style.display = "block";

    // look at selected options and save if true
    parties.forEach(partij => {
        if(sec == true){
            if(partij.secular == true){
                var partie = {name:partij.name, weight:0, points:0};
                partijen.push(partie);
            }
        }else{}

        if(reg == true){
            if(partij.secular == false){
                var partie = {name:partij.name, weight:0, points:0};
                partijen.push(partie);                
            }
        }else{}    
    });
    results.forEach(result =>{
        subjects[result.statement].parties.forEach(partie =>{
            partijen.forEach(partij =>{
                if(partie.position == result.anwser){
                    if(partie.name == partij.name){
                        if(result.weight == true){
                            partij.points = partij.points + 1.5;
                        }else{
                            partij.points++;
                        }
                    }
                }
            })
        });
    });
    partijen.sort(function(a, b) {
        var pointsA = a.points;
        var pointsB = b.points;
        if (pointsA < pointsB) {
          return 1;
        }
        if (pointsA > pointsB) {
          return -1;
        }
      
        // names must be equal
        return 0;
      });
    for(var i = 0; i < 5; i++){
        var li = document.createElement("li");
        var node = document.createTextNode(partijen[i].name);
        li.appendChild(node);
        top5.appendChild(li);
        console.log(partijen[i].name);
    }
    // maak array met alle partijen !!
    // check bij elke vraag of een partij een punt krijgt!!
    // keer het punt als hij meer gewicht!!
    // pak de 5 partijen met de hoogste scoren!! 
    // maat li met partij voor de pagina


};

regCheckbox.onchange  = function changeLink() {
    if(regCheckbox.checked || secCheckbox.checked){
        if(ready == true){
        eindBlocked.style.display = "none";
        eindGranted.style.display = "block";
        reg = true;
        }
        }else{
            eindBlocked.style.display = "block";
            eindGranted.style.display = "none";
            reg = false;
        }
        
};

secCheckbox.onchange  = function changeLink() {
    if(regCheckbox.checked || secCheckbox.checked){
        if(ready == true){
            eindBlocked.style.display = "none";
            eindGranted.style.display = "block";
            sec = true;
        }
        }else{
            eindBlocked.style.display = "block";
            eindGranted.style.display = "none";
            sec = false;
        }
       
};

function back(){
    pageNumb = pageNumb - 2;
    buildStatement();
};

function clicked(choice){
        //delete result if exists
        if(results[pageNumb]){
            results.splice(pageNumb, 1); 
            results.sort(function(a, b){return a.statement - b.statement});                                           
        }

        //save given result
        var antwoord = {statement:pageNumb, anwser:choice, weight:weight};
        results.push(antwoord);
        results.sort(function(a, b){return a.statement - b.statement});
        

    // show result if all anwers are given else show next statement
     if(pageNumb >= subjects.length -1){
        results.sort(function(a, b){return a.statement - b.statement});
        buildResults(); 
    }else{
        buildStatement();
    }
    console.dir(results);
};
