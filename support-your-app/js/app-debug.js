'use strict';

(function () {
	var wrapper = document.getElementById('wrapper_entry-app');
	var substrate = document.getElementById('wrapper__substrate');
	var img = new Image();
	var url = ['img/bg_entry-app-1.jpg', 'img/bg_entry-app-2.jpg'];

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	var time = Math.floor(new Date() / 1000);
	var timeLS = localStorage.getItem('time');
	var bgLS = localStorage.getItem('bg');

	// Запись в localStorage
	if (!bgLS || timeLS <= time - 60 * 60 * 8) {
		localStorage.setItem('bg', getRandomInt(0, url.length));
		localStorage.setItem('time', time);
	}
	// Слушатель на загрузку картинки
	img.addEventListener('load', function () {
		wrapper.classList.add('show-bg');
		substrate.style.backgroundImage = 'url(' + url[localStorage.getItem('bg')] + ')';
	});

	img.src = url[localStorage.getItem('bg')];
})();