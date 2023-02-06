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

    var cpp_styling =  document.getElementById("c++");
    var python_styling =  document.getElementById("python");
    var java_styling =  document.getElementById("java");
    var js_styling =  document.getElementById("js");
    var c_hash_styling =  document.getElementById("c#");

    if(selectedLanguage == 1){
      cpp_styling.style.display = "block"; 
    }
    else{
      cpp_styling.style.display = "none"; 
    }

    if(selectedLanguage == 2){
       python_styling.style.display = "block"; 
    }
    else{
      python_styling.style.display = "none"; 
    }

    if(selectedLanguage == 3){
      java_styling.style.display = "block"; 
    }
    else{
      java_styling.style.display = "none"; 
    }

    if(selectedLanguage == 4){
      js_styling.style.display = "block"; 
    }
    else{
      js_styling.style.display = "none"; 
    }

    if(selectedLanguage == 5){
      c_hash_styling.style.display = "block"; 
    }
    else{
      c_hash_styling.style.display = "none"; 
    }
}

function showTextArea(){

  var cpp_checkbox1 =  document.getElementById("c++_1");
  var cpp_checkbox2 =  document.getElementById("c++_2");

  var python_checkbox1 =  document.getElementById("python_1");
  var python_checkbox2 =  document.getElementById("python_2");

  var java_checkbox1 =  document.getElementById("java_1");
  var java_checkbox2 =  document.getElementById("java_2");

  var js_checkbox1 =  document.getElementById("js_1");
  var js_checkbox2 =  document.getElementById("js_2");

  var c_hash_checkbox1 =  document.getElementById("c#_1");
  var c_hash_checkbox2 =  document.getElementById("c#_2");


  //2 checkboxes for c++
    if(cpp_checkbox1.checked == true){
        document.getElementById("c++_text_1").style.display = "block";
    }
    else{
        document.getElementById("c++_text_1").style.display = "none"; 
    }

    if(cpp_checkbox2.checked == true){
      document.getElementById("c++_text_2").style.display = "block";
    }
    else{
      document.getElementById("c++_text_2").style.display = "none"; 
    }


  //2 checkboxes for python
  if(python_checkbox1.checked == true){
      document.getElementById("python_text_1").style.display = "block";
  }
  else{
      document.getElementById("python_text_1").style.display = "none"; 
  }

  if(python_checkbox2.checked == true){
    document.getElementById("python_text_2").style.display = "block";
  }
  else{
    document.getElementById("python_text_2").style.display = "none"; 
  }



    //2 checkboxes for java
  if(java_checkbox1.checked == true){
      document.getElementById("java_text_1").style.display = "block";
  }
  else{
      document.getElementById("java_text_1").style.display = "none"; 
  }

  if(java_checkbox2.checked == true){
    document.getElementById("java_text_2").style.display = "block";
  }
  else{
    document.getElementById("java_text_2").style.display = "none"; 
  }



   //2 checkboxes for js
   if(c_hash_checkbox1.checked == true){
    document.getElementById("c#_text_1").style.display = "block";
  }
  else{
    document.getElementById("c#_text_1").style.display = "none"; 
  }

  if(c_hash_checkbox2.checked == true){
  document.getElementById("c#_text_2").style.display = "block";
  }
  else{
  document.getElementById("c#_text_2").style.display = "none"; 
  }



  //2 checkboxes for c#
  if(js_checkbox1.checked == true){
    document.getElementById("js_text_1").style.display = "block";
  }
  else{
    document.getElementById("js_text_1").style.display = "none"; 
  }

  if(js_checkbox2.checked == true){
  document.getElementById("js_text_2").style.display = "block";
  }
  else{
  document.getElementById("js_text_2").style.display = "none"; 
  }


}
