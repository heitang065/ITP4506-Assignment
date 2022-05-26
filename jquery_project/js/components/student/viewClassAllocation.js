$(document).ready(function () {
  var appointments = new Array();
  var appointment1 = {
    id: "id1",
    description: "",
    location: "Room 204",
    subject: "English",
    calendar: "",
    start: new Date(2021, 09, 13, 8, 30, 0),
    end: new Date(2021, 09, 13, 10, 0, 0),
  };
  var appointment2 = {
    id: "id2",
    description: "",
    location: "Room 304",
    subject: "Chinese",
    calendar: "",
    start: new Date(2021, 09, 13, 10, 30, 0),
    end: new Date(2021, 09, 13, 12, 0, 0),
  };
  var appointment3 = {
    id: "id3",
    description: "",
    location: "Room 104",
    subject: "Maths",
    calendar: "",
    start: new Date(2021, 09, 13, 13, 30, 0),
    end: new Date(2021, 09, 13, 14, 30, 0),
  };
  var appointment4 = {
    id: "id4",
    description: "",
    location: "Room 207",
    subject: "PE",
    calendar: "",
    start: new Date(2021, 09, 13, 14, 30, 0),
    end: new Date(2021, 09, 13, 16, 0, 0),
  };
  var appointment5 = {
    id: "id4",
    description: "",
    location: "Room 205",
    subject: "Lunch Time",
    calendar: "",
    start: new Date(2021, 09, 13, 12, 0, 0),
    end: new Date(2021, 09, 13, 13, 30, 0),
  };
  var appointment6 = {
    id: "id4",
    description: "",
    location: "Room 104",
    subject: "Rest Time",
    calendar: "",
    start: new Date(2021, 09, 13, 10, 0, 0),
    end: new Date(2021, 09, 13, 10, 30, 0),
  };
  appointments.push(appointment1);
  appointments.push(appointment2);
  appointments.push(appointment3);
  appointments.push(appointment4);
  appointments.push(appointment5);
  appointments.push(appointment6);
  // prepare the data
  var source = {
    dataType: "array",
    dataFields: [
      { name: "id", type: "string" },
      { name: "description", type: "string" },
      { name: "location", type: "string" },
      { name: "subject", type: "string" },
      { name: "calendar", type: "string" },
      { name: "start", type: "date" },
      { name: "end", type: "date" },
    ],
    id: "id",
    localData: appointments,
  };
  var adapter = new $.jqx.dataAdapter(source);
  $("#scheduler").jqxScheduler({
    date: new $.jqx.date(2021, 10, 10),
    width: "100%",
    height: 600,
    source: adapter,
    view: "weekView",
    showLegend: false,
    ready: function () {
      $("#scheduler").jqxScheduler("ensureAppointmentVisible", "id3");
    },
    resources: {
      colorScheme: "scheme05",
      dataField: "calendar",
      source: new $.jqx.dataAdapter(source),
    },
    appointmentDataFields: {
      from: "start",
      to: "end",
      id: "id",
      description: "description",
      location: "location",
      subject: "subject",
      resourceId: "calendar",
      readOnly: "readOnly"
    },
    views: ["dayView", "weekView", "monthView"],
  });
});
