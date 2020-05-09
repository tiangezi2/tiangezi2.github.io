$(".subject li")
  .eq(1)
  .mouseenter(function() {
    $("label").removeClass("active");
  });
$("label").mouseleave(function() {
  $("label").addClass("active");
});

$(".ghost li")
  .eq(0)
  .mouseenter(function() {
    $("<div class='top'></div>").appendTo(this);
    $("<div class='botton'></div>").appendTo(this);
    $("<div class='left'></div>").appendTo(this);
    $("<div class='right'></div>").appendTo(this);

    $("div.top").animate({ width: "100%" }, function() {
      $("div.right").animate({ height: "100%" }, function() {
        $("div.botton").animate({ width: "100%" }, function() {
          $("div.left").animate({ height: "100%" });
        });
      });
    });
  });
$(".ghost li")
  .eq(0)
  .mouseleave(function() {
    $("div.left").animate({ height: "0%" }, function() {
      $("div.botton").animate({ width: "0%" }, function() {
        $("div.right").animate({ height: "0%" }, function() {
          $("div.top").animate({ width: "0%" }, function() {
            $("div.top").detach();
            $("div.botton").detach();
            $("div.left").detach();
            $("div.right").detach();
          });
        });
      });
    });
  });

$(".ghost li")
  .eq(1)
  .mousemove(function(event) {
    var x = (event.pageX || event.clientX) - $(this).offset().left;
    var y = (event.pageY || event.clientY) - $(this).offset().top;
    $(".ghost li")
      .eq(1)
      .children(".circle")
      .css({
        top: y - $(".ghost li .circle").height() / 2,
        left: x - $(".ghost li .circle").width() / 2
      });
    $(this).addClass("active");
  });
$(".ghost li").mouseleave(function() {
  $(this).removeClass("active");
});

$(".ghost li")
  .eq(2)
  .mouseenter(function() {
    $("<div class='top'></div>")
      .appendTo(this)
      .css({ width: "100%", left: "-100%" });
    $("<div class='botton'></div>")
      .appendTo(this)
      .css({ width: "100%", right: "-100%" });
    $("<div class='left'></div>")
      .appendTo(this)
      .css({ height: "100%", bottom: "-100%" });
    $("<div class='right'></div>")
      .appendTo(this)
      .css({ height: "100%", top: "-100%" });

    $("div.top").animate({ left: "0" });
    $("div.botton").animate({ right: "0" });
    $("div.left").animate({ bottom: "0" });
    $("div.right").animate({ top: "0" });
  });
$(".ghost li")
  .eq(2)
  .mouseleave(function() {
    $("div.top").animate({ left: "-100%" });
    $("div.botton").animate({ right: "-100%" });
    $("div.left").animate({ bottom: "-100%" });
    $("div.right").animate({ top: "-100%" }, function name(params) {
      $("div.top").detach();
      $("div.botton").detach();
      $("div.left").detach();
      $("div.right").detach();
    });
  });
