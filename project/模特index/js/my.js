var current;
$("#gallery  img").click(function(e) {
  e.preventDefault();

  $("#myModal").modal("show");
  $("#myModal")
    .find(".modal-body img")
    .attr("src", $(this).attr("src"));

  current = $(this);
});
$("#myModal  .modal-footer span")
  .eq(1)
  .click(function() {
    if (
      current
        .parent()
        .parent()
        .next()
        .find("img")[0]
    ) {
      current = current
        .parent()
        .parent()
        .next()
        .find("img");
    }
    else{
      current = $("#gallery  img").eq(0)
    }
    console.log(current);
    $("#myModal")
      .find(".modal-body img")
      .attr("src", current.attr("src"));
  });
$("#myModal  .modal-footer span")
  .eq(0)
  .click(function() {
    if (
      current
        .parent()
        .parent()
        .prev()
        .find("img")[0]
    ) {
      current = current
        .parent()
        .parent()
        .prev()
        .find("img");
    }   else{
      current = $("#gallery  img").eq(5)
    }
    console.log(current);
    $("#myModal")
      .find(".modal-body img")
      .attr("src", current.attr("src"));
  });
  $(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })
 })
 $(".up a").click(function () {
      $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -20+ "px"}, 1000);
      return false;//不要这句会有点卡顿
  });
