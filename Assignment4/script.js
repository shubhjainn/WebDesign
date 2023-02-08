var form = document.getElementById("myPost");
form.addEventListener("submit", submitted,false);

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



var cpp_styling =  document.getElementById("c++");
var python_styling =  document.getElementById("python");
var java_styling =  document.getElementById("java");
var js_styling =  document.getElementById("js");
var c_hash_styling =  document.getElementById("c#");

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
// function submitted(e) {
//   //e.preventDefault();
//   console.log("validname", validName);
//   if (validName && validEmail && validPhone) {
//     alert("Data entered succesfull");
//     //window.location.href = "FeedbackComplete.html";
//   } else {
//     alert("Please enter valid details");
//   }
// }

function selectProgramming(lang){
    var selectedLanguage = lang.value

   

    if(selectedLanguage == "C++"){
      cpp_styling.style.display = "block"; 
    }
    else{
      cpp_styling.style.display = "none"; 
    }

    if(selectedLanguage == "Python"){
       python_styling.style.display = "block"; 
    }
    else{
      python_styling.style.display = "none"; 
    }

    if(selectedLanguage == "Java"){
      java_styling.style.display = "block"; 
    }
    else{
      java_styling.style.display = "none"; 
    }

    if(selectedLanguage == "JavaScript"){
      js_styling.style.display = "block"; 
    }
    else{
      js_styling.style.display = "none"; 
    }

    if(selectedLanguage == "C#"){
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
        document.getElementById('c++_text_1').setAttribute('required',true);
    }
    else{
        document.getElementById("c++_text_1").style.display = "none"; 
        // document.getElementById('c++_text_1').setAttribute('required',false);

    }

    if(cpp_checkbox2.checked == true){
      document.getElementById("c++_text_2").style.display = "block";
      document.getElementById('c++_text_2').setAttribute('required',true);

    } 
    else{
      document.getElementById("c++_text_2").style.display = "none"; 
      // document.getElementById('c++_text_2').setAttribute('required',false);

    }


  //2 checkboxes for python
  if(python_checkbox1.checked == true){
      document.getElementById("python_text_1").style.display = "block";
      document.getElementById('python_text_1').setAttribute('required',true);

  }
  else{
      document.getElementById("python_text_1").style.display = "none"; 
      // document.getElementById('python_text_1').setAttribute('required',false);

  }

  if(python_checkbox2.checked == true){
    document.getElementById("python_text_2").style.display = "block";
    document.getElementById('python_text_2').setAttribute('required',true);

  }
  else{
    document.getElementById("python_text_2").style.display = "none"; 
    // document.getElementById('python_text_2').setAttribute('required',false);

  }



    //2 checkboxes for java
  if(java_checkbox1.checked == true){
      document.getElementById("java_text_1").style.display = "block";
      document.getElementById('java_text_1').setAttribute('required',true);

  }
  else{
      document.getElementById("java_text_1").style.display = "none"; 
      // document.getElementById('java_text_1').setAttribute('required',false);

  }

  if(java_checkbox2.checked == true){
    document.getElementById("java_text_2").style.display = "block";
    document.getElementById('java_text_2').setAttribute('required',true);

  }
  else{
    document.getElementById("java_text_2").style.display = "none"; 
    // document.getElementById('java_text_2').setAttribute('required',false);

  }



   //2 checkboxes for c#
   if(c_hash_checkbox1.checked == true){
    document.getElementById("c#_text_1").style.display = "block";
    document.getElementById('c#_text_1').setAttribute('required',true);

  }
  else{
    document.getElementById("c#_text_1").style.display = "none"; 
    // document.getElementById('c#_text_1').setAttribute('required',false);

  }

  if(c_hash_checkbox2.checked == true){
  document.getElementById("c#_text_2").style.display = "block";
  document.getElementById('c#_text_2').setAttribute('required',true);

  }
  else{
  document.getElementById("c#_text_2").style.display = "none"; 
  // document.getElementById('c#_text_2').setAttribute('required',false);

  }



  //2 checkboxes for js
  if(js_checkbox1.checked == true){
    document.getElementById("js_text_1").style.display = "block";
    document.getElementById('js_text_1').setAttribute('required',true);

  }
  else{
    document.getElementById("js_text_1").style.display = "none"; 
    // document.getElementById('js_text_1').setAttribute('required',false);

  }

  if(js_checkbox2.checked == true){
  document.getElementById("js_text_2").style.display = "block";
  document.getElementById('js_text_2').setAttribute('required',true);

  }
  else{
  document.getElementById("js_text_2").style.display = "none"; 
  // document.getElementById('js_text_2').setAttribute('required',false);

  }


}

function submitted(event){
  event.preventDefault();

  var table = document.getElementById("table");
  table.style.display = "block"

  var myPost = document.getElementById("myPost");
  var title = document.getElementsByName("title");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var emailId = document.getElementById("emailId");
  var phoneNumber = document.getElementById("phoneNumber");
  var streetAddress1 = document.getElementById("streetAddress1");
  var streetAddress2 = document.getElementById("streetAddress2");
  var city = document.getElementById("city");
  var state = document.getElementById("state");
  var zipCode = document.getElementById("zipCode");
  var lang_domain = document.getElementsByName("lang");  
  var lang_commentbox = document.getElementsByName("lang1");  

  var source = document.getElementsByName("source");    
  var comments = document.getElementById("comments");
  var table = document.getElementById("table");

    var titleSelected = '';
    var sourceSelected = [];
    var domain = [];
    comment_text=[]
    // var result ='';

    var selected_lang = document.querySelector('select').value;
    console.log(selected_lang)
    
        // result = selected_lang.options[selected_lang.selectedIndex].text;
        // console.log(result);
    
    

      for(var i = 0; i < title.length; i++) {
          if(title[i].checked)
          titleSelected = title[i].value;
       }
       
       for(var i = 0; i < source.length; i++) {
          if(source[i].checked)
          sourceSelected.push(source[i].value);
       }

       for(var i = 0; i < lang_domain.length; i++) {
        if(lang_domain[i].checked)
        domain.push(lang_domain[i].value);
     }
     
     for(var i = 0; i < lang_commentbox.length; i++) {
      if(lang_commentbox[i].value!="")
      comment_text.push(lang_commentbox[i].value);
   }
     

      var newRow = table.insertRow(-1);
      var newCell = newRow.insertCell(0);
      var newText = document.createTextNode(titleSelected);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(1);
      newText = document.createTextNode(firstName.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(2);
      newText = document.createTextNode(lastName.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(3);
      newText = document.createTextNode(emailId.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(4);
      newText = document.createTextNode(phoneNumber.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(5);
      newText = document.createTextNode(streetAddress1.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(6);
      newText = document.createTextNode(streetAddress2.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(7);
      newText = document.createTextNode(city.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(8);
      newText = document.createTextNode(state.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(9);
      newText = document.createTextNode(zipCode.value);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(10);
      newText = document.createTextNode(sourceSelected.toString());
      newCell.appendChild(newText);
      newCell = newRow.insertCell(11);
      newText = document.createTextNode(selected_lang);
      newCell.appendChild(newText);
      newCell = newRow.insertCell(12);
      newText = document.createTextNode(domain.toString());
      newCell.appendChild(newText);
      newCell = newRow.insertCell(13);
      newText = document.createTextNode(comment_text.toString());
      newCell.appendChild(newText);
      newCell = newRow.insertCell(14);
      newText = document.createTextNode(comments.value);
      newCell.appendChild(newText);
      
      
      cpp_styling.style.display = "none";
      python_styling.style.display = "none";
      java_styling.style.display = "none";
      js_styling.style.display = "none";
      c_hash_styling.style.display = "none";

      document.getElementById('c++_text_1').removeAttribute("required");
      document.getElementById('c++_text_2').removeAttribute("required");
      document.getElementById('python_text_1').removeAttribute("required");
      document.getElementById('python_text_2').removeAttribute("required");
      document.getElementById('java_text_1').removeAttribute("required");
      document.getElementById('java_text_2').removeAttribute("required");
      document.getElementById('c#_text_1').removeAttribute("required");
      document.getElementById('c#_text_2').removeAttribute("required");
      document.getElementById('js_text_1').removeAttribute("required");
      document.getElementById('js_text_2').removeAttribute("required");

      myPost.reset();
      titleSelected = "";
      sourceSelected = [];

    
};
