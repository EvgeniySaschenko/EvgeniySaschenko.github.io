"use strict";!function(){for(var e=document.getElementsByClassName("accordion__item"),t=function(t,i){e[t].addEventListener("click",function(){e[t].classList.toggle("active")})},i=0,n=e.length;n>i;i++)t(i)}(),new Swiper(".advantages_services-inter",{slidesPerView:"auto",spaceBetween:30,loop:!0,breakpoints:{770:{slidesPerView:1,effect:"flip",pagination:{el:".swiper-pagination",dynamicBullets:!0}},1190:{slidesPerView:2,spaceBetween:20,pagination:{el:".swiper-pagination",dynamicBullets:!0}}}}),new Swiper(".brief-article_services",{slidesPerView:"auto",spaceBetween:30,loop:!0,breakpoints:{770:{slidesPerView:1,effect:"flip",pagination:{el:".swiper-pagination",dynamicBullets:!0}},1190:{slidesPerView:2,spaceBetween:20,pagination:{el:".swiper-pagination",dynamicBullets:!0}}}}),function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.getElementById(e),n=t||function(){};i&&i.addEventListener("click",function(){this.classList.toggle("active");var e=this.getAttribute("data-id-control");document.getElementById(e).classList.toggle("active"),n()})}("btn_services-inter",function(){document.querySelector("#video_services-inter .video__iframe").src="https://www.youtube.com/embed/VMKTEyLQYh8?autoplay=1"}),function(){var e,t;e="btn-burger_header",(t=document.getElementById(e))&&t.addEventListener("click",function(){this.classList.toggle("active");var e=this.getAttribute("data-id-control");document.getElementById(e).classList.toggle("active")})}(),$(".drop-down-menu").styler(),$(".form__select").styler({selectSmartPositioning:!1}),function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t||function(){},n=document.querySelectorAll(e),a=0,s=n.length;s>a;a++)n[a].addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),i()})}(".modal__close",function(){document.querySelector("#video_services-inter .video__iframe").src=""}),function(){var e=function(e,t){for(var i=0,n=t.length;n>i;i++)t[i].addEventListener(e,function(e){for(var i=0,n=t.length;n>i;i++)t[i].classList.remove("active");e.target.parentNode.classList.add("active")})},t=document.querySelectorAll(".nav_header .nav__item");e("click",t),e("touch",t)}(),new Swiper(".slider_header",{loop:!0,autoplay:{delay:5e3},preloadImages:!0,lazy:{loadPrevNext:!0}}),function(){for(var e=document.getElementsByClassName("tab__item"),t=function(t,i){e[t].addEventListener("click",function(){var i=e[t].parentNode.querySelector(".tab__item.active");document.getElementById(i.getAttribute("data-id")).classList.remove("active"),i.classList.remove("active"),this.classList.add("active"),document.getElementById(this.getAttribute("data-id")).classList.add("active")}),e[t].addEventListener("touch",function(){var i=e[t].parentNode.querySelector(".tab__item.active");document.getElementById(i.getAttribute("data-id")).classList.remove("active"),i.classList.remove("active"),this.classList.add("active"),document.getElementById(this.getAttribute("data-id")).classList.add("active")})},i=0,n=e.length;n>i;i++)t(i)}(),new Swiper(".tile_clients",{slidesPerView:"auto",spaceBetween:30,loop:!0,breakpoints:{770:{slidesPerView:1,effect:"flip",pagination:{el:".swiper-pagination",dynamicBullets:!0}},990:{slidesPerView:2,effect:"flip",pagination:{el:".swiper-pagination",dynamicBullets:!0}},1190:{slidesPerView:3,spaceBetween:20,pagination:{el:".swiper-pagination",dynamicBullets:!0}}}}),function(e){for(var t=document.querySelectorAll(e),i=0,n=t.length;n>i;i++)t[i].addEventListener("click",function(){document.querySelector(".video").classList.remove("active")})}(".video__close");