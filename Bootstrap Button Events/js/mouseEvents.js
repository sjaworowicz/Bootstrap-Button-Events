let btnOne = document.getElementById('click')
btnOne.addEventListener("click", function(e){
    e.target.style.background = "#a0b96b";
});

let btnTwo = document.getElementById('dblclick');
btnTwo.addEventListener('dblclick', function(event){
    event.target.style.border = "3px dotted #ec8f6a";
});

let btnThree = document.getElementById('mousedown')
btnThree.addEventListener('mousedown', function(event){
    event.target.style.border = "3px dotted blue";
});

let btnFour = document.getElementById('mouseenter')
btnFour.addEventListener('mouseenter', function(event){
     event.target.style.background = "red";
})