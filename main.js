const header = document.querySelector("header");
const burgerMenu = document.querySelector(".burger");
const toggleMenuIcon = document.querySelector(".burger .menuburger");
const lis = document.querySelectorAll(".nav li");


// close and open navbar (sidebar)
burgerMenu.addEventListener("click", () => {
	header.classList.toggle("act");
	const isAct = header.classList.contains("act") ? "close" : "normal";
	toggleMenuIcon.src = `./images/icon-${isAct}-menu.svg`;
});

lis.forEach((e) => {
	e.addEventListener("click", () => {
		e.classList.toggle("active");
	});
});


