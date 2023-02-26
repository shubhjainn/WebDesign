$(document).ready(function () {
  //hiding the error statements initially
  $("#usercheck").hide();
  $("#passwordcheck").hide();
  $("#confirmpasswordcheck").hide();
  $("#emailcheck").hide();

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

  $("#email").keyup(function () {
    validateEmail();
  });

  //initializing the variables for error
  let usernameError = true;
  let passwordError = true;
  let confirmPasswordError = true;
  let emailError = true;

  //function for validating username
  function validateUsername() {
    var hasNumber = /\d/;
    let username = $("#usernames").val();
    if (username.length == "") {
      $("#usercheck").show();
      usernameError = false;
      return false;
    } else if (hasNumber.test(username)) {
      $("#usercheck").show();
      $("#usercheck").html("*Username cannot contain any digits");
      usernameError = false;
      return false;
    } else if (username.length < 3 || username.length > 12) {
      $("#usercheck").show();
      $("#usercheck").html("*Length of username must be between 3 and 12");
      usernameError = false;
      return false;
    } else {
      $("#usercheck").hide();
    }
  }

  function validateEmail() {
    var regex = /(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)/; //a-z@north
    let email = $("#email").val();
    if (!email.match(regex)) {
      $("#emailcheck").show();
      $("#emailcheck").html("*Entered email is not in correct format");
      emailError = false;
      return false;
    } else {
      $("#emailcheck").hide();
    }
  }

  function validatePassword() {
    let password = $("#password").val();
    if (password.length == "") {
      $("#passcheck").show();
      passwordError = false;
      return false;
    }
    if (password.length < 3 || password.length > 12) {
      $("#passwordcheck").show();
      $("#passwordcheck").html("*Length of your password must be between 3 and 12");
      $("#passwordcheck").css("color", "red");
      passwordError = false;
      return false;
    } else {
      $("#passwordcheck").hide();
    }
  }

  $("#submitbtn").click(function () {
    validateUsername();
    validatePassword();
    validateConfirmPassword();
    validateEmail();
    if (usernameError == true && passwordError == true && confirmPasswordError == true && emailError == true) 
    {
        return true;
    }
    else {
        return false;
    }
});

function login(loginform){
    var user2=document.getElementById('usernames').value;
    sessionStorage.setItem("user2", user2);
    console.log(user2);
  }		
  
  function myFunction() {
    location.href("start.html");
  }

});
