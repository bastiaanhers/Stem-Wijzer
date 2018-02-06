function statementShow(){
     //text van statement plaatsen
     var title = document.createElement("h1");
     var titleNode = document.createTextNode(subjects[pageCount].title);
     title.appendChild(titleNode);
     page.appendChild(title);
 
     var statement = document.createElement("p");
     var statementNode = document.createTextNode(subjects[pageCount].statement);
     statement.appendChild(statementNode);
     page.appendChild(statement);
 
}

function resultPageShow(){


}

function opinionShow(){
    subjects[pageCount].parties.forEach(option => {
        console.log(option);
    });
}


//build the buttons
function buttonShow(option){
        var button = document.createElement("button");
        var Node = document.createTextNode(option);
        button.setAttribute("class", "w3-button w3-teal w3-margin");
        button.onclick = clicked;
        button.choice = option;
        button.appendChild(Node);
        page.appendChild(button);

}

function backButtonShow(pageCount){
        var button = document.createElement("button");
        var node = document.createTextNode("terug");
        button.setAttribute("class", "w3-button w3-grey w3");
        button.setAttribute("onclick", "back()");
        button. appendChild(node);
        page.appendChild(button);
}