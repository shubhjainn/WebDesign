

document.getElementById("add").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    console.log(input1.value);
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) + parseFloat(input2.value);
    console.log(total);
    document.getElementById("output").value=total.toFixed(2);
});


document.getElementById("subtract").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) - parseFloat(input2.value);
    document.getElementById("output").value=total.toFixed(2);
});

document.getElementById("multiply").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) * parseFloat(input2.value);
    document.getElementById("output").value=total.toFixed(2);
});

document.getElementById("divide").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) / parseFloat(input2.value);
    document.getElementById("output").value=total.toFixed(2);
});

document.getElementById("reset").addEventListener('click', () =>{
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("output").value="";


});

