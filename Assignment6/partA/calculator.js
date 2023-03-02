$(document).ready(function(){
    $("#number1").hide();
    $("#number2").hide();
    $("#input1").keyup(function () {
        validateNumber1();
      });
    
      $("#input2").keyup(function () {
        validateNumber2();
      });

      let num1Error = true;
      let num2Error = true;

      function validateNumber1() {
        var number = /^[0-9]+$/;        
        let num1 = $("#input1").val();
        if (num1.length == "") {
          $("#number1").show();
          $("#number1").html("Field cannot be empty");
          num1Error = false;
          return false;
        } else if (!number.test(num1)) {
          $("#number1").show();
          $("#number1").html("Field should contain only numbers");
          num1Error = false;
          return false;
        } else {
          $("#number1").hide();
          num1Error = true;
          return true;
        }
      }

      function validateNumber2() {
        var number = /^[0-9]+$/;        
        let num2 = $("#input2").val();
        if (num2.length == "") {
          $("#number2").show();
          $("#number2").html("Field cannot be empty");
          num2Error = false;
          return false;
        } else if (!number.test(num2)) {
          $("#number2").show();
          $("#number2").html("Field should contain only numbers");
          num2Error = false;
          return false;
        } else {
          $("#number2").hide();
          num2Error = true;
          return true;
        }
      }

      const performOperation = (operation) => {
        let input1 = document.querySelector('#input1');
        let input2 = document.querySelector('#input2');
        let total = 0;
      
        if (operation === 'add') {
          total = parseFloat(input1.value) + parseFloat(input2.value);
        } else if (operation === 'subtract') {
          total = parseFloat(input1.value) - parseFloat(input2.value);
        } else if (operation === 'multiply') {
          total = parseFloat(input1.value) * parseFloat(input2.value);
        } else if (operation === 'divide') {
          total = parseFloat(input1.value) / parseFloat(input2.value);
        }
      
        document.getElementById("output").value = total.toFixed(2);
      }
      
      document.getElementById("add").addEventListener('click', () => performOperation('add'));
      document.getElementById("subtract").addEventListener('click', () => performOperation('subtract'));
      document.getElementById("multiply").addEventListener('click', () => performOperation('multiply'));
      document.getElementById("divide").addEventListener('click', () => performOperation('divide'));
      document.getElementById("reset").addEventListener('click', () => {
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("output").value = "";
      });
      
    
})


