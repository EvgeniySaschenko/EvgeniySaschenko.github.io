'use strict';

(function () {
	var showContacts_phone = document.querySelectorAll('.show-contacts_phone');
	var funShowContacts_phone = function funShowContacts_phone(event) {
		for (var i = 0; showContacts_phone.length > i; i++) {
			showContacts_phone[i].addEventListener(event, function (e) {
				e.target.parentNode.classList.toggle('active');
			});
		}
	};

	funShowContacts_phone('click');
	funShowContacts_phone('touch');
})();
'use strict';

(function () {
	var listNews = document.querySelector('.list-news');

	listNews.classList.add('animated');
	var waypoint = new Waypoint({
		element: listNews,
		handler: function handler(direction) {
			this.element.classList.add('slideInUp');
		},
		offset: '70%'
	});
})();
'use strict';

(function () {
	var listProductType__icon = document.querySelectorAll('.list-product-type__icon');

	for (var i = 0; listProductType__icon.length > i; i++) {
		listProductType__icon[i].classList.add('animated');

		var waypoint = new Waypoint({
			element: listProductType__icon[i],
			handler: function handler(direction) {
				this.element.classList.add('flipInX');
				this.element.classList.add('visible');
			},
			offset: '50%'
		});
	}
})();
'use strict';

(function () {
	var nav__item = document.querySelectorAll('.nav_header .nav__item');

	var funActiveNav__item = function funActiveNav__item(event) {
		for (var i = 0; nav__item.length > i; i++) {
			nav__item[i].addEventListener(event, function (e) {
				for (var j = 0; nav__item.length > j; j++) {
					nav__item[j].classList.remove('active');
				}
				e.target.parentNode.classList.add('active');
			});
		}
	};

	funActiveNav__item('click');
	funActiveNav__item('touch');

	document.getElementById('nav__btn-burger_header').addEventListener('click', function () {
		document.getElementById('nav-list_header').classList.toggle('active');
	});
})();