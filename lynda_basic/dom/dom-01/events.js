// document.onclick = function(){
//     alert("You clicked somewhere");
// };

function prepareEventHandlers(){
    var myImage = document.getElementById("mainImage");
    myImage.onclick = function(){
        alert("You clicked on picture");
    };
    
}


window.onload = function(){
    prepareEventHandlers();
}