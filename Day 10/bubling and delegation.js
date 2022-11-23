let card = document.querySelector('.card');
let btn = document.querySelector('.btn');

// Bubling

// card.addEventListener('click',(e)=>{
//     console.log('card');
//     e.preventDefault();
// })
// btn.addEventListener('click',(e)=>{
//     console.log('btn');
//     e.preventDefault();
// })

// delgation 
// let body = document.querySelector('body');

document.body.addEventListener('click',child);

function child(e){
    if(e.target.classList.contains('fa-close')){
        e.target.parentElement.parentElement.remove();
        console.log('log');

    }
    e.preventDefault();
}