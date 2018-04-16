(function() {
  $(document).ready(function() {
    $('.calculator .list-options .item').each((function(_this) {
      return function(i, el) {
        var icon;
        icon = $(el).data('icon');
        if (icon) {
          return $(el).addClass('active');
        }
      };
    })(this));
    return $('.calculator .list-options .item').on('click', function() {
      var active;
      active = $(this).hasClass('active');
      if (active) {
        return $(this).removeClass('active');
      } else {
        $(this).addClass('active');
        return $(this).children('.item__icon').addClass('icon-check-white');
      }
    });
  });

}).call(this);

(function() {


}).call(this);

(function() {
  $(document).ready(function() {
    var widthNavList;
    $('.header .nav-toggler').on('click', function() {
      var active;
      active = $(this).parent().hasClass('active');
      if (active) {
        return $(this).parent().removeClass('active');
      } else {
        return $(this).parent().addClass('active');
      }
    });
    $('.nav a').on('click', function() {
      $('.nav a').removeClass('active');
      return $(this).addClass('active');
    });
    $('.header .nav a').on('click', function() {
      var id, top;
      event.preventDefault();
      id = $(this).attr('href');
      top = $(id).offset().top;
      return $('body,html').animate({
        scrollTop: top
      }, 1000);
    });
    widthNavList = function() {
      var winWidth;
      winWidth = $(window).width();
      if (winWidth <= 700) {
        return $('.header .nav-list').css('width', winWidth + 'px');
      }
    };
    $(window).resize(function() {
      return widthNavList();
    });
    return widthNavList();
  });

}).call(this);

(function() {
  $(document).ready(function() {
    $('.title-page').addClass('animated');
    return $('.title-page').waypoint(function(e) {
      return this.element.classList.add('bounceInLeft');
    }, {
      offset: "100%"
    });
  });

}).call(this);
