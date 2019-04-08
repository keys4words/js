var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// newHeading.innerHTML = "Did you know?";
// newParagraph.innerHTML = "California produces over 17 million gallons of wine";


var h1Text = document.createTextNode("Did you know?");
var paragraphText = document.createTextNode("California produces over 17 million gallons of wine");

newHeading.appendChild(h1Text);
newParagraph.appendChild(paragraphText);

var myclass = document.getElementsByClassName("myclass");
var trivia = document.getElementById("trivia");
console.log(trivia.innerHTML);

trivia.appendChild(newHeading);
// document.getElementById("trivia").insertBefore(paragraphText, myclass[0]);
trivia.appendChild(paragraphText);
console.log(trivia.innerHTML);

var abc = document.getElementById("abc");

var myNewElement = document.createElement("li");
myNewElement.appendChild(paragraphText);
var secondItem = abc.getElementsByTagName("li")[1];
abc.insertBefore(myNewElement, secondItem);