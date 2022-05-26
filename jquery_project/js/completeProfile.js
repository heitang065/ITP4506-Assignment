$(document).ready(function () {
  $("#date-picker").datepicker({});
  
  $("#complete-profile-form").submit(function (e) {
    e.preventDefault();
    location.href = "./home.html";
  })

  $("#avatar").click(function () {
    $("#upload-avatar").click();
  });

  $("#upload-avatar").change(function () {
    const reader = new FileReader();
    reader.onload = function (e) {
      $("#avatar").attr("src", e.target.result);
    };
    reader.readAsDataURL($("#upload-avatar")[0].files[0]);
  });
});
