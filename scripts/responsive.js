

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const titleCard = document.querySelector("#title-card");
const titleCard2 = document.querySelector("#title-card2");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌃")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
		body.style.background ="#000";
		footer.style.background ="#808080";
		titleCard.style.background ="#808080";
		titleCard2.style.background ="#808080";
		header.style.background ="#808080";
		nav.style.background="#1D4D72";

       
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🌃";
		body.style.background ="#fff";
		footer.style.background ="#1D4D72"
		titleCard.style.background ="#1D4D72";
		titleCard2.style.background ="#1D4D72";
		header.style.background ="#1D4D72";
		nav.style.background="#0076B6";

	}
});
