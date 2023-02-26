$(document).ready(function(){
    //hiding the error statements initially
    $("#usercheck").hide();
    $("#passcheck").hide();
    $("#confirmpasscheck").hide();

    //upon releasing the keyboard button, calling up the function
    $("#usernames").keyup(function () {
        validateUsername();
    });

    $("#password").keyup(function () {
        validatePassword();
    });

    $("#confirmpassword").keyup(function () {
        validateConfirmPassword();
    });

    //initializing the variables for error
    let usernameError = true;
    let passwordError = true;
    let confirmPasswordError = true;

    //function for validating username 
    function validateUsername(){
        var hasNumber = /\d/;
        let username = $("#usernames").val();
        if (username.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        }
        else if(hasNumber.test(username)){
            $("#usercheck").show();
            $("#usercheck").html("*Username cannot contain any digits");
            usernameError = false;
            return false;
        }
        else if (username.length < 3 || username.length > 12) {
            $("#usercheck").show();
            $("#usercheck").html("*Length of username must be between 3 and 12");
            usernameError = false;
            return false;
        }
        else {
            $("#usercheck").hide();
        }
    }
})