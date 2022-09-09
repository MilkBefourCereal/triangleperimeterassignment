// Triangle Perimeter Assignment Start Code


// Variables
let xANum = document.getElementById("xAInput");
let yANum = document.getElementById("yAInput");
let xBNum = document.getElementById("xBInput");
let yBNum = document.getElementById("yBInput");
let xCNum = document.getElementById("xCInput");
let yCNum = document.getElementById("yCInput");

let abNum = document.getElementById("abOutput");
let acNum = document.getElementById("acOutput");
let bcNum = document.getElementById("bcOutput");
let abcNum = document.getElementById("abcOutput");
 
// Event Listeners
document.getElementById("calcBtn").addEventListener("click", calc);


// Function
function calc() {
    let AB = dist(xANum.value , xBNum.value, yANum.value, yBNum.value);
    let AC = dist(xANum.value , xCNum.value, yANum.value, yCNum.value);
    let BC = dist(xCNum.value, xBNum.value, yCNum.value, yBNum.value);
    abNum.innerHTML = AB;
    acNum.innerHTML = AC;
    bcNum.innerHTML = BC;
    abcNum.innerHTML = AB + AC + BC;
}

function dist(x1, x2, y1, y2) {
   return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
}


    





