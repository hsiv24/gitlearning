// Write your code below:
let mainHeading = document.querySelector("#main-heading");

let subHeading = document.createElement("h3");
subHeading.textContent = "Buy high quality organic fruits online"

subHeading.style.fontStyle = "italic";

mainHeading.after(subHeading);

let text = document.createElement("p");
text.id = "fruits-total"
let fruits = document.querySelectorAll(".fruit")

text.textContent = "total number of fruits :" + fruits.length; 

let fruitsList = document.querySelector(".fruits");
fruitsList.before(text);
