'use strict';

(function () {
	document.addEventListener('ajax:production', function () {
		var color = void 0,
		    size = void 0,
		    count = void 0,
		    price = void 0,
		    square = void 0,
		    shape = void 0,
		    shapeIcon = void 0;
		var formRowProduct = document.querySelectorAll('.buy .form__row_product');

		// При изменение поля формируются товары для корзины
		var addCart = function addCart(el_1) {
			el_1.addEventListener('change', function () {
				var cart = [];
				for (var j = 0; formRowProduct.length > j; j++) {
					color = formRowProduct[j].querySelector('.form__select_color').value;
					count = formRowProduct[j].querySelector('.form__field_count').value;
					size = formRowProduct[j].querySelector('.form__size').getAttribute('data-size');
					square = formRowProduct[j].querySelector('.form__square').getAttribute('data-square');
					shape = formRowProduct[j].getAttribute('data-shape');
					shapeIcon = formRowProduct[j].getAttribute('data-shape-icon');
					if (count >= 3000) {
						price = formRowProduct[j].querySelector('.form__price_1').getAttribute('data-price');
					} else {
						price = formRowProduct[j].querySelector('.form__price_2').getAttribute('data-price');
					}
					if (count > 0) {
						cart.push({
							color: color,
							count: count,
							size: size,
							square: square,
							price: price,
							shape: shape,
							shapeIcon: shapeIcon });
					}
				}

				// Изменить количество товароа в корзине в шапке
				document.getElementById('header__icon_cart-counter').innerText = cart.length;

				// Сформировать таблицу в корзине
				var formCartList = document.getElementById('formCartList');
				var cartTemplate = [];
				var totalSum = 0;
				for (var i = 0; cart.length > i; i++) {
					totalSum += parseFloat((cart[i].count * cart[i].price).toFixed(2));
					cartTemplate.push('<div class="form__row form__row_product">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="form__size">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + cart[i].size + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" name="size[]" value="' + cart[i].size + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="form__color"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + cart[i].color + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" name="color[]" value="' + cart[i].color + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="form__shape"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="form__text">' + cart[i].shape + '</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="form__icon ' + cart[i].shapeIcon + '" title="' + cart[i].shape + '"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" name="shape[]" value="' + cart[i].shape + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="form__price">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + cart[i].price + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" name="price[]" value="' + cart[i].price + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="form__square">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + cart[i].square + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" name="square[]" value="' + cart[i].square + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="form__count">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + cart[i].count + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" name="count[]" value="' + cart[i].count + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="form__sum">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + (cart[i].count * cart[i].price).toFixed(2) + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="hidden" name="sum[]" value="' + (cart[i].count * cart[i].price).toFixed(2) + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>');
				}
				cartTemplate.push('<div class="form__row form__row_product">\n\t\t\t\t\t\t<div class="form__total-sum-text">\n\t\t\t\t\t\t\t\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430:\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form__total-sum">\n\t\t\t\t\t\t\t' + totalSum.toFixed(2) + '\n\t\t\t\t\t\t\t<input type="hidden" name="sum_total" value="' + totalSum.toFixed(2) + '">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>');

				formCartList.innerHTML = cartTemplate.join('');
			});
		};

		for (var i = 0; formRowProduct.length > i; i++) {
			var formSelectColor = formRowProduct[i].querySelector('.form__select_color');
			var formFieldCount = formRowProduct[i].querySelector('.form__field_count');
			addCart(formSelectColor);
			addCart(formFieldCount);
		}
	});

	// При нажаатии появляеться модальное окно корзины
	var callModalCart = document.getElementsByClassName('call-modal-cart');
	for (var i = 0; callModalCart.length > i; i++) {
		callModalCart[i].addEventListener('click', function (e) {
			document.getElementById('cart').classList.add('active');
		});
	}

	// Выйти из корзины
	document.querySelector('.cart__close').addEventListener('click', function (e) {
		document.getElementById('cart').classList.remove('active');
	});
}).call();
'use strict';

(function () {
	var ajax = function ajax(url, formData, callback) {
		var cb = callback || function () {};
		var xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(formData);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
				if (xhr.responseText != '') cb(JSON.parse(xhr.responseText));
			} else {}
		};
	};

	// РАЗДЕЛ С ПРОДУКЦИЕЙ
	ajax('http://podlogkafood.ua-ix.biz/server/production.php', '', function (data) {
		var templateCircle_1 = [],
		    templateCircle_2 = [],
		    templateSquare_1 = [],
		    templateSquare_2 = [];
		var templateBase = function templateBase(size, price_layer_1, price_layer_1_3000, square, layer, shape, shapeIcon) {
			var colorTemplate = void 0;
			if (layer == 1) {
				colorTemplate = '<select class="form__select form__select_color" name="color">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option class="form__option" value="\u0411\u0435\u043B\u044B\u0439">\u0411\u0435\u043B\u044B\u0439\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>';
			} else {
				colorTemplate = '<select class="form__select form__select_color" name="color">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option class="form__option" value="\u0417\u043E\u043B\u043E\u0442\u043E / \u0421\u0435\u0440\u0435\u0431\u0440\u043E">\u0417\u043E\u043B\u043E\u0442\u043E / \u0421\u0435\u0440\u0435\u0431\u0440\u043E\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option class="form__option" value="\u0417\u043E\u043B\u043E\u0442\u043E / \u0417\u043E\u043B\u043E\u0442\u043E">\u0417\u043E\u043B\u043E\u0442\u043E / \u0417\u043E\u043B\u043E\u0442\u043E\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option class="form__option" value="\u0421\u0435\u0440\u0435\u0431\u0440\u043E / \u0421\u0435\u0440\u0435\u0431\u0440\u043E">\u0421\u0435\u0440\u0435\u0431\u0440\u043E / \u0421\u0435\u0440\u0435\u0431\u0440\u043E\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>';
			}

			return '<div class="form__row form__row_product" data-shape="' + shape + '" data-shape-icon="' + shapeIcon + '">\n\t\t\t\t<div class="form__size" data-size="' + size + '">\n\t\t\t\t\t' + size + '\n\t\t\t\t</div>\n\t\t\t\t<div class="form__color"> \n\t\t\t\t\t' + colorTemplate + '\n\t\t\t\t</div>\n\t\t\t\t<div class="form__price form__price_1" data-price="' + price_layer_1 + '">\n\t\t\t\t\t' + price_layer_1 + '\n\t\t\t\t</div>\n\t\t\t\t<div class="form__price form__price_2" data-price="' + price_layer_1_3000 + '">\n\t\t\t\t\t' + price_layer_1_3000 + '\n\t\t\t\t</div>\n\t\t\t\t<div class="form__square" data-square="' + square + '">\n\t\t\t\t\t' + square + '\n\t\t\t\t</div>\n\t\t\t\t<div class="form__count"><input type="text" pattern="^[0-9]+$" class="form__field form__field_count" name="count" placeholder="0" type="text"/>\n\t\t\t\t</div>\n\t\t\t\t<div class="form__sum">\n\t\t\t\t\t0.00\n\t\t\t\t</div>\n\t\t\t</div>';
		};

		// Вставка шаблона в DOM
		for (var i = 0; data.length > i; i++) {
			if (data[i].diameter != 0) {
				templateCircle_1.push(templateBase(data[i].diameter, data[i].price_layer_1, data[i].price_layer_1_3000, data[i].square, 1, 'Круглая', 'glyphicon glyphicon-record'));
				templateCircle_2.push(templateBase(data[i].diameter, data[i].price_layer_2, data[i].price_layer_2_3000, data[i].square, 2, 'Круглая', 'glyphicon glyphicon-record'));
			} else {
				templateSquare_1.push(templateBase(data[i].dimensions, data[i].price_layer_1, data[i].price_layer_1_3000, data[i].square, 1, 'Прямоугольная', 'glyphicon glyphicon-stop'));
				templateSquare_2.push(templateBase(data[i].dimensions, data[i].price_layer_2, data[i].price_layer_2_3000, data[i].square, 2, 'Прямоугольная', 'glyphicon glyphicon-stop'));
			}
		}
		document.getElementById('formBuyCircleListLayer1').innerHTML = templateCircle_1.join('');
		document.getElementById('formBuyCircleListLayer2').innerHTML = templateCircle_2.join('');
		document.getElementById('formBuySquareListLayer1').innerHTML = templateSquare_1.join('');
		document.getElementById('formBuySquareListLayer2').innerHTML = templateSquare_2.join('');

		//Добавить слушатель на количество
		var formRowProduct = document.querySelectorAll('.form__row_product');

		var _loop = function _loop(_i) {
			var formFieldCount = formRowProduct[_i].querySelector('.form__field_count');
			var formSum = formRowProduct[_i].querySelector('.form__sum');
			var formPrice1 = formRowProduct[_i].querySelector('.form__price_1').getAttribute('data-price');
			var formPrice2 = formRowProduct[_i].querySelector('.form__price_2').getAttribute('data-price');

			formFieldCount.addEventListener('change', function () {

				formFieldCount.value = isNaN(formFieldCount.value) || formFieldCount.value == '' ? 0 : parseInt(formFieldCount.value);
				// Пересчёт суммы в зависимости от количества
				if (formFieldCount.value >= 3000) {
					formSum.innerText = Number(formFieldCount.value * formPrice1).toFixed(2);
				} else {
					formSum.innerText = (formFieldCount.value * formPrice2).toFixed(2);
				}
			});
		};

		for (var _i = 0; formRowProduct.length > _i; _i++) {
			_loop(_i);
		}

		// Создаём событие для Корзины
		var event = new Event('ajax:production');
		document.dispatchEvent(event);
	});

	// РАЗДЕЛ С ПРОДУКЦИЕЙ
	document.querySelector('#formCart .btn_cart').addEventListener('click', function (e) {
		e.preventDefault();
		var notice = document.querySelectorAll('#formCart .notice');

		for (var i = 0; notice.length > i; i++) {
			notice[i].classList.remove('active');
		}

		var form = document.getElementById('formCart');
		var formData = new FormData(form);
		var formRequired = document.querySelectorAll('#formCart [required="required"]');
		var valid = true;
		for (var _i2 = 0; formRequired.length > _i2; _i2++) {

			if (formRequired[_i2].getAttribute('name') == 'mail' && !formRequired[1].value.match(/\w{1,}@\w{1,}/gi) || formRequired[_i2].value == '') {
				valid = false;
				break;
			}
		}

		if (valid) {
			ajax('http://podlogkafood.ua-ix.biz/server/mail.php?action=send', formData, function (data) {
				if (data == 'success') {
					document.querySelector('#formCart .notice_success').classList.add('active');
				} else {
					document.querySelector('#formCart .notice_error').classList.add('active');
				}
			});
		} else {
			document.querySelector('#formCart .notice_warning').classList.add('active');
		}
	});
}).call();
'use strict';

(function () {
	var listBuyName = document.getElementsByClassName('list-buy__name');
	var formBuy = document.getElementsByClassName('form_buy');

	var _loop = function _loop(i) {
		listBuyName[i].addEventListener('click', function () {
			var idForm = listBuyName[i].parentNode.getAttribute('data-id-form');
			// Убрать active у всех пунктов меню
			for (var j = 0; listBuyName.length > j; j++) {
				listBuyName[j].parentNode.classList.remove('active');
				formBuy[j].classList.remove('active');
				if (formBuy[j].getAttribute('id') == idForm) {
					formBuy[j].classList.add('active');
				}
			}
			// Добавить текущему
			listBuyName[i].parentNode.classList.add('active');
		});
	};

	for (var i = 0; listBuyName.length > i; i++) {
		_loop(i);
	}
}).call();
'use strict';

(function () {

	// Активная ссылка
	var navLink = document.getElementsByClassName('nav__link');
	var btnBurgerHeader = document.getElementById('btn-burger_header');
	for (var i = 0; navLink.length > i; i++) {
		navLink[i].addEventListener('click', function (e) {
			btnBurgerHeader.checked = false;
			for (var j = 0; navLink.length > j; j++) {
				navLink[j].classList.remove('active');
			}
			e.target.classList.add('active');
		});
	}

	// Прокрутка
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

	var itemsNav = document.getElementById('nav-list_header').getElementsByClassName('nav__link');

	for (var _i = 0; itemsNav.length > _i; _i++) {
		itemsNav[_i].addEventListener('click', function (e) {
			var eID = e.target.getAttribute("href").replace(/^#/, "");
			smoothScroll(eID);
		});
	}

	document.getElementById('btn_bye').addEventListener('click', function (e) {
		smoothScroll('buy');
	});
}).call();
"use strict";