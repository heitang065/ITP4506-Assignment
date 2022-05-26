$(document).ready(function () {
    $(".room-box").click(function (e) {
      e.preventDefault();
  
      const page = $(this).attr("href");
      $("#main-panel").load("./components/" + page);
    });
});