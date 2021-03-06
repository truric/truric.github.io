//###################################################################################################################//
// used JS lib. SuperSlides previously which has 2k more lines but just wanted to post this solution
// which is everywhere from youtube to stackoverflow this is what must users are using, so, it's not mine:
// https://stackoverflow.com/questions/50775121/change-sildes-automatically
// https://forum.freecodecamp.org/t/javascript-slideshow-code-question/278422
// https://gitea.oonnnoo.com/sandbox/fullscreen-slider/commit/29871ca6cac47b518e8f3a8272787f5db85a1ce3.patch
let sliderImages = document.querySelectorAll('.slide'),
	arrowLeft = document.querySelector('#arrow-left'),
	arrowRight = document.querySelector('#arrow-right'),
	current = 0;

function reset() {
	for (let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
}

function startSlide() {
	reset();
	sliderImages[0].style.display = 'block';
}

function slideLeft() {
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

function slideRight() {
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}
arrowLeft.addEventListener('click', function() {
	if (current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});
arrowRight.addEventListener('click', function() {
	if (current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
});
startSlide();




// used JS lib. typeWriter previously but found out it can be made with just plain css
// just wanted to post this because it is the most used, so, it's not mine:
// https://stackoverflow.com/questions/60109701/how-to-make-only-1-word-move-with-type-writer-javascript
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		// Current index of word
		const current = this.wordIndex % this.words.length;
		// Get full text of current word
		const fullTxt = this.words[current];
		// Check if deleting
		if (this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		// Insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
		// Initial Type Speed
		let typeSpeed = 300;
		if (this.isDeleting) {
			typeSpeed /= 2;
		}
		// If word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// Make pause at end
			typeSpeed = this.wait;
			// Set delete to true
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before start typing
			typeSpeed = 500;
		}
		setTimeout(() => this.type(), typeSpeed);
	}
}

// https://developer.mozilla.org/pt-BR/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);

// init app
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}




// used JS lib. isotope previously but just wanted to post this solution
// which is also everywhere from youtube to stackoverflow:
// https://stackoverflow.com/questions/64721354/how-to-make-a-lightbox-for-dynamic-images-in-js
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const images = document.querySelectorAll('.image-row img');
images.forEach(function(image) {
	image.addEventListener('click', function() {
		lightbox.classList.add('active');
		const img = document.createElement('img');
		img.src = image.src;
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild);
		}
		lightbox.appendChild(img);
	});
});
lightbox.addEventListener('click', function(e) {
	if (e.target !== e.currentTarget) {
		return;
	} else {
		lightbox.classList.remove('active');
	}
});
//###################################################################################################################//



// sound config
var track = new Audio();
track.volume = 0.033;
track.src = "assets/Guile_Theme.mp3";

var trackwiggle = new Audio();
trackwiggle.volume = 0.035;
trackwiggle.src = "assets/wiggle_wiggle.mp3";

// function stopAudio() {
// 	track.stop();
// 	trackwiggle.stop();
// }




// nav configs
let navContainer = document.querySelector('.nav-container'), //TODO
checkBox = document.querySelector('.checkbox'),
navUl = document.querySelector('.nav-list');
navUl.addEventListener('click', function(e) { //TODO
	if (checkBox.checked) {
		checkBox.checked = false;
	}
});




//sort
const sort1 = document.querySelector('.gallery-filter1'),
image1 = document.querySelector('.image-row1'),
image2 = document.querySelector('.image-row2'),
projectRow = document.querySelector('.project-row'), //TODO
sort2 = document.querySelector('.gallery-filter2');
image2.style.display = 'none';

sort1.addEventListener('click', function(e) {
	e.preventDefault();
	if (image1.classList.contains('sort')) {
	} else {
	if (image2.classList.contains('sort')) {
		image2.classList.remove('sort');
	}
	image1.classList.add('sort');
	image1.style.display = 'none';
	image2.style.display = 'grid';
}
});

sort2.addEventListener('click', function(e) {
	e.preventDefault();
	if (image2.classList.contains('sort')) {
	} else {
	if (image1.classList.contains('sort')) {
		image1.classList.remove('sort');
	}
	image2.classList.add('sort');
	image2.style.display = 'none';
	image1.style.display = 'grid';
}
});