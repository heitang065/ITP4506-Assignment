$(document).ready(function(){
    $("#new-msg-btn").click(function(e){
        e.preventDefault();
        toastr.success("Sent successfully");
        $("#exampleModal").modal("hide");
    })
})