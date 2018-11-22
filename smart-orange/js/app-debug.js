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

	toggleBtn('btn_sider-1');
	toggleBtn('btn_sider-2');
	toggleBtn('btn_sider-3');
	toggleBtn('btn_sider-4');
})();
'use strict';

(function () {
	var reset = function reset(form) {
		var field = form.querySelectorAll('[name]');
		for (var i = 0, l = field.length; l > i; i++) {
			field[i].value = '';
		}
	};

	// document.querySelector('form [type="submit"]').addEventListener("click", function(e){
	// 	e.preventDefault();
	// 	for(let i= 0, l= e.path.length; l > i; i++ ){
	// 		if( e.path[i].tagName.toLowerCase() == 'form' ){
	// 			reset(e.path[i]);
	// 			break;
	// 		}
	// 	}
	// });
})();
'use strict';

(function () {
	var modal__close = function modal__close(el) {
		var modal__close = document.querySelectorAll(el);
		for (var i = 0, l = modal__close.length; l > i; i++) {
			modal__close[i].addEventListener('click', function () {
				document.querySelector('.modal.active').classList.remove('active');
			});

			modal__close[i].addEventListener('touch', function () {
				document.querySelector('.modal.active').classList.remove('active');
			});
		}
	};

	modal__close('.modal__close');
})();
'use strict';

(function () {
	var slider_header = new Swiper('.swiper-container', {
		autoplay: {
			delay: 5000
		}
	});
})();
'use strict';

(function () {
	var el = document.querySelector('.team');
	el.classList.add('animated');
	var waypoint = new Waypoint({
		element: el,
		handler: function handler() {
			this.element.classList.add('bounceInLeft');
		},
		offset: '100%'
	});
})();