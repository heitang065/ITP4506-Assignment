$(document).ready(function () {
  $("#admin-class-allocation").DataTable({
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

  $("#class-archive").DataTable({
    dom: "B<lf>rtip",
    buttons: [
      {
        text: "Create Classes Archive",
        attr: {
          id: "create-class-archive-btn",
          "data-bs-toggle": "modal",
          "data-bs-target": "#create-class-archive-modal",
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

  $("#class-allocation-detail").DataTable({
    responsive: true,
    dom: "B<lf>rtip",
    buttons: [
        {
            text: "Edit Class Information",
            attr: {
                "id": "edit-class-information-btn",
                "data-bs-toggle": "modal",
                "data-bs-target": "#edit-class-information-modal"
            }
        },
        {
          text: "Add student",
          attr: {
              "id": "add-student-to-class-btn",
              "data-bs-toggle": "modal",
              "data-bs-target": "#add-student-to-class-modal"
          }
      }
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

  $("#create-class-archive-form").submit(function (e) {
    e.preventDefault();
    toastr.success("Created successfully");
    $("#create-class-archive-modal").modal("hide");
  });

  $("#edit-class-information-form").submit(function (e) {
    e.preventDefault();
    toastr.success("Created successfully");
    $("#edit-class-information-modal").modal("hide");
  });

  $(".remove-student-btn").click(function () {
    toastr.success("Student removed successfully");
  });

  $(".delete-class-btn").click(function () {
    toastr.success("Class deleted successfully");
  });

  $("#add-new-student-class-form").submit(function (e) {
    e.preventDefault();

    const id = $("#studentID").val();
    if(id === "200000001" || id === "200000002"){
      toastr.warning("Student has already been added");
    }else{
      toastr.success("Student added successfully");
      $("#add-student-to-class-modal").modal("hide");
    }
  });
});
