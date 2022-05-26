$(document).ready(function () {
  $(".class-box").click(function (e) {
    e.preventDefault();

    const page = $(this).attr("href");
    $("#main-panel").load("./components/" + page);
  });

  $('select[name="create-class-students"]').bootstrapDualListbox({
    nonSelectedListLabel: "Available Students",
    selectedListLabel: "Selected Students",
    preserveSelectionOnMove: "moved",
    moveAllLabel: "Move all",
    removeAllLabel: "Remove all",
  });

  $("#create-class-form").submit(function (e) {
    e.preventDefault();
    if ($('select[name="create-class-students"]').val().length <= 0) {
      toastr.warning("You must choose at least one student");
    } else {
      toastr.success("Class created successfully");
      $("#create-class-modal").modal("hide");
    }
  });
});
