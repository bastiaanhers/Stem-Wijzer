(function() {
    var jsonData = {};

    function loadJsonData() {
        var jsonDataUrl = "data.json";

        var request = new XMLHttpRequest();
        request.open('GET', jsonDataUrl);
        request.send();

        request.onload = function() {
          jsonData = request.response;
          console.dir(jsonData);
        }
    }



    
    //checked of de data goe id aangekomen
    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }
    //haald de data op
    function json(response) {
        return response.json()
    }
    //maakt de connectie met de server 
    fetch('data.json')
        .then(status)
        .then(json)
        //javascript gaat door maar deze function wacht op de response
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
            jsonData = data;
        })
        
        .catch(function(error) {
            console.log('Request failed', error);
        });
    
        console.dir(jsonData);
    //wordt gereserveerd, na dat de javascript klaar is start een event en na 1 ms krijgt hij een response en voert hij zichzelf uit
    setTimeout(function(){ 
        console.dir(jsonData);
    }, 1);

})();
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