let button=document.getElementById('btn');
let bulb=document.getElementById('bulb');
button.addEventListener('click',display);

function display(e){
if(button.textContent.includes=('on')){
    bulb.src="/images/bulbon.jpeg";
    button.textContent='Turn off';
}
else{
    bulb.src="/images/bulboff.jpeg";
    button.textContent='Turn on';
}
}