var i = 0;
var index = 0;
var divplay = document.querySelector(".play");
var play = document.querySelector(".fa-play");
var pause = document.querySelector(".fa-pause");
var eject = document.querySelector(".eject");
var faPlay = document.querySelectorAll("i")[1];
var img = document.querySelector("img");
var audio = document.querySelector("audio");
//点击进度条
$(".stage .loading").click(function(e) {
  // console.log((e.offsetX / 195) * 100 + "%");
  audio.currentTime = (e.offsetX / 195) * audio.duration;
});
//点击音量条
$(".stage .volume").click(function(e) {
  // console.log((1-(e.offsetY/55 ) ));
  var x = e.offsetY / 55;
  audio.volume = 1 - e.offsetY / 55;
  $(".volume div.box2").css("top", x * 100 + "%");
  $(".volume span").css("top", x * 100 + "%");
});
//播放
$(".fa-play").click(function(e) {
  audio.play();
  eject.classList.add("active");
});
//暂停
$(".fa-pause")
  .click(function(e) {
    audio.pause();
    $(this).fadeOut();
    $(".fa-play").fadeIn();
    eject.classList.remove("active");
  })
  .fadeOut();
//上一首
$(".prev").click(function(e) {
  index--;
  if (index < 0) {
    index = $("li").length - 1;
  }
  attr();
});
//下一首
$(".next").click(function(e) {
  index++;
  if (index >= $("li").length) {
    index = 0;
  }
  attr();
});
//监听
audio.ontimeupdate = function() {
  if (audio.paused) {
    $(".fa-play").fadeIn();
    $(".fa-pause").fadeOut();
    img.classList.remove("active");
  } else {
    eject.classList.add("active");
    img.classList.add("active");
    $(".fa-play").fadeOut();
    $(".fa-pause").fadeIn();
  }
  $(".loading div").css(
    "width",
    (audio.currentTime / audio.duration) * 100 + "%"
  );
  $(".loading span").css(
    "left",
    (audio.currentTime / audio.duration) * 100 + "%"
  );
  $("li")
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
  gotime();
  time();
};
//改名
function name() {}
//歌曲长度
function time() {
  $(".time span")
    .eq(1)
    .text(
      Math.floor(audio.duration / 60) +
        ":" +
        ((audio.duration % 60) / 100).toFixed(2).slice(-2)
    );
}
//当前播放时间
function gotime() {
  $(".time span")
    .eq(0)
    .text(
      Math.floor(audio.currentTime / 60) +
        ":" +
        ((audio.currentTime % 60) / 100).toFixed(2).slice(-2)
    );
}
//脱离焦点上LI
document.querySelector(".search").onblur = function() {
  $.get(
    "https://api.apiopen.top/searchMusic?name= " + this.value,
    function(data, textStatus, jqXHR) {
      $.each(data.result, function(indexInArray, valueOfElement) {
        $("ul").append(
          "<li author=" +
            valueOfElement.author +
            " pic=" +
            valueOfElement.pic +
            " title=" +
            valueOfElement.title +
            " url=" +
            valueOfElement.url +
            ">" +
            valueOfElement.author +
            valueOfElement.title +
            "</li>"
        );
      });
    },
    "json"
  );
};
//获取焦点清LI
document.querySelector(".search").onfocus = function() {
  $("ul").empty();
};
//输入添加选项
document.querySelector(".search").oninput = function() {
  $("#test").empty();
  $.get(
    "https://api.apiopen.top/searchMusic?name= " + this.value,
    function(data, textStatus, jqXHR) {
      $.each(data.result, function(indexInArray, valueOfElement) {
        $("#test").append(
          "<option value=" +
            valueOfElement.author +
            "," +
            valueOfElement.title +
            "></option>"
        );
      });
    },
    "json"
  );
};
//选取LI
$("ul").on("click", "li", function() {
  index = $(this).index();
  $("audio").attr("src", $(this).attr("url"));
  $(".songname").text($(this).attr("title"));
  $(".singer").text($(this).attr("author"));
  $(".img img").attr("src", $(this).attr("pic"));
  $(".bg").css("background-image", "url(" + $(this).attr("pic") + ")");
});
audio.onended = function() {
  next();
};
function attr() {
  $("audio").attr(
    "src",
    $("li")
      .eq(index)
      .attr("url")
  );
  $(".songname").text(
    $("li")
      .eq(index)
      .attr("title")
  );
  $(".singer").text(
    $("li")
      .eq(index)
      .attr("author")
  );
  $(".img img").attr(
    "src",
    $("li")
      .eq(index)
      .attr("pic")
  );
  $(".bg").css(
    "background-image",
    "url(" +
      $("li")
        .eq(index)
        .attr("pic") +
      ")"
  );
}
