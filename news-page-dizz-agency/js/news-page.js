(function(){$(document).ready(function(){return $(".nav .toggler").on("click",function(){var a;return a=$(this).parent().hasClass("active"),a?$(this).parent().removeClass("active"):$(this).parent().addClass("active")}),$(".nav .menu__item").on("click",function(){return $(".nav .menu__item").removeClass("active"),$(this).addClass("active")})})}).call(this),function(){$(document).ready(function(){return $(".header .link-img_feedback").on("click",function(){return $(".modal-feadback").removeClass("close"),$(".modal-feadback").addClass("active")}),$(".modal-feadback__close").on("click",function(){return $(".modal-feadback").removeClass("active"),$(".modal-feadback").addClass("close")})})}.call(this);