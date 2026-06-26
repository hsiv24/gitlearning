// Write the code as shown in the video below:
let mainHeading = document.querySelector("#main-heading");
let fruits = document.querySelectorAll(".fruit");
let basketHeading = document.querySelector("#basket-heading");

basketHeading.style.color = "brown";

for (let i = 0; i < fruits.length; i++){
    if ((i + 1) % 2 === 0) { 
        fruits[i].style.backgroundColor = "brown";
        fruits[i].style.color = "white";
    }
}



// Write answer to the questions asked below:
let fruitsList = document.querySelector(".fruits");
fruitsList.style.listStyle = "none";

