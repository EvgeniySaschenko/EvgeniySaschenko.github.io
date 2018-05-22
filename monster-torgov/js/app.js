//test
function currentYPosition() {
	// Firefox, Chrome, Opera, Safari
	if (self.pageYOffset) return self.pageYOffset;
	// Internet Explorer 6 - standards mode
	if (document.documentElement && document.documentElement.scrollTop)
			return document.documentElement.scrollTop;
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
	} return y;
}


function smoothScroll(eID) {
	var startY = currentYPosition();
	var stopY = elmYPosition(eID);
	var distance = stopY > startY ? stopY - startY : startY - stopY;
	if (distance < 100) {
			scrollTo(0, stopY); return;
	}
	var speed = Math.round(distance / 100);
	if (speed >= 20) speed = 20;
	var step = Math.round(distance / 25);
	var leapY = stopY > startY ? startY + step : startY - step;
	var timer = 0;
	if (stopY > startY) {
			for ( var i=startY; i<stopY; i+=step ) {
					setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
					leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
	}
	for ( var i=startY; i>stopY; i-=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	}
}

let itemsNav= document.getElementById('nav-list_header').getElementsByClassName('nav__link');

for(let i= 0; itemsNav.length > i; i++){
	itemsNav[i].addEventListener( 'click', (e) => {
		let eID= e.target
							.getAttribute("href")
							.replace(/^#/, "");
		smoothScroll( eID );
	});
}
(function(){
		$('.section__right').addClass('animated');
		$('.list-advantages').addClass('animated');
		$('.section_about-site .section__right').removeClass('animated');
		$('.section__right').waypoint(function(){
			this.element.classList.add('fadeIn');
		},{offset: "100%"});

		$('.list-advantages').waypoint(function(){
			this.element.classList.add('bounceInLeft');
		},{offset: "100%"});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiLCJuYXYvbmF2LmpzIiwic2VjdGlvbi9zZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3Rlc3QiLCJmdW5jdGlvbiBjdXJyZW50WVBvc2l0aW9uKCkge1xyXG5cdC8vIEZpcmVmb3gsIENocm9tZSwgT3BlcmEsIFNhZmFyaVxyXG5cdGlmIChzZWxmLnBhZ2VZT2Zmc2V0KSByZXR1cm4gc2VsZi5wYWdlWU9mZnNldDtcclxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciA2IC0gc3RhbmRhcmRzIG1vZGVcclxuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXHJcblx0XHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIDYsIDcgYW5kIDhcclxuXHRpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRyZXR1cm4gMDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGVsbVlQb3NpdGlvbihlSUQpIHtcclxuXHR2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcclxuXHR2YXIgeSA9IGVsbS5vZmZzZXRUb3A7XHJcblx0dmFyIG5vZGUgPSBlbG07XHJcblx0d2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcclxuXHRcdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xyXG5cdFx0XHR5ICs9IG5vZGUub2Zmc2V0VG9wO1xyXG5cdH0gcmV0dXJuIHk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzbW9vdGhTY3JvbGwoZUlEKSB7XHJcblx0dmFyIHN0YXJ0WSA9IGN1cnJlbnRZUG9zaXRpb24oKTtcclxuXHR2YXIgc3RvcFkgPSBlbG1ZUG9zaXRpb24oZUlEKTtcclxuXHR2YXIgZGlzdGFuY2UgPSBzdG9wWSA+IHN0YXJ0WSA/IHN0b3BZIC0gc3RhcnRZIDogc3RhcnRZIC0gc3RvcFk7XHJcblx0aWYgKGRpc3RhbmNlIDwgMTAwKSB7XHJcblx0XHRcdHNjcm9sbFRvKDAsIHN0b3BZKTsgcmV0dXJuO1xyXG5cdH1cclxuXHR2YXIgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcclxuXHRpZiAoc3BlZWQgPj0gMjApIHNwZWVkID0gMjA7XHJcblx0dmFyIHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMjUpO1xyXG5cdHZhciBsZWFwWSA9IHN0b3BZID4gc3RhcnRZID8gc3RhcnRZICsgc3RlcCA6IHN0YXJ0WSAtIHN0ZXA7XHJcblx0dmFyIHRpbWVyID0gMDtcclxuXHRpZiAoc3RvcFkgPiBzdGFydFkpIHtcclxuXHRcdFx0Zm9yICggdmFyIGk9c3RhcnRZOyBpPHN0b3BZOyBpKz1zdGVwICkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIitsZWFwWStcIilcIiwgdGltZXIgKiBzcGVlZCk7XHJcblx0XHRcdFx0XHRsZWFwWSArPSBzdGVwOyBpZiAobGVhcFkgPiBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcclxuXHRcdFx0fSByZXR1cm47XHJcblx0fVxyXG5cdGZvciAoIHZhciBpPXN0YXJ0WTsgaT5zdG9wWTsgaS09c3RlcCApIHtcclxuXHRcdFx0c2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIitsZWFwWStcIilcIiwgdGltZXIgKiBzcGVlZCk7XHJcblx0XHRcdGxlYXBZIC09IHN0ZXA7IGlmIChsZWFwWSA8IHN0b3BZKSBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xyXG5cdH1cclxufVxyXG5cclxubGV0IGl0ZW1zTmF2PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWxpc3RfaGVhZGVyJykuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2X19saW5rJyk7XHJcblxyXG5mb3IobGV0IGk9IDA7IGl0ZW1zTmF2Lmxlbmd0aCA+IGk7IGkrKyl7XHJcblx0aXRlbXNOYXZbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdGxldCBlSUQ9IGUudGFyZ2V0XHJcblx0XHRcdFx0XHRcdFx0LmdldEF0dHJpYnV0ZShcImhyZWZcIilcclxuXHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXiMvLCBcIlwiKTtcclxuXHRcdHNtb290aFNjcm9sbCggZUlEICk7XHJcblx0fSk7XHJcbn0iLCIoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5zZWN0aW9uX19yaWdodCcpLmFkZENsYXNzKCdhbmltYXRlZCcpO1xyXG5cdFx0JCgnLmxpc3QtYWR2YW50YWdlcycpLmFkZENsYXNzKCdhbmltYXRlZCcpO1xyXG5cdFx0JCgnLnNlY3Rpb25fYWJvdXQtc2l0ZSAuc2VjdGlvbl9fcmlnaHQnKS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQnKTtcclxuXHRcdCQoJy5zZWN0aW9uX19yaWdodCcpLndheXBvaW50KGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcclxuXHRcdH0se29mZnNldDogXCIxMDAlXCJ9KTtcclxuXHJcblx0XHQkKCcubGlzdC1hZHZhbnRhZ2VzJykud2F5cG9pbnQoZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JvdW5jZUluTGVmdCcpO1xyXG5cdFx0fSx7b2Zmc2V0OiBcIjEwMCVcIn0pO1xyXG59KSgpOyJdfQ==
