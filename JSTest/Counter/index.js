window.onload =function() {
    let count = 0;
    let displayCount = document.getElementById("count");
    let countIncrease = document.getElementById("increase");
    let countDecrease = document.getElementById("decrease");
    let reset = document.getElementById("reset");

    updateDisplay();

countIncrease.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

countDecrease.addEventListener("click",()=>{
    count--;
    updateDisplay();
}) ;

reset.addEventListener("click",()=>{
    count = 0;
    updateDisplay();
}) ;

function updateDisplay(){
    displayCount.innerHTML = count;
}
};



