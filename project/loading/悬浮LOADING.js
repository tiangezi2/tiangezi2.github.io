// var x = document.querySelector(".O");
// var v = document.querySelector(".A");
// var e = document.querySelector(".D");
// var img = document.querySelector(".img");

// var xd = document.querySelector(".O div");
// var vd = document.querySelector(".A div");
// var ed = document.querySelector(".D div");
// var xin = document.querySelector(".xin");
// var btn = document.querySelector(".heartimg");

$(".heartimg").click(function() {
  $(".img").animate({ opacity: "1" }, function() {
    $(".O div").animate({ opacity: "0" }, 9500, function() {
      $(".xin").animate(
        { opacity: "1", top: "60px", left: "10px" },
        function() {
          $(".img").animate({opacity: "1"},
            1500,
            function() {
              $(".A").css({
                transition: "all 2s",
                transform: "rotateY(720deg)"
              });
              $(".D").css({
                transition: "all 2s",
                transform: "rotateY(720deg)"
              });
              $(".A div").html("V");
              $(".D div").html("E");
            });
        }
      );
    });
  });
});

// btn.onclick = function() {

//   img.style.opacity = "1";

//   xd.style.opacity = "0";
//   xd.style.transition = "all 2s";

//   xin.style.opacity = "1";

//   v.style.transition = "all 2s";
//   v.style.transform = "rotateX(720deg)";

//   vd.innerHTML = "V";

//   e.style.transition = "all 2s";
//   e.style.transform = "rotateY(720deg)";

//   ed.innerHTML = "E";
// };
