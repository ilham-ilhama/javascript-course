

//program counter

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const contLabel = document.getElementById("contLabel");

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
  count--;
  contLabel.textContent = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  contLabel.textContent = count;
};
document.getElementById("increaseBtn").onclick = function () {
  count++;
  contLabel.textContent = count;
};
