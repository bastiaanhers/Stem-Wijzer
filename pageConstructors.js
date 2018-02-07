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
function skippedShow(){
    

}

function opinionShow(){
    var div = document.createElement("div");
    div.setAttribute("style", "display: flex; height: 400px; overflow: auto;" );

    page.appendChild(div);

    for(var i = 1; i < 3; i++){
        var card = document.createElement("div");
        card.setAttribute("class","w3-card-4 w3-light-grey")
        card.setAttribute("id", "position".concat(i));

        var table = document.createElement("table");
        table.setAttribute("class", "w3-table-all")
        var tr = document.createElement("tr");

        var thName = document.createElement("th");
        var node1 = document.createTextNode("naam");
        thName.style.cssText = "padding-left: 10%";        
        thName.appendChild(node1);

        var thPos = document.createElement("th");
        var node2 = document.createTextNode("toelichting");
        thPos.style.cssText = "pull: left; margin-left: 10%";
        thPos.appendChild(node2);
        
        tr.appendChild(thName);
        tr.appendChild(thPos);
        table.appendChild(tr);
        card.appendChild(table);
        div.appendChild(card);       
    }
    var card1 = document.getElementById("position1");
    card1.style.cssText = "margin-right: 4%; width: 48%; height:100%; overflow: auto;";
        
    var card2 = document.getElementById("position2");
    card2.style.cssText = "width: 48%; height:100%; overflow: auto;";
    
    subjects[pageCount].parties.forEach(partie => {
        var th1 = document.createElement("th");
        var node1 = document.createTextNode(partie.name);
        var th2 = document.createElement("th");
        var node2 = document.createTextNode(partie.position);
        if(node2 == "pro"){
            node2 = "eens"
        }else{
            node2 = "oneens"
        }
        
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