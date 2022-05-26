$(document).ready(function() {
    $("#users").DataTable({
        responsive: true,
        dom: "B<lf>rtip",
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        buttons: [
            {
                text: "Create new Account",
                attr: {
                    "id": "create-account-btn",
                    "data-bs-toggle": "modal",
                    "data-bs-target": "#create-account-modal"
                }
            }
        ],
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    });

    const generatePassword = () =>{
        const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let password = "";

        for (var i = 0; i <= 12; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        $("#password").val(password);
    }

    $("#create-account-btn, #generate-pwd-btn").click(function(){
        generatePassword();
    })

    $(".ban-account-btn").click(function(){
        $(this).toggleClass("change");

        if($(this).hasClass("change")){
            $(this).parent().parent().css({
                "backgroundColor": "grey",
                "text-decoration": "line-through"
            })
            $(this).text("Enable");
        }else{
            $(this).text("Disable");
            $(this).parent().parent().css({
                "backgroundColor": "transparent",
                "text-decoration": "none"
            })
        }
    })

    $("#create-account-form").submit(function(e){
        e.preventDefault();
        toastr.success("Account created successfully");
        $("#create-account-modal").modal("hide");
    })
} );