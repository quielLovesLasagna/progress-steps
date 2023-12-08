"use strict";

// Element/s
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// State/s
let currentActive = 1;

// Function/s
function update() {
	// Adding active class to button
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	// Changing progress color
	const actives = document.querySelectorAll(".active");
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + "%";

	// Changing disabled state for buttons
	if (currentActive === 1) {
		prevBtn.disabled = true;
	} else if (currentActive === circles.length) {
		nextBtn.disabled = true;
	} else {
		prevBtn.disabled = nextBtn.disabled = false;
	}
}

// Event listener/s
nextBtn.addEventListener("click", function () {
	currentActive++;

	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
});

prevBtn.addEventListener("click", function () {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}

	update();
});
