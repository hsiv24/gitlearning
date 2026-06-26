// Write your code below:
let mainHeading = document.getElementById("main-heading");

let header = document.getElementById("header");

let basket = document.getElementById("basket-heading");

let thanks = document.getElementById("thanks");

let para = document.createElement("p")
para.textContent = "Please visit us again";


mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";
header.style.backgroundColor = "green";
basket.style.color = "green";
header.style.borderBottom = "5px solid orange";
thanks.appendChild(para);