$(document).ready(function(){
    $("#send-btn").click(function(){
        const msg = `
        <div class="chat-message-right pb-4">
        <div>
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40">
            <div class="text-muted small text-nowrap mt-2">2:34 am</div>
        </div>
        <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
            <div class="font-weight-bold mb-1">You</div>
            ${$("#msg-text").val()}
        </div>
    </div>
        `
        $("#chat-box").append(msg);
        $("#msg-text").val("");
    })
})