// Access element using id
var articlesDiv = document.getElementById('articles'); // HTML 15 <div id="articles">
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
// Targeting 16 - 19 [children 0]; 18 [children 1]
articlesDiv.children[0].children[1].style.fontSize = '50px';
//or
body.children[0].children[1].style.fontSize = '50px'

headerDiv.children[0].style.color = 'white';
//or same thing:
document.getElementById("header").children[0].style.color = "white";