let colorGenerator = document.querySelector("#color-change-button");
let numberColor = document.querySelector(".number-color");
let count = 0;

colorGenerator.addEventListener('click', generateRandomColor);

colorGenerator.onclick = function(){
    count += 1;
    numberColor.innerHTML = "Number of times color changed : "  + count;
}

function generateRandomColor(){
 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}