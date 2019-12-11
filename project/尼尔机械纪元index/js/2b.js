var current = 0;
var y = 0;
var canClick = true;
$("body").on("wheel", function(e) {
  console.log(e.originalEvent.deltaY);
  y += e.originalEvent.deltaY;

  setTimeout(function() {
    if (canClick) {
      canClick = false;
      if (y > 0) {
        nextPic();
      } else if (y < 0) {
        prevPic();
      }
      setTimeout(function() {
        canClick = true;
      }, 500);
    }
    y = 0;
  }, 200);
});
function showPic() {
  $("section ul")
    .children("li")
    .removeClass("active")
    .eq(0)
    .animate({ "margin-top": -100 * current + "vh" })
    .end()
    .eq(current)
    .addClass("active");
}
function nextPic() {
  current = current >= $("section ul li").length - 1 ? current : ++current;
  showPic();
}
function prevPic() {
  current = current <= 0 ? 0 : --current;
  showPic();
}
