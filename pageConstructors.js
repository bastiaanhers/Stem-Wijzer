
// function resultPageShow(){
//     results.forEach

// }
// function skippedShow(){
//     var i = 1;
//     pageNumb = 0;
//     results.forEach(result =>{
//         var resLink = document.createElement("p");
//         resLink.addEventListener('click', function (event) {
//             buildStatement(pageNumb);
//           });
//         resLink.style.cssText = "height: 20px; width: 20px; margin right: 10px;";        
//         var node = document.createTextNode(i);
//         i++;
//         pageNumb++;
//         console.log(result.anwser);
//         resLink.appendChild(node);
//         if(result.anwser == "skip"){
//             resLink.setAttribute("class", "w3-red");
//         }else{
//             resLink.setAttribute("class", "w3-green");   
//         }
//         page.appendChild(resLink);
//     });

// }

// function opinionShow(){
//     var div = document.createElement("div");
//     div.setAttribute("style", "display: flex; height: 400px; overflow: auto;" );

//     page.appendChild(div);

//     for(var i = 1; i < 4; i++){
//         var banaan = i-1;
//         var card = document.createElement("div");
//         card.setAttribute("class","w3-card-4 w3-light-grey w3-container")
//         card.setAttribute("id", "position".concat(i));

//         var h1 = document.createElement("h3");
//         var h1Text = document.createTextNode(options[banaan]);        
//         h1.appendChild(h1Text);

//         var table = document.createElement("table");
//         table.setAttribute("class", "w3-table-all")
//         var tr = document.createElement("tr");

//         var thName = document.createElement("th");
//         var node1 = document.createTextNode("naam");
//         thName.style.cssText = "padding-left: 10%";        
//         thName.appendChild(node1);

//         var thPos = document.createElement("th");
//         var node2 = document.createTextNode("toelichting");
//         thPos.style.cssText = "pull: left; margin-left: 10%";
//         thPos.appendChild(node2);
        
//         tr.appendChild(thName);
//         tr.appendChild(thPos);
//         table.appendChild(tr);
//         card.appendChild(h1);
//         card.appendChild(table);
//         div.appendChild(card);
//     }
//     var card1 = document.getElementById("position1");
//     card1.style.cssText = "margin-right: 4%; width: 31%; height:100%; overflow: auto;";
        
//     var card2 = document.getElementById("position2");
//     card2.style.cssText = "width: 31%; margin-right: 4%; height:100%; overflow: auto;";

//     var card3 = document.getElementById("position3");
//     card3.style.cssText = "width: 31%; height:100%; overflow: auto;";
    
//     subjects[pageCount].parties.forEach(partie => {
//         var tr = document.createElement("th");
//         var th1 = document.createElement("th");
//         var text1 = partie.name;
//         var a = document.createTextNode(text1);
//         var th2 = document.createElement("th");
//         var text2 = partie.position;        
//         var b = document.createTextNode(text2);
//         if(b == "pro"){
//             b = "eens";
//             th1.appendChild(a);
//             th2.appendChild(b);
//             tr.appendChild(th1);
//             tr.appendChild(th2);
//             card1.appendChild(tr);
//         }else if(b == "contra"){
//             b = "oneens";
//             th1.appendChild(a);
//             th2.appendChild(b);
//             tr.appendChild(th1);
//             tr.appendChild(th2);
//             card3.appendChild(tr);
            
//         }else{
//             b = "geen van beide";
//             th1.appendChild(a);
//             th2.appendChild(b);
//             tr.appendChild(th1);
//             tr.appendChild(th2);
//             card2.appendChild(tr);
            
//         }
//         console.log(b);
                
//     });
 

// }


function backButtonShow(pageCount){
    backButton = document.getElementById('backButton');
    backButton.style.display = "block";
}