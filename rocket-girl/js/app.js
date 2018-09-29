'use strict';

(function () {
	// let audio= new Audio();
	// audio.load();
	// audio.src= 'sound.mp3';
	// audio.type='audio/mpeg';
	// audio.play();


	window.addEventListener('load', function () {
		var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		var source = audioCtx.createBufferSource();
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'sound.mp3');
		xhr.responseType = 'arraybuffer';
		xhr.addEventListener('load', function (r) {
			audioCtx.decodeAudioData(xhr.response, function (buffer) {
				source.buffer = buffer;
				source.connect(audioCtx.destination);
				source.loop = false;
			});
			source.start(0);
		});
		xhr.send();
	});
})();
"use strict";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Daria";
var myName2 = "Happy Birthday";
var letterColors = [red, orange, green, blue, purple];
var bubbleShape;
if (10 < 3) {
    bubbleShape = 'square';
} else {
    bubbleShape = 'circle';
}

textBubbles(myName, letterColors, $("#felicitation_1"), 200, 1000);
textBubbles(myName2, letterColors, $("#felicitation_2"), 250, 1100);
"use strict";

particlesJS("cosmos", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.8,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGlvL2F1ZGlvLmpzIiwiZmVsaWNpdGF0aW9uL2ZlbGljaXRhdGlvbi5qcyIsInNwYWNlL3NwYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0Ly8gbGV0IGF1ZGlvPSBuZXcgQXVkaW8oKTtcblx0Ly8gYXVkaW8ubG9hZCgpO1xuXHQvLyBhdWRpby5zcmM9ICdzb3VuZC5tcDMnO1xuXHQvLyBhdWRpby50eXBlPSdhdWRpby9tcGVnJztcblx0Ly8gYXVkaW8ucGxheSgpO1xuXG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGF1ZGlvQ3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG5cdFx0dmFyIHNvdXJjZSA9IGF1ZGlvQ3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHR4aHIub3BlbignR0VUJywgJ3NvdW5kLm1wMycpO1xuXHRcdHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKHIpIHtcblx0XHRcdGF1ZGlvQ3R4LmRlY29kZUF1ZGlvRGF0YSh4aHIucmVzcG9uc2UsIGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdFx0c291cmNlLmJ1ZmZlciA9IGJ1ZmZlcjtcblx0XHRcdFx0c291cmNlLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdFx0XHRzb3VyY2UubG9vcCA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHRzb3VyY2Uuc3RhcnQoMCk7XG5cdFx0fSk7XG5cdFx0eGhyLnNlbmQoKTtcblx0fSk7XG59KSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcmVkID0gWzAsIDEwMCwgNjNdO1xudmFyIG9yYW5nZSA9IFs0MCwgMTAwLCA2MF07XG52YXIgZ3JlZW4gPSBbNzUsIDEwMCwgNDBdO1xudmFyIGJsdWUgPSBbMTk2LCA3NywgNTVdO1xudmFyIHB1cnBsZSA9IFsyODAsIDUwLCA2MF07XG5cbnZhciBteU5hbWUgPSBcIkRhcmlhXCI7XG52YXIgbXlOYW1lMiA9IFwiSGFwcHkgQmlydGhkYXlcIjtcbnZhciBsZXR0ZXJDb2xvcnMgPSBbcmVkLCBvcmFuZ2UsIGdyZWVuLCBibHVlLCBwdXJwbGVdO1xudmFyIGJ1YmJsZVNoYXBlO1xuaWYgKDEwIDwgMykge1xuICAgIGJ1YmJsZVNoYXBlID0gJ3NxdWFyZSc7XG59IGVsc2Uge1xuICAgIGJ1YmJsZVNoYXBlID0gJ2NpcmNsZSc7XG59XG5cbnRleHRCdWJibGVzKG15TmFtZSwgbGV0dGVyQ29sb3JzLCAkKFwiI2ZlbGljaXRhdGlvbl8xXCIpLCAyMDAsIDEwMDApO1xudGV4dEJ1YmJsZXMobXlOYW1lMiwgbGV0dGVyQ29sb3JzLCAkKFwiI2ZlbGljaXRhdGlvbl8yXCIpLCAyNTAsIDExMDApOyIsIlwidXNlIHN0cmljdFwiO1xuXG5wYXJ0aWNsZXNKUyhcImNvc21vc1wiLCB7XG4gIFwicGFydGljbGVzXCI6IHtcbiAgICBcIm51bWJlclwiOiB7XG4gICAgICBcInZhbHVlXCI6IDM1NSxcbiAgICAgIFwiZGVuc2l0eVwiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwidmFsdWVfYXJlYVwiOiA3ODkuMTQ3NjQxNjMyMjcyN1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcInZhbHVlXCI6IFwiI2ZmZmZmZlwiXG4gICAgfSxcbiAgICBcInNoYXBlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxuICAgICAgXCJzdHJva2VcIjoge1xuICAgICAgICBcIndpZHRoXCI6IDAsXG4gICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgICAgIH0sXG4gICAgICBcInBvbHlnb25cIjoge1xuICAgICAgICBcIm5iX3NpZGVzXCI6IDVcbiAgICAgIH0sXG4gICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJpbWcvZ2l0aHViLnN2Z1wiLFxuICAgICAgICBcIndpZHRoXCI6IDEwMCxcbiAgICAgICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICB9XG4gICAgfSxcbiAgICBcIm9wYWNpdHlcIjoge1xuICAgICAgXCJ2YWx1ZVwiOiAwLjQ4OTI3MTUzNzgxMjAwOTA1LFxuICAgICAgXCJyYW5kb21cIjogZmFsc2UsXG4gICAgICBcImFuaW1cIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcInNwZWVkXCI6IDAuOCxcbiAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLFxuICAgICAgICBcInN5bmNcIjogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICBcInZhbHVlXCI6IDIsXG4gICAgICBcInJhbmRvbVwiOiB0cnVlLFxuICAgICAgXCJhbmltXCI6IHtcbiAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJzcGVlZFwiOiAyLFxuICAgICAgICBcInNpemVfbWluXCI6IDAsXG4gICAgICAgIFwic3luY1wiOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgIFwiZGlzdGFuY2VcIjogMTUwLFxuICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIFwib3BhY2l0eVwiOiAwLjQsXG4gICAgICBcIndpZHRoXCI6IDFcbiAgICB9LFxuICAgIFwibW92ZVwiOiB7XG4gICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgXCJzcGVlZFwiOiAwLjIsXG4gICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcbiAgICAgIFwicmFuZG9tXCI6IHRydWUsXG4gICAgICBcInN0cmFpZ2h0XCI6IGZhbHNlLFxuICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxuICAgICAgXCJib3VuY2VcIjogZmFsc2UsXG4gICAgICBcImF0dHJhY3RcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcbiAgICAgICAgXCJyb3RhdGVZXCI6IDEyMDBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiaW50ZXJhY3Rpdml0eVwiOiB7XG4gICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcbiAgICBcImV2ZW50c1wiOiB7XG4gICAgICBcIm9uaG92ZXJcIjoge1xuICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm1vZGVcIjogXCJidWJibGVcIlxuICAgICAgfSxcbiAgICAgIFwib25jbGlja1wiOiB7XG4gICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXG4gICAgICAgIFwibW9kZVwiOiBcInB1c2hcIlxuICAgICAgfSxcbiAgICAgIFwicmVzaXplXCI6IHRydWVcbiAgICB9LFxuICAgIFwibW9kZXNcIjoge1xuICAgICAgXCJncmFiXCI6IHtcbiAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXG4gICAgICAgIFwibGluZV9saW5rZWRcIjoge1xuICAgICAgICAgIFwib3BhY2l0eVwiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJ1YmJsZVwiOiB7XG4gICAgICAgIFwiZGlzdGFuY2VcIjogODMuOTE2MDgzOTE2MDgzOTIsXG4gICAgICAgIFwic2l6ZVwiOiAxLFxuICAgICAgICBcImR1cmF0aW9uXCI6IDMsXG4gICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICBcInNwZWVkXCI6IDNcbiAgICAgIH0sXG4gICAgICBcInJlcHVsc2VcIjoge1xuICAgICAgICBcImRpc3RhbmNlXCI6IDIwMCxcbiAgICAgICAgXCJkdXJhdGlvblwiOiAwLjRcbiAgICAgIH0sXG4gICAgICBcInB1c2hcIjoge1xuICAgICAgICBcInBhcnRpY2xlc19uYlwiOiA0XG4gICAgICB9LFxuICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICBcInBhcnRpY2xlc19uYlwiOiAyXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInJldGluYV9kZXRlY3RcIjogdHJ1ZVxufSk7Il19
