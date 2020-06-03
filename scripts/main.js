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

// Scroll to specific values
// scrollTo is the same
// window.scroll({
//   top: 2500, 
//   left: 0, 
//   behavior: 'smooth'
// });

// // Scroll certain amounts from current position 
// window.scrollBy({ 
//   top: 100, // could be negative value
//   left: 0, 
//   behavior: 'smooth' 
// });

// // Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({ 
//   behavior: 'smooth' 
// });