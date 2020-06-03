$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var max = 10
    $nav.toggleClass(['scrolled'], $(window).scrollTop() > max);
    if ($(window).scrollTop() > max){
      $('.fixed-top').addClass( "navbar-light");
      $('.fixed-top').removeClass( "navbar-dark");
    }
    else {
      $('.fixed-top').addClass( "navbar-dark");
      $('.fixed-top').removeClass( "navbar-light");
    }
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