$(document).ready(function () {
  $("#class-information").DataTable({
    responsive: true,
    initComplete: function () {
      this.api()
        .columns()
        .every(function () {
          var column = this;
          var select = $('<select><option value=""></option></select>')
            .appendTo($(column.footer()).empty())
            .on("change", function () {
              var val = $.fn.dataTable.util.escapeRegex($(this).val());

              column.search(val ? "^" + val + "$" : "", true, false).draw();
            });

          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.append('<option value="' + d + '">' + d + "</option>");
            });
        });
    },
  });

  // Custom filtering function which will search data in column four between two values
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var min = minDate.val();
    var max = maxDate.val();
    var date = new Date(data[3]);

    if (
      (min === null && max === null) ||
      (min === null && date <= max) ||
      (min <= date && max === null) ||
      (min <= date && date <= max)
    ) {
      return true;
    }
    return false;
  });

  minDate = new DateTime($("#min"), {
    format: "MMMM Do YYYY",
  });
  maxDate = new DateTime($("#max"), {
    format: "MMMM Do YYYY",
  });

  // DataTables initialisation
  var table = $("#attendance").DataTable();

  // Refilter the table
  $("#min, #max").on("change", function () {
    table.draw();
  });

  $(".remove-student-btn").click(function () {
    toastr.success("Student removed successfully");
  });

  $(".delete-class-btn").click(function () {
    toastr.success("Class deleted successfully");
  });

  $("#edit-class-information-form").submit(function (e) {
    e.preventDefault();
    toastr.success("Edited successfully");
    $("#edit-class-information-modal").modal("hide");
  });

  $("#add-new-student-class-form").submit(function (e) {
    e.preventDefault();

    const id = $("#studentID").val();
    if(id === "200000001" || id === "200000002"){
      toastr.warning("Student has already been added");
    }else{
      toastr.success("Student Added successfully");
      $("#add-student-to-class-modal").modal("hide");
    }
  });
});
