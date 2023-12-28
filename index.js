const elements = document.querySelectorAll("li");

elements.forEach((element) => {
	element.addEventListener("click", () => {
		elements.forEach((el) => el.classList.remove("active"));
		element.classList.add("active");
	});
});
