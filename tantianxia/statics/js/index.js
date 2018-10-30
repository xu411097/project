let target = 0;
$(".b_nav li").click(function () {
  target = $(this).index();
  $(".nav_mask ul li").eq(target).addClass("active").siblings().removeClass("active");
  $(".nbanner ul li").eq(target).addClass("active").siblings().removeClass("active");
})
window.onload = function () {
  $('.menu-btn').click(function () {
    if ($('.menu').hasClass('active')) {
      $('.menu').removeClass('active')
      $(this).removeClass('active')
    } else {
      $('.menu').addClass('active')
      $(this).addClass('active')
    }
  })

  $(".case ul li").click(function(){
    $.post("/shuwon_hits/",{id:$(this).attr("data-id")},function(){})
  })
}
