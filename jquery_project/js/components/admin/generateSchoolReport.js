$(document).ready(function () {
  const ctx = document.getElementById("myChart").getContext("2d");
  const ctxLine = document.getElementById("lineChart").getContext("2d");
  Chart.register(ChartDataLabels);

  const myChart = new Chart(ctx, {
    type: "pie",
    plugins: [ChartDataLabels],
    data: {
      labels: [
        "Attendance Rate",
        "Absent rate",
        "Sick leave rate",
        "Other reason",
        "Late rate",
      ],
      datasets: [
        {
          data: [98, 2, 80, 20, 7],
          backgroundColor: [
            "#e91e63",
            "#00e676",
            "#ff5722",
            "#1e88e5",
            "#ffd600",
          ],
          borderWidth: 0.5,
          borderColor: "#ddd",
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Recommended Daily Diet",
        position: "top",
        fontSize: 16,
        fontColor: "#111",
        padding: 20,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          fontColor: "#111",
          padding: 15,
        },
      },
      tooltips: {
        enabled: false,
      },
      plugins: {
        datalabels: {
          color: "#111",
          textAlign: "center",
          font: {
            lineHeight: 1.6,
          },
          formatter: function (value, ctx) {
            return ctx.chart.data.labels[ctx.dataIndex] + "\n" + value + "%";
          },
        },
      },
    },
  });

  new Chart(ctxLine, {
    type: "line",
    data:{
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: 'Present',
          data: [98, 97, 90, 80, 7,78,54,3,5,24,23,73],
          borderColor: "green",
        },
        {
          label: 'Absent',
          data: [5, 7, 1, 10, 7,6,7,34,32,53,16,46],
          borderColor: "red",
        }
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  });
  $("#school-report").DataTable({
    dom: "B<lf>rtip",
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    buttons: ["excel", "pdf", "print"],
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

  $("#absent").DataTable({
    responsive: true,
    dom: "B<lf>rtip",
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    buttons: ["excel", "pdf", "print"],
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

  $("#sick-leave").DataTable({
    responsive: true,
    dom: "B<lf>rtip",
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    buttons: ["excel", "pdf", "print"],
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

  $("#late").DataTable({
    responsive: true,
    dom: "B<lf>rtip",
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    buttons: ["excel", "pdf", "print"],
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

  $("#class-student-record").DataTable({
    responsive: true,
    dom: "B<lf>rtip",
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    buttons: ["excel", "pdf", "print"],
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

  $("#student-absent-detail").DataTable({
    responsive: true,
    dom: "B<lf>rtip",
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    buttons: ["excel", "pdf", "print"],
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
});
