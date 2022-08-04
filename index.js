// let dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.left = "0px";
// function moveDodgerLeft() {
// 	const leftNumbers = dodger.style.left.replace("px", "");
// 	const left = parseInt(leftNumbers, 10);

// 	if (left > 0) {
// 		dodger.style.left = `${left - 1}px`;
// 	}
// }
// document.addEventListener("keydown", function (e) {
// 	if (e.key === "ArrowLeft") {
// 		moveDodgerLeft();
// 	}
// });
// function moveDodgerRight() {}
var dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#ff69b4";

function moveDodgerLeft() {
	var leftNumbers = dodger.style.left.replace("px", "");
	var left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 4}px`;
	}
}

function moveDodgerRight() {
	var leftNumbers = dodger.style.left.replace("px", "");
	var left = parseInt(leftNumbers, 10);

	if (left < 360) {
		dodger.style.left = `${left + 4}px`;
	}
}

document.addEventListener("keydown", function (e) {
	if (e.which === 37) {
		moveDodgerLeft();
	}
	if (e.which === 39) {
		moveDodgerRight();
	}
});
