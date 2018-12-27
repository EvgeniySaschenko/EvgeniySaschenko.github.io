'use strict';

(function () {
	var accordion__item = document.getElementsByClassName('accordion__item');

	var _loop = function _loop(i, l) {
		accordion__item[i].addEventListener('click', function () {
			accordion__item[i].classList.toggle('active');
		});
	};

	for (var i = 0, l = accordion__item.length; l > i; i++) {
		_loop(i, l);
	}
})();
'use strict';

(function () {
	var mySwiper = new Swiper('.advantages_services-inter', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			770: {
				slidesPerView: 1,
				effect: 'flip',
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			},
			1190: {
				slidesPerView: 2,
				spaceBetween: 20,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			}
		}
	});
})();
'use strict';

(function () {
	var mySwiper = new Swiper('.brief-article_services', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			770: {
				slidesPerView: 1,
				effect: 'flip',
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			},
			1190: {
				slidesPerView: 2,
				spaceBetween: 20,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			}
		}
	});
})();
'use strict';

(function () {
	var toggleBtn = function toggleBtn(idBtn) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		/*
  	idBtn - id кнопки при нажатии на которую происходит прерключение
  	data-id-control - id елемента которому добавляется/удаляется класс ".active" после нажатия на кнопку 
  */
		// Клик
		var btn = document.getElementById(idBtn);
		var callback = cb ? cb : function () {};
		if (btn) {
			btn.addEventListener('click', function () {
				this.classList.toggle('active');
				var idControl = this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
				callback();
			});
		}
	};
	// video
	toggleBtn('btn_services-inter', function () {
		var video__iframe = document.querySelector('#video_services-inter .video__iframe');
		video__iframe.src = 'https://www.youtube.com/embed/VMKTEyLQYh8?autoplay=1';
	});
})();
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
		}
	};

	// Кнопка бургер header - преключение навигации
	toggleBtn('btn-burger_header');
})();
'use strict';

(function () {
	$('.drop-down-menu').styler();
})();
'use strict';

(function () {
	var reset = function reset(form) {
		var field = form.querySelectorAll('[name]');
		for (var i = 0, l = field.length; l > i; i++) {
			field[i].value = '';
		}
	};
})();
// Стилизвция select

(function () {
	$('.form__select').styler({
		selectSmartPositioning: false
	});
})();
'use strict';

(function () {
	var modal__close = function modal__close(el) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var callback = cb ? cb : function () {};
		var modal__close = document.querySelectorAll(el);
		for (var i = 0, l = modal__close.length; l > i; i++) {
			modal__close[i].addEventListener('click', function () {
				document.querySelector('.modal.active').classList.remove('active');
				callback();
			});
		}
	};

	modal__close('.modal__close', function () {
		var video__iframe = document.querySelector('#video_services-inter .video__iframe');
		video__iframe.src = '';
	});
})();
'use strict';

// Активный пункт меню
(function () {
	var funActiveMenu__item = function funActiveMenu__item(event, el) {
		for (var i = 0, l = el.length; l > i; i++) {
			el[i].addEventListener(event, function (e) {
				for (var j = 0, l2 = el.length; l2 > j; j++) {
					el[j].classList.remove('active');
				}
				e.target.parentNode.classList.add('active');
			});
		}
	};
	var nav_header = document.querySelectorAll('.nav_header .nav__item');
	funActiveMenu__item('click', nav_header);
	funActiveMenu__item('touch', nav_header);
})();
'use strict';

(function () {
	var mySwiper = new Swiper('.slider_header', {
		loop: true,
		autoplay: {
			delay: 5000
		},
		preloadImages: true,
		lazy: {
			loadPrevNext: true
		}
	});
})();
'use strict';

(function () {
	var tab__item = document.getElementsByClassName('tab__item');

	var _loop = function _loop(i, l) {
		// click
		tab__item[i].addEventListener('click', function () {
			// удалить .active у .tab__item и .tab__content который сейчас активен
			var curentTabActive = tab__item[i].parentNode.querySelector('.tab__item.active');
			var curentContentActive = document.getElementById(curentTabActive.getAttribute('data-id'));
			curentContentActive.classList.remove('active');
			curentTabActive.classList.remove('active');
			// Добавить текущим .tab__item и .tab__content класс .active
			this.classList.add('active');
			document.getElementById(this.getAttribute('data-id')).classList.add('active');
		});
		// touch
		tab__item[i].addEventListener('touch', function () {
			// удалить .active у .tab__item и .tab__content который сейчас активен
			var curentTabActive = tab__item[i].parentNode.querySelector('.tab__item.active');
			var curentContentActive = document.getElementById(curentTabActive.getAttribute('data-id'));
			curentContentActive.classList.remove('active');
			curentTabActive.classList.remove('active');
			// Добавить текущим .tab__item и .tab__content класс .active
			this.classList.add('active');
			document.getElementById(this.getAttribute('data-id')).classList.add('active');
		});
	};

	for (var i = 0, l = tab__item.length; l > i; i++) {
		_loop(i, l);
	}
})();
'use strict';

(function () {
	var mySwiper = new Swiper('.tile_clients', {
		slidesPerView: 'auto',
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			770: {
				slidesPerView: 1,
				effect: 'flip',
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			},
			990: {
				slidesPerView: 2,
				effect: 'flip',
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			},
			1190: {
				slidesPerView: 3,
				spaceBetween: 20,
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				}
			}
		}
	});
})();
'use strict';

(function () {
	var video__close = function video__close(el) {
		var video__close = document.querySelectorAll(el);
		for (var i = 0, l = video__close.length; l > i; i++) {
			video__close[i].addEventListener('click', function () {
				document.querySelector('.video').classList.remove('active');
			});
		}
	};
	video__close('.video__close');
})();