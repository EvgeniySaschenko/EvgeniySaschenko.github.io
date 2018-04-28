'use strict';

// Открыть / закрыть
(function () {
	var feedback__close = document.querySelector('.feedback__close');
	var btn_feedback = document.querySelector('.btn_feedback');

	var feedback = document.querySelector('.feedback');

	var modal = function modal(event, el) {
		el.addEventListener(event, function (e) {
			feedback.classList.toggle('active');
		});
	};
	// Закрыть 
	modal('click', feedback__close);
	modal('touch', feedback__close);
	// Показать  
	modal('click', btn_feedback);
	modal('touch', btn_feedback);
})();

// Отравка формы
(function () {
	var feedback__btn = document.querySelector('.feedback__btn');
	var send = function send(event, el) {

		el.addEventListener('click', function (e) {
			e.preventDefault();

			var required = document.querySelectorAll('.feedback [required="required"]');

			var _loop = function _loop(i) {
				// Проверка на заполнение
				if (required[i].value === '') {
					required[i].classList.add('error');
					required[i].setAttribute('placeholder', 'Поле обязательно для заполнения');
				}

				required[i].addEventListener('input', function () {
					if (required[i].value) {
						required[i].classList.remove('error');
					} else {
						required[i].classList.add('error');
						required[i].setAttribute('placeholder', 'Поле обязательно для заполнения');
					}
				});
				// валидация Email
				if (required[i].getAttribute('name') == 'mail' && !required[i].value.match(/\w{1,}@\w{1,}/gi)) {
					required[i].classList.add('error');
				}
			};

			for (var i = 0; required.length > i; i++) {
				_loop(i);
			}
		});
	};

	send('click', feedback__btn);
})();
'use strict';

// Основное меню
(function () {
	var menu__item = document.querySelectorAll('.menu_header .menu__item');

	var funActiveMenu__item = function funActiveMenu__item(event) {
		for (var i = 0; menu__item.length > i; i++) {
			menu__item[i].addEventListener(event, function (e) {
				for (var j = 0; menu__item.length > j; j++) {
					menu__item[j].classList.remove('active');
				}
				e.target.parentNode.classList.add('active');
			});
		}
	};

	funActiveMenu__item('click');
	funActiveMenu__item('touch');

	document.getElementById('menu__btn-burger_header').addEventListener('click', function (e) {
		document.getElementById('menu-list_header').classList.toggle('active');
		e.target.classList.toggle('active');
	});
})();

//  меню sidebar
(function () {
	var menu__title = document.querySelectorAll('.menu_sidebar-left .menu__title');
	var menu__item = document.querySelectorAll('.menu_sidebar-left .menu__item');
	var menu__btn_catalog = document.querySelector('.menu_sidebar-left .menu__btn_catalog');
	var menu__box = document.querySelector('.menu_sidebar-left .menu__box');

	// title
	var active_title = function active_title(event, el) {
		for (var i = 0; el.length > i; i++) {
			el[i].addEventListener(event, function (e) {
				// Удаляет active
				for (var _i = 0; el.length > _i; _i++) {
					el[_i].classList.remove('active');
				}
				//  active для текущего
				e.target.classList.add('active');
			});
		}
	};

	active_title('click', menu__title);
	active_title('touch', menu__title);

	// item
	var active_item = function active_item(event, el) {
		for (var i = 0; el.length > i; i++) {
			el[i].addEventListener(event, function (e) {
				// Удаляет active
				for (var _i2 = 0; el.length > _i2; _i2++) {
					el[_i2].classList.remove('active');
				}
				//  active для текущего
				e.target.parentNode.classList.add('active');
			});
		}
	};

	active_item('click', menu__item);
	active_item('touch', menu__item);

	// btn_catalog
	var drop_menu = function drop_menu(event, el1, el2) {
		el1.addEventListener(event, function (e) {
			el2.classList.toggle('active');
		});
	};

	drop_menu('click', menu__btn_catalog, menu__box);
	drop_menu('touch', menu__btn_catalog, menu__box);
})();
'use strict';

(function () {
	// Слайдеры на странице
	var slider = document.getElementsByClassName('slider');

	var _loop = function _loop(i) {
		// слайды в слайдере
		var slide = slider[i].getElementsByClassName('slider__item');
		// Кнопки next / prev
		var btn_prev = slider[i].querySelector('.slider__btn_prev');
		var btn_next = slider[i].querySelector('.slider__btn_next');

		// Добавляем номер каждому слайду
		for (var numSlide = 0; slide.length > numSlide; numSlide++) {
			slide[numSlide].setAttribute('data-num', numSlide);
		}

		var n = 1;
		var p = 0;
		slide[0].classList.add('active');
		// Автоперелистывание слайдов
		var idInterval = setInterval(function () {
			slide[p].classList.remove('active');
			slide[n].classList.add('active');
			// Номер предыдущего слайда
			p = n;
			// Номер следующего слайда
			if (n < slide.length - 1 && n != slide.length - 1) {
				n++;
			} else {
				n = 0;
			}
			var stop = function stop(event, el) {
				el.addEventListener(event, function () {
					clearInterval(idInterval);
				});
			};

			stop('click', btn_prev);
			stop('click', btn_next);
			stop('touch', btn_prev);
			stop('touch', btn_next);
		}, 4000);

		// Перелистывание кнопками;
		var letBtnSlider = function letBtnSlider(event, el, step) {
			el.addEventListener(event, function () {
				var curentSlide = slider[i].querySelector('.slider__item.active');
				var num = Number(curentSlide.getAttribute('data-num'));
				curentSlide.classList.remove('active');
				// Удалить у предыдущего
				slide[num].classList.remove('active');

				if (num + step < 0) {
					num = slide.length - 1;
				} else if (num + step > slide.length - 1) {
					num = 0;
				} else {
					num = num + step;
				}
				slide[num].classList.add('active');
			});
		};
		letBtnSlider('click', btn_prev, -1);
		letBtnSlider('click', btn_next, 1);
		letBtnSlider('touch', btn_prev, -1);
		letBtnSlider('touch', btn_next, 1);
	};

	for (var i = 0; slider.length > i; i++) {
		_loop(i);
	}
})();