// Row 2
// Keyboard Events

// Key Down
let inputOne = document.getElementById('inputOne');
inputOne.addEventListener('keydown', function(e){
    e.preventDefault()
    inputOne.value = e.code;
    console.log(e.code);
});

// Key up
let inputTwo = document.getElementById('inputTwo');
inputTwo.addEventListener('keyup', function(e){
    if(inputTwo.value.length >= 5);
    {
        alert('Max 5 Characters');
        inputTwo.disabled = true;
    }
});

// Key Press
let inputThree = document.getElementById('inputThree');
inputThree.addEventListener('keypress', function(){
var randomHex = Math.floor(Math.random()*16777215).toString(16);
inputThree.style.backgroundColor = "#" + randomHex;
});

// Alt + Ctrl Combo
let inputFour = document.getElementById('inputFour');
inputFour.addEventListener('keydown', function(e){
    if(e.ctrlkey && e.ShiftKey){
        console.log('both');
    }
});