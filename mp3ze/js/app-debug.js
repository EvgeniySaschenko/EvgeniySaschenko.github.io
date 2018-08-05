'use strict';

(function () {

	var funTrackInfoBtnPlay = function funTrackInfoBtnPlay() {
		var trackInfoBtnPlay = document.querySelector('#track-info__btn_play .btn__link_toggle');
		trackInfoBtnPlay.addEventListener('DOMSubtreeModified', function () {
			if (trackInfoBtnPlay.innerHTML == 'Пауза') {
				trackInfoBtnPlay.classList.remove('btn__link_play');
				trackInfoBtnPlay.classList.add('btn__link_pause');
				trackInfoBtnPlay.innerHTML = '\u041F\u0430\u0443\u0437\u0430 <i></i>';
			}
			if (trackInfoBtnPlay.innerHTML == 'Слушать онлайн') {
				trackInfoBtnPlay.classList.remove('btn__link_pause');
				trackInfoBtnPlay.classList.add('btn__link_play');
				trackInfoBtnPlay.innerHTML = '\u0421\u043B\u0443\u0448\u0430\u0442\u044C \u043E\u043D\u043B\u0430\u0439\u043D <i></i>';
			}
		});
	};

	try {

		funTrackInfoBtnPlay();
	} catch (err) {

		// обработка ошибки

	}
	document.querySelector('body').addEventListener('DOMNodeInserted', function () {
		if (document.querySelector('body').classList.contains('loading')) {
			funTrackInfoBtnPlay();
		}
	});
})();
'use strict';

(function () {
	// Открыть / закрыть меню

	var funSidebar = function funSidebar() {
		var sidebar__title = document.getElementsByClassName('sidebar__title');
		var sidebar__box = document.getElementsByClassName('sidebar__box');

		for (var i = 0; i < sidebar__title.length; i++) {
			sidebar__title[i].addEventListener('click', function (e) {
				var dataSidebar = e.target.getAttribute('data-sidebar');
				var sidebar__box_curent = document.getElementById(dataSidebar);
				if (dataSidebar) {
					sidebar__box_curent.classList.toggle('active');
					setTimeout(function () {
						sidebar__box_curent.classList.toggle('visible');
					}, 10);
				}
			});
		}
	};

	funSidebar();
	document.querySelector('body').addEventListener('DOMNodeInserted', function () {
		if (document.querySelector('body').classList.contains('loading')) {
			funSidebar();
		}
	});
})();