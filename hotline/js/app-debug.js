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
	toggleBtn('btn_burger-header');
	toggleBtn('btn_sidebar-left');
	toggleBtn('btn_sidebar-left-close');
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
	var btn_nextRegistration = document.getElementById('btn_next-registration');
	btn_nextRegistration.addEventListener('click', function (e) {
		e.preventDefault();
		var form = document.getElementById('registration');
		var action = form.getAttribute('action');
		var data = new FormData(form);
		axios({
			method: 'post',
			url: action,
			data: data,
			config: { headers: { 'Content-Type': 'multipart/form-data' } }
		}).then(function (res) {
			console.log(res);
		}).catch(function (err) {
			console.log(err);
		});
	});
})();