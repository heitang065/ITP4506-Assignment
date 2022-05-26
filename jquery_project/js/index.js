const users = [
  {
    role: "admin",
    username: "admin",
    password: "admin",
  },
  {
    role: "teacher",
    username: "teacher",
    password: "teacher",
  },
  {
    role: "student",
    username: "student",
    password: "student",
  },
];

$(document).ready(function () {
  $(".login-form").submit(function (e) {
    e.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();

    if (!username || !password) {
      $(".login-error-msg").text("Please enter user name and password");
      $(".login-error-msg").show();
      return;
    }

    for (let user of users) {
      if (user.username === username) {
        if (user.password === password) {
          $(".login-loading").css("display", "flex");
          setTimeout(function(){ 
            $('.preloader').addClass('preloader-deactivate');
        }, 1200);
          localStorage.setItem("role",user.role);
          $(".login-error-msg").css("display", "none");
          new Promise(function (resolve, reject) {
            setTimeout(function () {
              if(user.role === "admin"){
                resolve((location.href = "./home.html"));
              }else{
                resolve((location.href = "./completeProfile.html"))
              }
            }, 1500);
          });
          break;
        } else {
          $(".login-error-msg").text("Incorrect username or password");
          $(".login-error-msg").show();
        }
      } else {
        $(".login-error-msg").text("Incorrect username or password");
        $(".login-error-msg").show();
      }
    }
  });
});
