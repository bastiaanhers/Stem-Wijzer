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

    for(var i = 1; i < 4; i++){
        var pos = document.createElement("table");
        pos.setAttribute("class", "w3-table-all w3-light-grey pos");
        pos.setAttribute("id", "position".concat(i));
        page.appendChild(pos);
         
    }

    var pos1 = document.getElementById("position1");
    var pos2 = document.getElementById("position2");
    var pos3 = document.getElementById("position3");

    subjects[pageCount].parties.forEach(option => {
        var opin_tr = document.createElement("tr");

        var name = document.createElement("th");
        var nameNode = document.createTextNode(option.name);
        name.appendChild(nameNode);
        opin_tr.appendChild(name);

        var position = document.createElement("th");
        var positionNode = document.createTextNode(option.position);
        position.appendChild(positionNode);
        opin_tr.appendChild(position);

        var explanation = document.createElement("th");
        var explanationNode = document.createTextNode(option.explanation);
        explanation.appendChild(explanationNode);
        opin_tr.appendChild(explanation);

        if(option.position == "pro"){
            pos1.appendChild(opin_tr);
        }else if(option.position == "contra"){
            pos3.appendChild(opin_tr);
        }else{
            pos2.appendChild(opin_tr);
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