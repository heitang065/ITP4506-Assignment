$("#date-picker").datepicker({});

$("#student-change-password-form").submit(function(e){
    e.preventDefault();
    $(".change-password-btn").prop("disabled", true);
    $("#changePassword").modal("hide");
    toastr.success("Password changed successfully")
})

$("#student-edit-profile-form").submit(function(e){
    e.preventDefault();
    $("#editProfile").modal("hide");
    toastr.success("Profile updated successfully")
})

$('.modal').modal({
    backdrop: false
  })