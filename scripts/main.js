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


$('#octocat').click(function() {
  if ($('#octocat').css("top") !== "0px") {
    // console.log("isBouncing");
    return;
  }
  // console.log($('#octocat').css("top"));
  bounce($('#octocat'));
})
function bounce(thing) {
  var interval = 100;
  var distance = 20;
  var times = 6;
  var damping = 0.8;

  for (var i = 0; i < (times + 1); i++) {
    var amt = Math.pow(-1, i) * distance / (i * damping);
    $(thing).animate({
      top: amt
    }, 100);
  }
  $(thing).animate({
    top: 0
  }, interval);
}
