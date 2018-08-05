"use strict";!function(){var t;try{t="btn_form-add-comment",document.getElementById(t).addEventListener("click",function(){this.classList.toggle("active");var t=this.getAttribute("data-id-control");document.getElementById(t).classList.toggle("active")}),document.getElementById(t).addEventListener("touch",function(){this.classList.toggle("active");var t=this.getAttribute("data-id-control");document.getElementById(t).classList.toggle("active")})}catch(t){}}(),function(){var t=function(t,e){document.getElementById(t).addEventListener("click",function(){document.getElementById(e).classList.add("active")})};t("btn_modal-send-order-1","modal_send-order"),t("btn_modal-send-order-2","modal_send-order"),t("btn_modal-send-order-3","modal_send-order")}(),$("#form_modal-send-order, #form_callback").on("submit",function(t){var e=void 0;e="en"==$(this).data("lang")?"Thank you for your application! Our operator will contact you shortly.":"Спасибо за заявку! Наш оператор с Вами скоро свяжется.";var a=$(this);t.preventDefault(),$.ajax({type:"POST",url:"vendor/php_mailer/mail.php",data:a.serialize()}).done(function(){alert(e)}),$(this)[0].reset()}),function(){var t,e=document.getElementById("form__btn_add-comment");e&&e.addEventListener("click",function(t){var e=document.getElementById("form_add-comment"),a=e.querySelector(".form__textarea"),i=e.querySelector(".form__field_name"),n=e.querySelector(".form__field_last-name"),s=e.querySelector(".form__file_upload").files[0],r=e.querySelector(".form__rating-item-checkbox:checked");if(""!=a.value&&s){t.preventDefault();var o=new FileReader,c=void 0,l=localStorage.getItem("reviews");o.onloadend=function(){c=o.result,l?(l+=',{"id" : "'+Date.now()+'", "imgAvatar" : "'+c+'", "name" : "'+i.value+'", "lastName" : "'+n.value+'", "comment" : "'+a.value+'", "date" : "'+moment().format("MMMM DD")+'", "rating" : "'+r.value+'"}',localStorage.setItem("reviews",l)):localStorage.setItem("reviews",'{ "id" : "'+Date.now()+'", "imgAvatar" : "'+c+'", "name" : "'+i.value+'", "lastName" : "'+n.value+'", "comment" : "'+a.value+'", "date" : "'+moment().format("MMMM DD")+'", "rating" : "'+r.value+'" }');var t='<div class="reviews__item">\n\t\t\t\t\t\t<div class="reviews__box-avatar">\n\t\t\t\t\t\t<img class="reviews__img reviews__img_avatar" src="'+c+'" alt="" role="presentation">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="reviews__box-comment">\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_1">\n\t\t\t\t\t\t\t\t<span class="reviews__name">'+i.value+" "+n.value+'</span><span class="reviews__date">'+moment().format("MMMM DD")+'</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_2">\n\t\t\t\t\t\t\t\t<div class="reviews__rating">\n\t\t\t\t\t\t\t\t\t<i class="icon icon-star"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon '+(r.value<2?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon '+(r.value<3?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon '+(r.value<4?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t\t\t<i class="icon '+(r.value<5?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_3">\n\t\t\t\t\t\t\t\t<p class="reviews__text">'+a.value+"</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>";document.querySelector(".reviews").insertAdjacentHTML("afterBegin",t),a.value="",i.value="",n.value=""},s&&o.readAsDataURL(s)}}),t=void 0,localStorage.reviews&&(JSON.parse("["+localStorage.reviews+"]").reverse().map(function(e){t+='<div class="reviews__item">\n\t\t\t\t\t\t<div class="reviews__box-avatar">\n\t\t\t\t\t\t<img class="reviews__img reviews__img_avatar" src="'+e.imgAvatar+'" alt="" role="presentation">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="reviews__box-comment">\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_1"><span class="reviews__name">'+e.name+" "+e.lastName+'</span><span class="reviews__date">'+e.date+'</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="reviews__row reviews__row_2">\n\t\t\t\t\t\t\t<div class="reviews__rating">\n\t\t\t\t\t\t\t\t<i class="icon icon-star"></i>\n\t\t\t\t\t\t\t\t<i class="icon '+(e.rating<2?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t\t<i class="icon '+(e.rating<3?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t\t<i class="icon '+(e.rating<4?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t\t<i class="icon '+(e.rating<5?"icon-star-not-active":"icon-star")+'"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="reviews__row reviews__row_3">\n\t\t\t\t\t\t\t\t<p class="reviews__text">'+e.comment+"</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>"}),document.querySelector(".reviews")&&document.querySelector(".reviews").insertAdjacentHTML("afterBegin",t.replace("undefined","")))}(),setTimeout(function(){$(".form__select").styler()},100),function(){var t=function(t,e){for(var a=0,i=e.length;i>a;a++)e[a].addEventListener(t,function(t){for(var a=0,i=e.length;i>a;a++)e[a].classList.remove("active");t.target.parentNode.classList.add("active")})},e=document.querySelectorAll(".nav_header .nav__item");t("click",e),t("touch",e)}(),function(){var t=function(t,e){for(var a=document.querySelectorAll(e),i=0,n=a.length;n>i;i++)a[i].addEventListener(t,function(){document.querySelector(".modal.active").classList.remove("active")})};t("click",".modal__close"),t("touch",".modal__close"),t("click",".form__modal-close"),t("touch",".form__modal-close")}(),new Swiper(".slider_top",{slidesPerView:4,loop:!0,pagination:{el:".slider__pagination",clickable:!0},autoplay:{delay:5e3},breakpoints:{1200:{slidesPerView:3},720:{slidesPerView:2},540:{slidesPerView:1}}}),function(){for(var t=document.getElementsByClassName("tab__item"),e=function(e,a){t[e].addEventListener("click",function(){var a=t[e].parentNode.querySelector(".tab__item.active");document.getElementById(a.getAttribute("data-id")).classList.remove("active"),a.classList.remove("active"),this.classList.add("active"),document.getElementById(this.getAttribute("data-id")).classList.add("active")}),t[e].addEventListener("touch",function(){var a=t[e].parentNode.querySelector(".tab__item.active");document.getElementById(a.getAttribute("data-id")).classList.remove("active"),a.classList.remove("active"),this.classList.add("active"),document.getElementById(this.getAttribute("data-id")).classList.add("active")})},a=0,i=t.length;i>a;a++)e(a)}();