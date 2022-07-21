// var userName = prompt("Enter your Name:");
// alert(userName);
var btn = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input"); 

function clickHandler(){
    console.log("Clicked")
    console.log(txtInput.value);
}

btn.addEventListener("click", clickHandler);