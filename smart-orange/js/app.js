"use strict";var ajax=function(e,t,o){var n=o||function(){},s=new XMLHttpRequest;return s.open("POST",e,!1),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(t),(s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){if(""!=s.responseText)return n(s.responseText)}else console.log("err")})()};function currentYPosition(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function elmYPosition(e){for(var t=document.getElementById(e),o=t.offsetTop,n=t;n.offsetParent&&n.offsetParent!=document.body;)o+=(n=n.offsetParent).offsetTop;return o}function smoothScroll(e){var t=currentYPosition(),o=elmYPosition(e),n=o>t?o-t:t-o;if(n<100)scrollTo(0,o);else{var s=Math.round(n/100);s>=20&&(s=20);var c=Math.round(n/25),r=o>t?t+c:t-c,i=0;if(o>t)for(var a=t;a<o;a+=c)setTimeout("window.scrollTo(0, "+r+")",i*s),(r+=c)>o&&(r=o),i++;else for(a=t;a>o;a-=c)setTimeout("window.scrollTo(0, "+r+")",i*s),(r-=c)<o&&(r=o),i++}}!function(){var e=function(e){var t=document.getElementById(e);t&&(t.addEventListener("click",function(){this.classList.toggle("active");var e=this.getAttribute("data-id-control");document.getElementById(e).classList.toggle("active")}),t.addEventListener("touch",function(){this.classList.toggle("active");var e=this.getAttribute("data-id-control");document.getElementById(e).classList.toggle("active")}))};e("btn_sider-1"),e("btn_sider-2"),e("btn_sider-3"),e("btn_sider-4")}(),function(e){for(var t=document.querySelectorAll(e),o=0,n=t.length;n>o;o++)t[o].addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active")}),t[o].addEventListener("touch",function(){document.querySelector(".modal.active").classList.remove("active")})}(".modal__close"),new Swiper(".swiper-container",{autoplay:{delay:5e3}}),function(){var e=document.querySelector(".team");e.classList.add("animated");new Waypoint({element:e,handler:function(){this.element.classList.add("bounceInLeft")},offset:"100%"})}();