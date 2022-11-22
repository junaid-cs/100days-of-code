let btn=document.querySelector('.btn');
let items=document.querySelector('.list-group-item');
let container=document.querySelector('.container');

// btn.addEventListener('click',display);
// btn.addEventListener('dblclick', display);
// btn.addEventListener('mousedown',display);
// btn.addEventListener('mouseup',display);
// btn.addEventListener('mouseover',display);
// btn.addEventListener('mouseout',display);
// btn.addEventListener('mouseenter',display);
container.addEventListener('mousemove',display);


function display(e){
    console.log("data submited");
    console.log(e.offsetX);
    // offsetX
    document.querySelector('body').style.backgroundColor=`rgba(${e.offsetX},${e.offsetY},55)`;

    // e.preventdefault();
    e.preventDefault();
}