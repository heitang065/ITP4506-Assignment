$(document).ready(function(){
    $("#nav-toggler-btn").click(function(){
        $(".sidebar-container").toggleClass("show");
        $("#overlay").toggleClass("show");
    })

    $(".email-link").click(function(e){
        e.preventDefault();
        const page = $(this).attr("href");
        $("#main-panel").load("./components/" + page)
    })
})