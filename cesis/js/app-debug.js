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

(function () {
	var toggleBtn = function toggleBtn(idBtn) {
		/*
  	idBtn - id кнопки при нажатии на которую происходит прерключение
  	data-id-control - id елемента которому добавляется/удаляется класс ".active" после нажатия на кнопку 
  */
		// Клик
		var btn = document.getElementById(idBtn);
		if (btn) {
			btn.addEventListener('click', function () {
				this.classList.toggle('active');
				var idControl = this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
			});
			// Касание
			btn.addEventListener('touch', function () {
				this.classList.toggle('active');
				var idControl = this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
			});
		}
	};

	// Кнопка бургер header - преключение навигации
	toggleBtn('btn_burger-header-open');
	toggleBtn('btn_burger-header-close');
})();

// скролл к portfolio
(function () {

	document.getElementById('header-to-portfolio-1').addEventListener('click', function (e) {
		smoothScroll(e.target.getAttribute('data-section'));
	});

	document.getElementById('header-to-portfolio-2').addEventListener('click', function (e) {
		smoothScroll(e.target.getAttribute('data-section'));
	});
})();
'use strict';

// Активный пункт меню
(function () {
	var btnClose = document.getElementById('btn_burger-header-close');
	var funActiveMenu__item = function funActiveMenu__item(event, el) {
		var _loop = function _loop(i, l) {
			el[i].addEventListener(event, function () {
				smoothScroll(el[i].getAttribute('data-section'));
				btnClose.click();
			});
		};

		for (var i = 0, l = el.length; l > i; i++) {
			_loop(i, l);
		}
	};
	var nav_header = document.querySelectorAll('.nav_header .nav__item');
	funActiveMenu__item('click', nav_header);
	funActiveMenu__item('touch', nav_header);
})();