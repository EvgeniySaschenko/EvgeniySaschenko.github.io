"use strict";!function(){var e=function(){var e=document.querySelector("#track-info__btn_play .btn__link_toggle");e.addEventListener("DOMSubtreeModified",function(){"Пауза"==e.innerHTML&&(e.classList.remove("btn__link_play"),e.classList.add("btn__link_pause"),e.innerHTML="Пауза <i></i>"),"Слушать онлайн"==e.innerHTML&&(e.classList.remove("btn__link_pause"),e.classList.add("btn__link_play"),e.innerHTML="Слушать онлайн <i></i>")})};try{e()}catch(e){}document.querySelector("body").addEventListener("DOMNodeInserted",function(){document.querySelector("body").classList.contains("loading")&&e()})}(),function(){var e=function(){for(var e=document.getElementsByClassName("sidebar__title"),t=(document.getElementsByClassName("sidebar__box"),0);t<e.length;t++)e[t].addEventListener("click",function(e){var t=e.target.getAttribute("data-sidebar"),n=document.getElementById(t);t&&(n.classList.toggle("active"),setTimeout(function(){n.classList.toggle("visible")},10))})};e(),document.querySelector("body").addEventListener("DOMNodeInserted",function(){document.querySelector("body").classList.contains("loading")&&e()})}();