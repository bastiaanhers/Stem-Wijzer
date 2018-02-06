var page = document.getElementById("main");
var pageCount = 0;
function clearPage(){
    page.innerHTML = "";
}

function buildStatement(){
    //als je terug kan laad een terugknop


    //text van statement plaatsen
    var title = document.createElement("h1");
    var titleNode = document.createTextNode(subjects[pageCount].title);
    title.appendChild(titleNode);
    page.appendChild(title);

    var statement = document.createElement("p");
    var statementNode = document.createTextNode(subjects[pageCount].statement);
    statement.appendChild(statementNode);
    page.appendChild(statement);

    //buttons opbouwen
    var options = ["eens", "oneens", "geenVanBeide", "skip"];

    options.forEach(option => {
        var button = document.createElement("button");
        var Node = document.createTextNode(option);
        button.setAttribute("class", "w3-display-middle w3-button w3-green");
        button.setAttribute("onclick","clicked('eens')");
        button.appendChild(Node);
        page.appendChild(button);
    });

    // var buttonEens = document.createElement("button");
    // var buttonNode = document.createTextNode("Eens");
    // buttonEens.setAttribute("class", "w3-display-middle w3-button w3-green");
    // buttonEens.setAttribute("onclick","clicked('eens')");
    // buttonEens.appendChild(buttonNode);
    // page.appendChild(buttonEens);

    // var buttonEens = document.createElement("button");
    // var buttonNode = document.createTextNode("Geen van beide");
    // buttonEens.setAttribute("class", "w3-display-middle w3-button w3-red");
    // buttonEens.setAttribute("onclick","clicked('geenVanBeide')");
    // buttonEens.appendChild(buttonNode);
    // page.appendChild(buttonEens);

    // var buttonOneens = document.createElement("button");
    // var button2Node = document.createTextNode("Oneens");
    // buttonOneens.setAttribute("class", "w3-display-middle w3-button w3-grey");
    // buttonOneens.setAttribute("onclick","clicked('oneens')");
    // buttonOneens.appendChild(button2Node);
    // page.appendChild(buttonOneens);

    // var buttonEens = document.createElement("button");
    // var buttonNode = document.createTextNode("Eens");
    // buttonEens.setAttribute("class", "w3-display-middle w3-button w3-red");
    // buttonEens.setAttribute("onclick","clicked('geenVanBeide')");
    // buttonEens.appendChild(buttonNode);
    // page.appendChild(buttonEens);
    
}

function clicked(data){
    clearPage();

    switch(data) {
        case "eens":

        break;       
        case "oneens":

        break;
        case "geenVanBeide":

        break;       
        case "skip":

        break;
        case "back":
            pageCount = pageCount - 2;

        break;
    }

    buildStatement();
    
    pageCount ++;
}