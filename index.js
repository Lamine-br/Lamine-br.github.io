const animatedBox = document.getElementById("animatedBox");
let moveRight = true;

function moveBox() {
	const containerWidth = document.querySelector(".container").offsetWidth;
	const boxWidth = animatedBox.offsetWidth;

	if (moveRight) {
		animatedBox.style.transform = `translateX(${containerWidth - boxWidth}px)`;
	} else {
		animatedBox.style.transform = "translateX(0)";
	}

	moveRight = !moveRight;
}

setInterval(moveBox, 2000);
