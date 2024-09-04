$(document).on('scroll', function () {
  const header = $('.header');
  if ($(window).scrollTop() > 50) {
    header.addClass('scroll');
  } else {
    header.removeClass('scroll');
  }
});
