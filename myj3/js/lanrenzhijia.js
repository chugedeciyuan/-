$(document).ready(function () {


  $(".list-group a").click(function () {
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");

    if ($(this).index() == 0) {
      $(".musicBox").css('background-image',"url(img/tx1.jpg)");
      $("#myaudio").attr('src', "mp3/可念不可说.mp3");
      bofang();
    } else if ($(this).index() == 1) {
      $(".musicBox").css('background-image',"url(img/tx2.jpeg)");
      $("#myaudio").attr('src', "mp3/许愿.mp3");
      bofang();
    } else if ($(this).index() == 2) {
      $(".musicBox").css('background-image',"url(img/tx3.jpeg)");
      $("#myaudio").attr('src', "mp3/故梦.mp3");
      bofang();
    } else if ($(this).index() == 3) {
      $(".musicBox").css('background-image',"url(img/tx4.jpeg)");
      $("#myaudio").attr('src', "mp3/我的一个道姑朋友.mp3");
      bofang();
    } else if ($(this).index() == 4) {
      $(".musicBox").css('background-image',"url(img/tx5.jpeg)");
      $("#myaudio").attr('src', "mp3/眉间雪.mp3");
      bofang();
    }
  })
  var mark = 1;
  $("#myaudio").hide();
  $('#palyp3 span').click(function () {
    bofang();
  })

  function bofang() {
    if (mark == 1) {
      $("#palyp3 span").removeClass("glyphicon-play");
      $("#palyp3 span").addClass("glyphicon-pause");
      mark = 2;
      $("#myaudio")[0].play();
    } else if (mark == 2) {
      $("#palyp3 span").removeClass("glyphicon-pause");
      $("#palyp3 span").addClass("glyphicon-play");
      mark = 1;
      $("#myaudio")[0].pause();

    }

  }

});