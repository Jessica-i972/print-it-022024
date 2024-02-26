// Charger le DOM
document.addEventListener("DOMContentLoaded", function () {

	const slides = [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]

	// Cibler les éléments du Carrousel
	let bannerImg = document.querySelector(".banner-img");
	let divDots = document.querySelector(".dots");
	let dots = [];
	let currentIndex = 0;

	// Ajouter des bullets au slider
	for (let i = 0; i < slides.length; i++) {
		let div = document.createElement("div");
		div.classList.add("dot");
		divDots.appendChild(div);
		dots.push(div);
	}

	// Ajouter les flèches sur le carrousel
	let arrowLeft = document.querySelector(".arrow_left");
	let arrowRight = document.querySelector(".arrow_right");

	// Ajouter les evènements sur les flèches
	arrowLeft.addEventListener("click",  () => {
		changeSlide(-1);
	});

	arrowRight.addEventListener("click",  () => {
		changeSlide(1);
	});

	// Mettre à jour l'index de la diapositive
	function changeSlide(direction) {
		currentIndex += direction;

		if (currentIndex < 0) {
			currentIndex = slides.length - 1;
		} else if (currentIndex >= slides.length) {
			currentIndex = 0;
		}

		updateCarousel();
	}

	// Mise à jour  carrousel content
	function updateCarousel() {
		bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
		bannerImg.alt = `Slide ${currentIndex + 1}`;
		bannerImg.nextElementSibling.innerHTML = slides[currentIndex].tagLine;
		
		// Mise à jours des dots
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove("dot_selected");
		}
		dots[currentIndex].classList.add("dot_selected");		
	}

	// Défilement automatique toutes les 15 secondes 
	let autoScroll = setInterval(() => {
		changeSlide(1); 
	}, 15000);

	// Réinitialiser le défilement automatique après chaque click
	function resetAutoScroll() {
		clearInterval(autoScroll);
		autoScroll = setInterval(() => {
			changeSlide(1);
		}, 15000);
	}

	// Démarrer le carrousel
	updateCarousel();
});