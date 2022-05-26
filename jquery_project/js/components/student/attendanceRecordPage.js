$(document).ready(function () {
  $("#attendance").DataTable({
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

  var minDate, maxDate;

  // Custom filtering function which will search data in column four between two values
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var min = minDate.val();
    var max = maxDate.val();
    var date = new Date(data[0]);

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

  $("#upload-file-btn").click(function(){
    $("#upload-file-hidden").click();
  })
});
