$(document).ready(function () {
    $(".time").click(function () {
        $(".time").css("border","none");
        $(this).css("border","2px solid #000");
    });

    $(".btn-submit").click(function (e) {
        e.preventDefault();
        toastr.success("Booking Created.");
    });
});