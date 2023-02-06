var form = document.getElementById("myPost");
form.addEventListener("submit", submitted);

// initially we are setting to false
var validEmail = false;
var validPhone = false;
var validZipCode = false;

// regular expressions for email, phone and zip
var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

//values

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var zipCode = document.getElementById("zipCode");
zipCode.addEventListener("input", validate);

// write a funcyion for validate
function validate(e) {
  var value = e.target.value;
  var type = this.id; // we are getting ID of the field
  var em = "error_" + type;

  switch (type) {
    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;
    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;
    case "zipCode":
      if (!value.trim().match(regExZip)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZipCode = false;
        console.log("validZip", validZipCode);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZipCode = true;
        console.log("validZip", validZipCode);
      }
      break;
  }
}
// write a function submitted
function submitted(e) {
  //e.preventDefault();
  console.log("validname", validName);
  if (validName && validEmail && validPhone) {
    alert("Data entered succesfull");
    //window.location.href = "FeedbackComplete.html";
  } else {
    alert("Please enter valid details");
  }
}

function selectProgramming(lang){
    var selectedLanguage = lang.value
    if(selectedLanguage == 1){
        document.getElementById("c++").style.display = "block"; 
    }
    else{
        document.getElementById("c++").style.display = "none"; 
    }

    if(selectedLanguage == 2){
        document.getElementById("python").style.display = "block"; 
    }
    else{
        document.getElementById("python").style.display = "none"; 
    }

    if(selectedLanguage == 3){
        document.getElementById("java").style.display = "block"; 
    }
    else{
        document.getElementById("java").style.display = "none"; 
    }

    if(selectedLanguage == 4){
        document.getElementById("js").style.display = "block"; 
    }
    else{
        document.getElementById("js").style.display = "none"; 
    }

    if(selectedLanguage == 5){
        document.getElementById("c#").style.display = "block"; 
    }
    else{
        document.getElementById("c#").style.display = "none"; 
    }
}
