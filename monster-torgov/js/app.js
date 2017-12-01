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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiLCJuYXYvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdGVzdCIsImZ1bmN0aW9uIGN1cnJlbnRZUG9zaXRpb24oKSB7XHJcblx0Ly8gRmlyZWZveCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXHJcblx0aWYgKHNlbGYucGFnZVlPZmZzZXQpIHJldHVybiBzZWxmLnBhZ2VZT2Zmc2V0O1xyXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIDYgLSBzdGFuZGFyZHMgbW9kZVxyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcClcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgNiwgNyBhbmQgOFxyXG5cdGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdHJldHVybiAwO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZWxtWVBvc2l0aW9uKGVJRCkge1xyXG5cdHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlSUQpO1xyXG5cdHZhciB5ID0gZWxtLm9mZnNldFRvcDtcclxuXHR2YXIgbm9kZSA9IGVsbTtcclxuXHR3aGlsZSAobm9kZS5vZmZzZXRQYXJlbnQgJiYgbm9kZS5vZmZzZXRQYXJlbnQgIT0gZG9jdW1lbnQuYm9keSkge1xyXG5cdFx0XHRub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XHJcblx0XHRcdHkgKz0gbm9kZS5vZmZzZXRUb3A7XHJcblx0fSByZXR1cm4geTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNtb290aFNjcm9sbChlSUQpIHtcclxuXHR2YXIgc3RhcnRZID0gY3VycmVudFlQb3NpdGlvbigpO1xyXG5cdHZhciBzdG9wWSA9IGVsbVlQb3NpdGlvbihlSUQpO1xyXG5cdHZhciBkaXN0YW5jZSA9IHN0b3BZID4gc3RhcnRZID8gc3RvcFkgLSBzdGFydFkgOiBzdGFydFkgLSBzdG9wWTtcclxuXHRpZiAoZGlzdGFuY2UgPCAxMDApIHtcclxuXHRcdFx0c2Nyb2xsVG8oMCwgc3RvcFkpOyByZXR1cm47XHJcblx0fVxyXG5cdHZhciBzcGVlZCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAxMDApO1xyXG5cdGlmIChzcGVlZCA+PSAyMCkgc3BlZWQgPSAyMDtcclxuXHR2YXIgc3RlcCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAyNSk7XHJcblx0dmFyIGxlYXBZID0gc3RvcFkgPiBzdGFydFkgPyBzdGFydFkgKyBzdGVwIDogc3RhcnRZIC0gc3RlcDtcclxuXHR2YXIgdGltZXIgPSAwO1xyXG5cdGlmIChzdG9wWSA+IHN0YXJ0WSkge1xyXG5cdFx0XHRmb3IgKCB2YXIgaT1zdGFydFk7IGk8c3RvcFk7IGkrPXN0ZXAgKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KFwid2luZG93LnNjcm9sbFRvKDAsIFwiK2xlYXBZK1wiKVwiLCB0aW1lciAqIHNwZWVkKTtcclxuXHRcdFx0XHRcdGxlYXBZICs9IHN0ZXA7IGlmIChsZWFwWSA+IHN0b3BZKSBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xyXG5cdFx0XHR9IHJldHVybjtcclxuXHR9XHJcblx0Zm9yICggdmFyIGk9c3RhcnRZOyBpPnN0b3BZOyBpLT1zdGVwICkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KFwid2luZG93LnNjcm9sbFRvKDAsIFwiK2xlYXBZK1wiKVwiLCB0aW1lciAqIHNwZWVkKTtcclxuXHRcdFx0bGVhcFkgLT0gc3RlcDsgaWYgKGxlYXBZIDwgc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XHJcblx0fVxyXG59XHJcblxyXG5sZXQgaXRlbXNOYXY9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtbGlzdF9oZWFkZXInKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZfX2xpbmsnKTtcclxuXHJcbmZvcihsZXQgaT0gMDsgaXRlbXNOYXYubGVuZ3RoID4gaTsgaSsrKXtcclxuXHRpdGVtc05hdltpXS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0bGV0IGVJRD0gZS50YXJnZXRcclxuXHRcdFx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxyXG5cdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9eIy8sIFwiXCIpO1xyXG5cdFx0c21vb3RoU2Nyb2xsKCBlSUQgKTtcclxuXHR9KTtcclxufSJdfQ==
