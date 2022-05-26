$(document).ready(function(){
    $("#date-picker").datepicker({});

    $("#teacher-change-password-form").submit(function(e){
        e.preventDefault();
        $(".change-password-btn").prop("disabled", true);
        toastr.success("Password changed successfully");
        $("#changePassword").modal("hide");
    })

    $("#teacher-edit-profile-form").submit(function(e){
        e.preventDefault();
        toastr.success("Profile updated successfully");
        $("#editProfile").modal("hide");
    })

    $('.modal').modal({
        backdrop: false
      })
})