'use strict';

var ajax = function ajax(url, data, callback) {
	var cb = callback || function () {};
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url, false);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(data);
	return (xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (xhr.responseText != '') return cb(xhr.responseText);
		} else {
			console.log('err');
		}
	})();
};
"use strict";

function currentYPosition() {
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) return self.pageYOffset;
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) return document.body.scrollTop;
		return 0;
}

function elmYPosition(eID) {
		var elm = document.getElementById(eID);
		var y = elm.offsetTop;
		var node = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
				node = node.offsetParent;
				y += node.offsetTop;
		}return y;
}

function smoothScroll(eID) {
		var startY = currentYPosition();
		var stopY = elmYPosition(eID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
				scrollTo(0, stopY);return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
				for (var i = startY; i < stopY; i += step) {
						setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
						leapY += step;if (leapY > stopY) leapY = stopY;timer++;
				}return;
		}
		for (var i = startY; i > stopY; i -= step) {
				setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
				leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
		}
}
'use strict';

var slider__list = document.getElementById('slider__list');
var slider__arrow = document.getElementsByClassName('slider__arrow');
var slider__item = [{
	name: "Слайд 3"
}, {
	name: "Слайд 1"
}, {
	name: "Слайд 2"
}];

// Создаём элементы
slider__item = slider__item.map(function (e, i) {
	var div = document.createElement('div');
	div.className = "slider__item";
	div.innerHTML = '<div class="slider__box">\n\t\t\t\t\t\t\t\t\t\t<div class="slider__name"> ' + e.name + ' </div>\n\t\t\t\t\t\t\t\t\t</div>';
	return div;
});

var fragment = document.createDocumentFragment();
slider__item.map(function (e, i) {
	fragment.append(slider__item[i]);
});
slider__list.append(fragment);

// Прокрутка слайдов
var intervalID = setInterval(function () {
	slider__list.classList.remove('show');
	setTimeout(function () {
		slider__list.classList.add('show');
		slider__list.append(slider__item[0]);
		slider__item.push(slider__item.shift());
	}, 100);
}, 5000);

// Кнопки
for (var i = 0, l = slider__arrow.length; l > i; i++) {
	slider__arrow[i].addEventListener('click', function (e) {
		clearInterval(intervalID);
		slider__list.classList.remove('show');
		setTimeout(function () {
			slider__list.classList.add('show');
			if (e.target.getAttribute('data-id') == 'next') {
				slider__list.prepend(slider__item[slider__item.length - 1]);
				slider__item.unshift(slider__item.pop());
			} else {
				slider__list.append(slider__item[0]);
				slider__item.push(slider__item.shift());
			}
		}, 100);
	});
}