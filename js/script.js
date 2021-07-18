$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 400;
		var offset = 100;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - offset;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });

  $(window).scroll(function() {
    $('.animation').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + windowHeight / 3 && !$(this).hasClass("active")) {
        $(this).addClass("active");
        $('.big-avatar').addClass("active");
      }
    });
  });
});
