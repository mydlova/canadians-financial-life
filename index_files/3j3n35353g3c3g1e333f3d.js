<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="29ff294009825c27ec1634c880fc79d57a744254">
    <title>Login page</title>

    <!-- Bootstrap -->
    <link href="public/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="public/vendors/fontawesome-free-5.0.6/web-fonts-with-css/css/fontawesome-all.min.css" rel="stylesheet">
    <!-- Custom Theme Style -->
    <style>
        body,html{height:100%;background-repeat:no-repeat;background-image:linear-gradient(#425c6c, #1c2838)}  .card-container.card{max-width:350px;padding:40px}  .btn{font-weight:700;height:36px;-moz-user-select:none;-webkit-user-select:none;user-select:none}  .card{background-color:#F7F7F7;padding:20px 25px 30px;margin:0 auto 25px;margin-top:50px;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;-moz-box-shadow:0 2px 2px rgba(0,0,0,0.3);-webkit-box-shadow:0 2px 2px rgba(0,0,0,0.3);box-shadow:0 2px 2px rgba(0,0,0,0.3)}  #loginform #usr,#loginform #pswd{direction:ltr;height:35px;font-size:16px;margin-top:8px}  .form-signin input[type=password],.form-signin input[type=text],.form-signin button{width:100%;display:block;margin-bottom:10px;z-index:1;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}  #loginform .form-control:focus{border-color:#6891a2;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #6891a2;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #6891a2}  .btn.btn-signin{background-color:#6891a2;padding:0;font-weight:700;font-size:14px;height:36px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;border:none;-o-transition:all .218s;-moz-transition:all .218s;-webkit-transition:all .218s;transition:all .218s}  .btn.btn-signin:hover,.btn.btn-signin:active,.btn.btn-signin:focus{background-color:rgba(56,86,115,0.73)}  .forgot-password{color:#6891a2}  .forgot-password:hover,.forgot-password:active,.forgot-password:focus{color:#283f53}  .shadow{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2)}  .logo-login{width:100%;margin:0 auto}  #text{margin-bottom:0;margin-top:5px;font-size:small;text-align:center}
    </style>
</head>

<body>
<div class="container">
    <div class="card card-container">
        <div style="margin-bottom: 30px;text-align: center;color:#515151">
            <h3 style="text-shadow:1px 1px lightgrey"><i class="fas fa-clone"></i> Landings Manager</h3>
        </div>
        <form id="loginform" autocomplete="off">
            <input type="text" id="usr" name="usr" class="form-control" placeholder="Username" autofocus>
            <input type="password" id="pswd" name="pswd" class="form-control" placeholder="Password">
            <div id="remember" class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block btn-signin shadow" id="submit" name="submit" type="submit">Login</button>
        </form><!-- /form -->
<!--        <a href="#" class="forgot-password" style="margin-top:10px">-->
<!--            Forgot the password?-->
<!--        </a>-->
        <p></p>
        <p id="text"></p>
    </div><!-- /card-container -->
</div><!-- /container -->

<!-- jQuery -->
<script src="public/vendors/jquery/jquery-min.js"></script>
<!-- Bootstrap -->
<script src="public/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script>
    $.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});var homeUrl="/landings/";function letters(e){return/^[A-z]+$/.test(e)}var user=document.getElementById("usr"),pass=document.getElementById("pswd");user.onfocus=function(){this.style.borderColor=""},pass.onfocus=function(){this.style.borderColor=""},$("#loginform").on("submit",function(){var e=0;if(b=this.usr.value,c=this.pswd.value,b.length<3||""===b||!letters(b)?(this.usr.style.borderColor="#C4615F",$("#text").addClass("alert alert-danger").text("Please fill out the correct Username."),e=1):this.usr.style.borderColor="#61c476",c.length<5||""===c?(e=1,this.pswd.style.borderColor="#C4615F",$("#text").addClass("alert alert-danger").text("Please fill out the correct Password.")):this.pswd.style.borderColor="#61c476",""===c&&""===b&&(this.usr.style.borderColor="#C4615F",this.pswd.style.borderColor="#C4615F",$("#text").addClass("alert alert-danger").text("Please fill out the fields.")),0===e){$("#submit").html('<i class="fas fa-spinner fa-lg fa-spin"></i>');var t={access:{usr:b,pwd:c}},s=JSON.stringify(t);setTimeout(function(){$.post(homeUrl+"login_response",{cmd:s},function(e){"success"===e?($("#text").removeClass("alert-danger").addClass("alert alert-success").html("<span class='text-success'>Login success!<span>"),location.reload()):"locked"===e?$("#text").addClass("alert alert-danger").html("<i class='fa fa-exclamation'></i> The username has been locked. To unlock, contact your administrator."):"csrf"===e?$("#text").removeClass("alert-danger").addClass("alert alert-warning").html("<i class='glyphicon glyphicon-warning-sign'></i> Your token has expired, to get a new token, please refresh the page."):$("#text").addClass("alert alert-danger").html("<i class='glyphicon glyphicon-warning-sign'></i> Login credentials are not valid."),$("#submit").text("Login")})},1200)}return!1});
</script>
</body>
</html>
