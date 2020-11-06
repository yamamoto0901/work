document.addEventListener('DOMContentLoaded',function(){
document.getElementById("menuButton").addEventListener("click", function() {
  this.classList.toggle("active");
})
});

$(function() {
  $(window).scroll(function() {
    $(".fadein,.fadein2,.fadein3").each(function() {
      var elementTop = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elementTop - windowHeight + 100) {
        $(this).addClass("scrollin");
      }
    });
  });
});

