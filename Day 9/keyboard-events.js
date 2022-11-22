let form=document.querySelector('form');
let input=document.querySelector('input');
let select = document.querySelector('select');

// form.addEventListener('submit',display);
// input.addEventListener('keydown',display);
// form.addEventListener('keyup',display);
// form.addEventListener('keypress',display);
// input.addEventListener('focus',display);
// input.addEventListener('blur',display);
// form.addEventListener('input',display);
select.addEventListener('change',display);


function display(e){
    console.log(e.type);
    console.log(e.target.value);
    e.preventDefault();
}