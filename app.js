var donate = document.getElementById("donate");
var back = document.getElementById("back");
var qr = document.getElementById("qr");

const momo = document.getElementById("momo");
const usdt = document.getElementById("usdt");

const momo_btn = document.getElementById("momo_btn");
const usdt_btn = document.getElementById("usdt_btn");

donate.addEventListener("click", function () {
     qr.style.display = "block";
});

back.addEventListener("click", function () {
     qr.style.display = "none";
});

momo_btn.addEventListener("click", function () {
     momo.style.display = "block";
     usdt.style.display = "none";
});

usdt_btn.addEventListener("click", function () {
     usdt.style.display = "block";
     momo.style.display = "none";
});
