$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass(['scrolled'], $(window).scrollTop() > 100);
    if ($(window).scrollTop() > 100){
      $('.fixed-top').addClass( "navbar-light");
      $('.fixed-top').removeClass( "navbar-dark");
    }
    else {
      $('.fixed-top').addClass( "navbar-dark");
      $('.fixed-top').removeClass( "navbar-light");
    }
    // if ($(this).scrollTop() > $nav.height()) {
    //   $nav.removeClass('navbar-dark').addClass('navbar-light')
    // }
    // else {
    //   $nav.removeClass('navbar-light').addClass('navbar-dark')
    // }
    // $nav.toggleClass(['scrolled', 'navbar-light'], $(this).scrollTop() > $nav.height());

  });
});