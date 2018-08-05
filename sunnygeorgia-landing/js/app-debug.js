'use strict';

(function () {
	var toggleBtn = function toggleBtn(idBtn) {
		/*
  	idBtn - id кнопки при нажатии на которую происходит прерключение
  	data-id-control - id елемента которому добавляется/удаляется класс ".active" после нажатия на кнопку 
  */
		// Клик
		document.getElementById(idBtn).addEventListener('click', function () {
			this.classList.toggle('active');
			var idControl = this.getAttribute('data-id-control');
			document.getElementById(idControl).classList.toggle('active');
		});
		// Касание
		document.getElementById(idBtn).addEventListener('touch', function () {
			this.classList.toggle('active');
			var idControl = this.getAttribute('data-id-control');
			document.getElementById(idControl).classList.toggle('active');
		});
	};

	// Кнопка показать / скрыть отзывы
	try {
		toggleBtn('btn_form-add-comment');
	} catch (err) {}
})();

(function () {
	var showModal = function showModal(idBtn, idModal) {
		document.getElementById(idBtn).addEventListener('click', function () {
			document.getElementById(idModal).classList.add('active');
		});
	};
	// Кнопка бургер header - преключение навигации
	showModal('btn_modal-send-order-1', 'modal_send-order');
	showModal('btn_modal-send-order-2', 'modal_send-order');
	showModal('btn_modal-send-order-3', 'modal_send-order');
})();
'use strict';

(function () {
	// Сообщение при отправке письма
	$('#form_modal-send-order, #form_callback').on('submit', function (e) {
		var msg = void 0;
		if ($(this).data('lang') == 'en') {
			msg = 'Thank you for your application! Our operator will contact you shortly.';
		} else {
			msg = 'Спасибо за заявку! Наш оператор с Вами скоро свяжется.';
		}
		var $this = $(this);
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'vendor/php_mailer/mail.php',
			data: $this.serialize()
		}).done(function () {
			alert(msg);
		});
		$(this)[0].reset();
	});
})();

// Добавить комментарий
(function () {
	var templateReview = function templateReview() {
		var template = void 0;
		if (localStorage.reviews) {
			JSON.parse('[' + localStorage.reviews + ']').reverse().map(function (e) {
				template += '<div class="reviews__item">\n\t\t\t\t\t\t<div class="reviews__box-avatar">\n\t\t\t\t\t\t<img class="reviews__img reviews__img_avatar" src="' + e.imgAvatar + '" alt="" role="presentation">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="reviews__box-comment">\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_1"><span class="reviews__name">' + e.name + ' ' + e.lastName + '</span><span class="reviews__date">' + e.date + '</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="reviews__row reviews__row_2">\n\t\t\t\t\t\t\t<div class="reviews__rating">\n\t\t\t\t\t\t\t\t<i class="icon icon-star"></i>\n\t\t\t\t\t\t\t\t<i class="icon ' + (e.rating < 2 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t\t<i class="icon ' + (e.rating < 3 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t\t<i class="icon ' + (e.rating < 4 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t\t<i class="icon ' + (e.rating < 5 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_3">\n\t\t\t\t\t\t\t\t<p class="reviews__text">' + e.comment + '</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
			});
			if (document.querySelector(".reviews")) {
				document.querySelector(".reviews").insertAdjacentHTML("afterBegin", template.replace('undefined', ''));
			}
		}
	};

	// Добавить комментарий
	var form__btn_addComment = document.getElementById('form__btn_add-comment');
	if (form__btn_addComment) {

		form__btn_addComment.addEventListener('click', function (e) {
			var form = document.getElementById('form_add-comment');
			var comment = form.querySelector('.form__textarea');
			var name = form.querySelector('.form__field_name');
			var lastName = form.querySelector('.form__field_last-name');
			var fileUpload = form.querySelector('.form__file_upload').files[0];
			var rating = form.querySelector('.form__rating-item-checkbox:checked');

			if (comment.value != '' && fileUpload) {
				e.preventDefault();

				var reader = new FileReader();
				var imgAvatar = void 0;
				var reviews = localStorage.getItem('reviews');

				reader.onloadend = function () {
					imgAvatar = reader.result;
					if (reviews) {
						// последующие комментарии добаввляем localStorage

						reviews += ',{"id" : "' + Date.now() + '", "imgAvatar" : "' + imgAvatar + '", "name" : "' + name.value + '", "lastName" : "' + lastName.value + '", "comment" : "' + comment.value + '", "date" : "' + moment().format('MMMM DD') + '", "rating" : "' + rating.value + '"}';
						localStorage.setItem('reviews', reviews);
					} else {
						// Первый комментарий добаввляем localStorage
						localStorage.setItem('reviews', '{ "id" : "' + Date.now() + '", "imgAvatar" : "' + imgAvatar + '", "name" : "' + name.value + '", "lastName" : "' + lastName.value + '", "comment" : "' + comment.value + '", "date" : "' + moment().format('MMMM DD') + '", "rating" : "' + rating.value + '" }');
					}

					// Добавление шаблона в HTML при новом комментарии
					var template = '<div class="reviews__item">\n\t\t\t\t\t\t<div class="reviews__box-avatar">\n\t\t\t\t\t\t<img class="reviews__img reviews__img_avatar" src="' + imgAvatar + '" alt="" role="presentation">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="reviews__box-comment">\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_1">\n\t\t\t\t\t\t\t\t<span class="reviews__name">' + name.value + ' ' + lastName.value + '</span><span class="reviews__date">' + moment().format('MMMM DD') + '</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_2">\n\t\t\t\t\t\t\t\t<div class="reviews__rating">\n\t\t\t\t\t\t\t\t\t<i class="icon icon-star"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon ' + (rating.value < 2 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon ' + (rating.value < 3 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon ' + (rating.value < 4 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon ' + (rating.value < 5 ? 'icon-star-not-active' : 'icon-star') + '"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_3">\n\t\t\t\t\t\t\t\t<p class="reviews__text">' + comment.value + '</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
					document.querySelector(".reviews").insertAdjacentHTML("afterBegin", template);

					comment.value = '';
					name.value = '';
					lastName.value = '';
				};
				if (fileUpload) {
					reader.readAsDataURL(fileUpload);
				} else {}
			}
		});
	}
	templateReview();
})();

// стилизация select | поля загрузки файла
(function () {
	setTimeout(function () {
		$('.form__select').styler();
	}, 100);
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
	var modal__close = function modal__close(event, el) {
		var modal__close = document.querySelectorAll(el);
		for (var i = 0, l = modal__close.length; l > i; i++) {
			modal__close[i].addEventListener(event, function () {
				document.querySelector('.modal.active').classList.remove('active');
			});
		}
	};

	modal__close('click', '.modal__close');
	modal__close('touch', '.modal__close');

	modal__close('click', '.form__modal-close');
	modal__close('touch', '.form__modal-close');
})();
'use strict';

(function () {
	var range = function range(_range) {
		var sliderStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		var cb = callback ? callback : function () {};
		var range__slider = _range.getElementsByClassName('range__slider')[0];
		var range__proggres = _range.getElementsByClassName('range__proggres')[0];
		var sliderWidth = range__slider.clientWidth;
		var rangeWidth = _range.clientWidth;
		// Проверка на максимальное минимальное значение положения .range__slider
		var sliderPos = void 0;
		// Если стартовая позиция задана в %
		if (sliderStart.indexOf('%') + 1) {
			sliderPos = sliderStart.substring(0, sliderStart.length - 1);
			if (sliderPos > 100 || sliderPos < 0) {
				sliderPos = 0;
			} else {
				sliderPos = sliderStart;
			}
			// Если стартовая позиция задана в px
		} else {
			sliderPos = sliderStart.substring(0, sliderStart.length - 2);
			if (sliderPos > rangeWidth || sliderPos < 0) {
				sliderPos = 0;
			} else {
				sliderPos = sliderStart;
			}
		}
		// Задаётся положение слайдера и полосы прогресса
		range__slider.style.left = sliderPos;
		range__proggres.style.width = sliderPos;

		range__slider.addEventListener('mousedown', function (e) {
			// Положение елемента .range на странице
			var rangePos = _range.getBoundingClientRect().left;
			var move = function move(e) {
				/* 
    	Изменить позицию .range__slider
    	e.clientX - положение мыши
    	rangePos - положение элемента .range с лева от края страницы
    */
				sliderPos = e.clientX - rangePos;

				if (sliderPos <= 0) {
					sliderPos = 0;
				}

				if (sliderPos >= rangeWidth) {
					sliderPos = rangeWidth;
				}

				range__slider.style.left = sliderPos - sliderWidth / 2 + 'px';
				range__proggres.style.width = sliderPos + 'px';
				cb(sliderPos);
			};

			document.addEventListener('mousemove', move);
			document.addEventListener('mouseup', function (e) {
				document.removeEventListener('mousemove', move);
			});
		});
	};
})();
'use strict';

(function () {

	var swiper = new Swiper('.slider_top', {
		slidesPerView: 4,
		loop: true,
		pagination: {
			el: '.slider__pagination',
			clickable: true
		},
		autoplay: {
			delay: 5000
		},
		breakpoints: {
			1200: {
				slidesPerView: 3
			},
			720: {
				slidesPerView: 2
			},
			540: {
				slidesPerView: 1
			}
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