"use strict";

// Кнопка показать больше
(function () {
	$('.form__btn_more-option').on("click", function () {
		$(this).toggleClass("active");
		$(".form__box-more-option").toggleClass("active");
	});
})();

// Кнопка показать больше
(function () {
	$('.form_tours .all').on("click", function () {
		$(this).parents('.form__list').find('.form__checkbox').prop('checked', true);
	});
})();
"use strict";

// Кнопка бургер
(function () {
	$('.btn_burger-header').on("click", function () {
		$(this).toggleClass("active");
		$(".nav_header").toggleClass("active");
	});
})();

// Меню
(function () {
	$('.nav__item').on("click", function () {
		var active = $(this).hasClass("active") ? true : false;
		$('.nav__item').removeClass("active");
		if (!active) {
			$(this).addClass("active");
		}
	});
})();
'use strict';

(function () {
	var regulator = function regulator(scale, scaleBg, slider, callback) {
		var cb = callback || function () {};
		slider.on('mousedown', function (e) {
			var maxX = scale[0].getBoundingClientRect().x + scale[0].getBoundingClientRect().width;
			var minX = scale[0].getBoundingClientRect().x;
			var move = function move(e) {
				var left = e.pageX - minX;
				var left2 = e.pageX - minX;
				var widthSlider = slider[0].offsetWidth;
				if (e.pageX > maxX) {
					left = scale[0].getBoundingClientRect().width;
					left2 = left;
				}
				if (e.pageX < minX + widthSlider / 2) {
					left = widthSlider / 2;
					left2 = 0;
				}

				scaleBg[0].style.width = left + 'px';
				slider[0].style.left = left - widthSlider / 2 + 'px';
				var procent = Math.round(100 / scale[0].getBoundingClientRect().width * left2);
				cb(procent);
			};
			$(document).on('mousemove', move);
			$(document).on('mousedown', move);
			$(document).on('click', move);
			$(document).on('mouseup', function (e) {
				$(document).unbind('mousemove', move);
				$(document).unbind('mousedown', move);
				$(document).unbind('click', move);
			});
		});
	};

	regulator($("#range-1 .range__scale"), $("#range-1 .range__scale-bg"), $("#range-1 .range__slider"), function (data) {
		$("#range-1 .range__value_max").text(4000 / 100 * data + '+');
		$('.form_tours [name="range"]').val(4000 / 100 * data);
	});

	//
})();
'use strict';

(function () {
	$('.tab__item').on("click", function () {
		$('.tab__item').removeClass("active");
		$('.tab__content').removeClass("active");
		var id = $(this).data("id");
		$(this).addClass("active");
		$('.tab__content[data-id="' + id + '"]').addClass("active");
	});
})();