//
function result(){
let inputValue=document.getElementById('inputData').value;

let displayHeading=document.getElementById('text');

displayHeading.innerHTML=inputValue;

displayHeading.style.color="BLACK"

//change color of body element

document.getElementsByTagName('body')[0].style.backgroundColor="SEAgreen"
}

let paraBkg=document.getElementById('para');

function colorChange(){
    paraBkg.style.backgroundColor="#"+(Math.random()*0xFFFFFF).toString(16);
}
paraBkg.addEventListener('mouseout',colorChange);