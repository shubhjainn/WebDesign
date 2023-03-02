$(document).ready(function () {
  //hiding the error statements initially
  $("#usercheck").hide();
  $("#passwordcheck").hide();
  $("#emailcheck").hide();

  //upon releasing the keyboard button, calling up the function
  $("#usernames").keyup(function () {
    validateUsername();
  });

  $("#password").keyup(function () {
    validatePassword();
  });

  $("#email").keyup(function () {
    validateEmail();
  });

  //initializing the variables for error
  let usernameError = true;
  let passwordError = true;
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
      usernameError = true;

      return true;
    }
  }

  function validateEmail() {
    var regex = /(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)/; //a-z@north
    let email = $("#email").val();
    if (email.length == "") {
      $("#emailcheck").show();
      emailError = false;
      return false;
    } else if (!email.match(regex)) {
      $("#emailcheck").show();
      $("#emailcheck").html("Enter the email in proper format");
      emailError = false;
      return false;
    } else {
      $("#emailcheck").hide();
      emailError = true;

      return true;
    }
  }

  function validatePassword() {
    let password = $("#password").val();
    if (password.length == "") {
      $("#passwordcheck").show();
      passwordError = false;
      return false;
    } else if (password.length < 3 || password.length > 12) {
      $("#passwordcheck").show();
      $("#passwordcheck").html(
        "*Length of your password must be between 3 and 12"
      );
      $("#passwordcheck").css("color", "red");
      passwordError = false;
      return false;
    } else {
      $("#passwordcheck").hide();
      passwordError = true;

      return true;
    }
  }

  $("#submitbutton").click(function () {
    validateUsername();
    validatePassword();
    validateEmail();

    if (usernameError == true && passwordError == true && emailError == true) {
      var user = document.getElementById("usernames").value;
      sessionStorage.setItem("user", user);
      location.href("calculator.html");
    } else {
      alert("Please fill out all the fields properly!");
      return false;
    }
  });
});
