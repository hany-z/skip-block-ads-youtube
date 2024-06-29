var donate = document.getElementById("donate");
var back = document.getElementById("back");
var qr = document.getElementById("qr");

donate.addEventListener("click", function () {
     qr.style.display = "block";
});

back.addEventListener("click", function () {
     qr.style.display = "none";
});
