const elements = document.querySelectorAll("li");

elements.forEach((element) => {
	element.addEventListener("click", () => {
		elements.forEach((el) => el.classList.remove("active"));
		element.classList.add("active");
	});
});

const listItems = document.querySelectorAll("li");

const sections = document.querySelectorAll(".section");

listItems.forEach((li) => {
	li.addEventListener("click", () => {
		const sectionId = li.getAttribute("data-section");

		sections.forEach((section) => {
			section.classList.remove("active2");
		});

		const selectedSection = document.getElementById(sectionId);
		if (selectedSection) {
			selectedSection.classList.add("active2");
		}
	});
});
