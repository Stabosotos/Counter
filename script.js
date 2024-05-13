
const decreaseBtn = document.getElementById("decreaseBtn");
const increase = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel")

let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count--;
    document.getElementById("countLabel").textContent = count;
}

document.getElementById("increaseBtn").onclick = function() {
    count++;
    document.getElementById("countLabel").textContent = count;
}

document.getElementById("resetBtn").onclick = function() {
    count = 0;
    document.getElementById("countLabel").textContent = count;
}