// Access element using id
var articlesDiv = document.getElementById('articles'); // HTML 15 <div id="articles">
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = '50px'; // 16 - 19 [children 0]; 18 [children 1]
headerDiv.children[0].style.color = 'white';

// Same than line 6 --> body.children[0].children[1].style.fontSize = '50px'