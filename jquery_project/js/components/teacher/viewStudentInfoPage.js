$(document).ready(function () {
  $("#date-picker").datepicker({});

  $("#students-attendance").DataTable({
    responsive: true,
    dom: "B<lf>rtip",
    buttons: [
      {
        text: "Edit student infomation",
        attr: {
          id: "edit-student-info-btn",
          "data-bs-toggle": "modal",
          "data-bs-target": "#edit-student-info-modal",
        },
      },
    ],
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

  $("#change-student-info-form").submit(function (e) {
    e.preventDefault();
    $("#edit-student-info-modal").modal("hide");
    toastr.success("Updated successfully");
  });

  $("#student-id-select-menu").on("change",function(){
    const id = $(this).val();
    if(id === "200000001"){
      $("#name").val("Harry Potter");
      $('#date-picker').datepicker('setDate', "01/01/2000");
      $("#email").val("harrypotter@gmail.com");
      $("#phoneNumber").val("21232123");
      $("#address").val("Home");
    }else if(id === "200000002"){
      $("#name").val("Harry");
      $('#date-picker').datepicker('setDate', "01/01/2000");
      $("#email").val("harry@gmail.com");
      $("#phoneNumber").val("31233123");
      $("#address").val("Home");
    }else{
      $("#name").val("");
      $('#date-picker').datepicker('setDate', "");
      $("#email").val("");
      $("#phoneNumber").val("");
      $("#address").val("");
    }
  })
});
